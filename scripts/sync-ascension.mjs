import {mkdir,writeFile} from "node:fs/promises";

const source="https://ascension.gg/en/v2/coa-builder/voljin";
const response=await fetch(source);
if(!response.ok)throw new Error(`Ascension returned ${response.status}`);
const html=await response.text(),prefix="self.__next_f.push(";
const packets=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
  .map(match=>match[1])
  .filter(script=>script.startsWith(prefix))
  .map(script=>JSON.parse(script.slice(prefix.length,-1)))
  .map(packet=>packet[1])
  .filter(value=>typeof value==="string");

const payload=packets.find(value=>value.includes('"runtimeBuildProcess"'));
if(!payload)throw new Error("Ascension talent catalog was not found");
const start=payload.lastIndexOf('{"id":',payload.indexOf('"runtimeBuildProcess"'));
let depth=0,quoted=false,escaped=false,end=-1;
for(let index=start;index<payload.length;index++){
  const char=payload[index];
  if(quoted){if(escaped)escaped=false;else if(char==="\\")escaped=true;else if(char==='"')quoted=false;continue}
  if(char==='"'){quoted=true;continue}
  if(char==="{")depth++;
  if(char==="}"&&!--depth){end=index+1;break}
}
if(start<0||end<0)throw new Error("Ascension talent catalog JSON was incomplete");
const realm=JSON.parse(payload.slice(start,end)),{classes,entriesByTab}=realm.talents;
const iconUrl=path=>`https://db.ascension.gg/static/images/wow/icons/large/${String(path).split("\\").at(-1).trim().toLowerCase().replace(/[^a-z0-9_]/g,"")}.jpg`;

function makeTree(entries,tabId){
  const grouped=new Map;
  for(const entry of entries){const key=entry.group||entry.id;if(!grouped.has(key))grouped.set(key,[]);grouped.get(key).push(entry)}
  const nodes=[...grouped.entries()].map(([key,items])=>{
    items.sort((a,b)=>a.id-b.id);const first=items[0],cost=tabId===87?first.aeCost:first.teCost,threshold=tabId===87?first.reqTabAE:first.reqTabTE,passive=cost===0&&items.every(item=>item.isPassive);
    const granted=first.isStartingNode||passive&&!threshold,node={id:`n${key}`,entryIds:items.map(item=>item.id),name:items.map(item=>item.name).join(" / "),x:9.56+first.x*8.91,y:8+first.y*9.1111,max:Math.max(...items.map(item=>item.maxPoints)),points:granted?1:0,initialPoints:granted?1:0,cost,threshold,passive,shape:first.nodeType.includes("Square")?"square":"circle",spellIds:[...new Set(items.flatMap(item=>item.spellIds||[item.spellId]).filter(Boolean))],image:iconUrl(first.iconPath),description:""};
    if(items.length>1){node.options=items.map(item=>[item.name,item.spellIds||[item.spellId],"",iconUrl(item.iconPath)]);node.choice=0}
    return node;
  });
  const nodeByEntry=new Map(nodes.flatMap(node=>node.entryIds.map(id=>[id,node.id]))),edges=new Map;
  for(const entry of entries)for(const connected of entry.connectedNodeIds||[]){const a=nodeByEntry.get(entry.id),b=nodeByEntry.get(connected);if(!a||!b||a===b)continue;const edge=[a,b].sort();edges.set(edge.join(":"),edge)}
  return {budget:tabId===87?26:25,nodes,edges:[...edges.values()]};
}

const catalog={version:1,source,schemaVersion:realm.schema_version,classes:classes.map(item=>({
  id:item.classId,
  name:item.className,
  slug:item.className.toLowerCase().replace(/[^a-z0-9]+/g,""),
  tabs:item.tabs.filter(tab=>entriesByTab[`${item.classId}:${tab.tabId}`]?.length).sort((a,b)=>a.sortOrder-b.sortOrder).map(tab=>({id:tab.tabId,name:tab.tabName,tree:makeTree(entriesByTab[`${item.classId}:${tab.tabId}`],tab.tabId)}))
}))};
if(!catalog.classes.length||!catalog.classes.every(item=>item.tabs.length))throw new Error("Generated catalog failed validation");
await mkdir("data",{recursive:true});
await writeFile("data/voljin.json",JSON.stringify(catalog));
console.log(`Synced ${catalog.classes.length} classes, ${catalog.classes.reduce((sum,item)=>sum+item.tabs.length,0)} trees, and ${catalog.classes.reduce((sum,item)=>sum+item.tabs.reduce((total,tab)=>total+tab.tree.nodes.length,0),0)} nodes.`);
