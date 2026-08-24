const N=(name,x,y,max=1,icon="",points=0)=>({id:crypto.randomUUID(),name,x,y,max,icon,points,description:`${name} — edit this description to match your custom talent.`});
const classNodes=[
N("Mirage",18.47,8,1,"40.7407% 72.2222%"),N("Mimic Ward",45.2,8,1,"72.2222% 0"),N("Healing Ward",71.93,8,1,"79.6296% 40.7407%"),N("Juju Injection",27.38,17.1111,2,"22.2222% 57.4074%"),N("Chosen One",45.2,17.1111,1,"16.6667% 42.5926%"),N("Spiritual Traditions",63.02,17.1111,1,"77.7778% 48.1481%"),N("Mojo Madness",36.29,26.2222,1,"90.7407% 96.2963%"),N("Wizened",54.11,26.2222,2,"72.2222% 59.2593%"),N("Seeker",80.84,26.2222,1,"50% 90.7407%"),N("Death Draught",27.38,35.3333,1,"25.9259% 66.6667%"),N("Cleansing Idol",63.02,35.3333,1,"27.7778% 100%"),N("Amphibimorph",45.2,44.4444,1,"50% 70.3704%"),N("Spirit Warden",71.93,44.4444,1,"88.8889% 94.4444%"),N("Loa Empowerment",9.56,53.5556,1,"98.1482% 72.2222%"),N("Alchemical Enhancement",27.38,53.5556,1,"5.55556% 38.8889%"),N("Vol'jin's Vigil",63.02,53.5556,1,"59.2593% 46.2963%"),N("Swift Idol",80.84,53.5556,1,"31.4815% 100%"),N("Slither",18.47,62.6667,1,"98.1482% 88.8889%"),N("Touch of Mueh'zala",36.29,62.6667,1,"38.8889% 38.8889%"),N("Potent Mixes",54.11,62.6667,1,"16.6667% 57.4074%"),N("Spirit Walker",71.93,62.6667,2,"22.2222% 38.8889%"),N("Hastened",71.93,71.7778,1,"53.7037% 57.4074%"),N("Veil of Darkness",27.38,80.8889,1,"72.2222% 92.5926%"),N("Devotion to Bwonsamdi",45.2,80.8889,1,"29.6296% 48.1481%"),N("One Armed Waltz",63.02,80.8889,1,"87.037% 20.3704%"),N("Loa Communion",18.47,90,1,"33.3333% 94.4444%"),N("Cursed Effigy",45.2,90,1,"29.6296% 100%"),N("For Da Loa!",71.93,90,1,"85.1852% 20.3704%"),N("Sen'jin's Swiftness / Sen'jin's Wisdom",9.56,26.2222,1,"98.1482% 12.963%"),N("Jinx of Decay / Will of the Serpent",18.47,44.4444,1,"16.6667% 92.5926%"),N("Gonk's Blessing / Krag'wa's Blessing",45.2,53.5556,1,"31.4815% 9.25926%"),N("Dark Mojo / Blessing of Hir'eek",18.47,71.7778,1,"92.5926% 96.2963%"),N("Blatant Curse / Latent Curse",45.2,71.7778,1,"7.40741% 90.7407%")];
const specNodes=[
N("Ingredient: Jungle Shrooms",33.8,8,1,"31.4815% 55.5556%",1),N("Potion Toss",50,8,1,"27.7778% 57.4074%",1),N("Cauldron Brewer",90.5,8,1,"33.3333% 51.8519%"),N("Mixologist",41.9,17.1111,1,"18.5185% 57.4074%"),N("Potent Mixes",25.7,26.2222,2,"16.6667% 57.4074%"),N("Mojo Addiction",41.9,26.2222,2,"70.3704% 96.2963%"),N("Brewmaster",58.1,26.2222,2,"66.6667% 40.7407%"),N("Spirit Healer",90.5,26.2222,1,"22.2222% 90.7407%"),N("Presence of the Loa",17.6,35.3333,1,"11.1111% 68.5185%"),N("Splash Potion",41.9,35.3333,1,"14.8148% 57.4074%"),N("Plentiful Potions",66.2,35.3333,1,"83.3333% 42.5926%"),N("Ingredient: Frog Bones",17.6,44.4444,1,"27.7778% 5.55556%"),N("Potion Boss",33.8,44.4444,1,"57.4074% 96.2963%"),N("Splash On 'Em",50,44.4444,1,"72.2222% 51.8519%"),N("Ingredient: Bloodthistle",66.2,44.4444,1,"11.1111% 53.7037%"),N("Loa's Blessing",90.5,44.4444,1,"64.8148% 51.8519%"),N("Fresh Ingredients",9.5,53.5556,2,"1.85185% 62.963%"),N("Mojo Beam",41.9,53.5556,1,"3.7037% 75.9259%"),N("Mojo: Fish Bones",58.1,53.5556,1,"88.8889% 38.8889%"),N("Mojo: Frog Shrooms",17.6,62.6667,1,"1.85185% 40.7407%"),N("Jungle Secrets",33.8,62.6667,1,"44.4444% 29.6296%"),N("Mojo: Jungle Thistle",66.2,62.6667,1,"29.6296% 53.7037%"),N("Mojo Wave",90.5,62.6667,1,"66.6667% 72.2222%"),N("Sen'jin's Presence",33.8,71.7778,1,"1.85185% 42.5926%"),N("Disciple of Sseratus",50,71.7778,1,"1.85185% 3.7037%"),N("Base: Beast Blood",66.2,71.7778,1,"62.963% 66.6667%"),N("Voodoo Cauldron",25.7,80.8889,1,"16.6667% 44.4444%"),N("Master of Concoctions",41.9,80.8889,1,"38.8889% 11.1111%"),N("Base: Crystal Water",58.1,80.8889,1,"11.1111% 31.4815%"),N("Spirit Link Idol",90.5,80.8889),N("Unstable Concoction",25.7,90,1,"51.8519% 96.2963%"),N("Master Mixologist",41.9,90,1,"70.3704% 38.8889%"),N("Tiki Splash",58.1,90,1,"7.40741% 44.4444%"),N("Spirit Out Of The Bottle / Touch of the Spirits",25.7,53.5556,1,"48.1481% 11.1111%"),N("Spice: Peacebloom / Spice: Earthroot",74.3,53.5556,1,"66.6667% 51.8519%"),N("Rage Brew / Arcane Brew",50,62.6667,1,"11.1111% 40.7407%"),N("Jungle Booms / Doctor of the Jungle",17.6,71.7778,1,"24.0741% 11.1111%")];
export const addTalentMetadata=(nodes,rows)=>{
  for(const [name,spellIds,shape="circle",options] of rows){
    const node=nodes.find(item=>item.name===name);
    if(node)Object.assign(node,{spellIds,shape,description:"",...(options?{options,choice:0}:{})});
  }
  return nodes;
};

addTalentMetadata(classNodes,[
  ["Mirage",[501136],"square"],["Mimic Ward",[707162],"square"],["Healing Ward",[500957],"square"],["Juju Injection",[503608,503609]],["Chosen One",[503742]],["Spiritual Traditions",[705911]],["Mojo Madness",[705871]],["Wizened",[705903,705904]],["Seeker",[705880]],["Death Draught",[602220],"square"],["Cleansing Idol",[504840],"square"],["Amphibimorph",[500952],"square"],["Spirit Warden",[503774]],["Loa Empowerment",[706368]],["Alchemical Enhancement",[705921]],["Vol'jin's Vigil",[504465],"square"],["Swift Idol",[804226],"square"],["Slither",[500947],"square"],["Touch of Mueh'zala",[706538]],["Potent Mixes",[503748]],["Spirit Walker",[504459,504636]],["Hastened",[705899]],["Veil of Darkness",[802100],"square"],["Devotion to Bwonsamdi",[802756]],["One Armed Waltz",[705909]],["Loa Communion",[705907]],["Cursed Effigy",[706542],"square"],["For Da Loa!",[705906]],
  ["Sen'jin's Swiftness / Sen'jin's Wisdom",[504426,504774],"circle",[["Sen'jin's Swiftness",[504426],"98.1482% 12.963%"],["Sen'jin's Wisdom",[504774],"33.3333% 64.8148%"]]],
  ["Jinx of Decay / Will of the Serpent",[681465,300663],"circle",[["Jinx of Decay",[681465],"16.6667% 92.5926%"],["Will of the Serpent",[300663],"11.1111% 64.8148%"]]],
  ["Gonk's Blessing / Krag'wa's Blessing",[806469,807855],"circle",[["Gonk's Blessing",[806469],"31.4815% 9.25926%"],["Krag'wa's Blessing",[807855],"62.963% 12.963%"]]],
  ["Dark Mojo / Blessing of Hir'eek",[712396,572870],"circle",[["Dark Mojo",[712396],"92.5926% 96.2963%"],["Blessing of Hir'eek",[572870],"81.4815% 96.2963%"]]],
  ["Blatant Curse / Latent Curse",[301297,806283],"circle",[["Blatant Curse",[301297],"7.40741% 90.7407%"],["Latent Curse",[806283],"98.1482% 16.6667%"]]]
]);

addTalentMetadata(specNodes,[
  ["Ingredient: Jungle Shrooms",[801660],"square"],["Potion Toss",[801661],"square"],["Cauldron Brewer",[92085]],["Mixologist",[561069]],["Potent Mixes",[503748,504888]],["Mojo Addiction",[503696,504889]],["Brewmaster",[704512,707856]],["Spirit Healer",[560280]],["Presence of the Loa",[572871]],["Splash Potion",[802710],"square"],["Plentiful Potions",[803463]],["Ingredient: Frog Bones",[801663],"square"],["Potion Boss",[561072]],["Splash On 'Em",[707212]],["Ingredient: Bloodthistle",[801664],"square"],["Loa's Blessing",[705848]],["Fresh Ingredients",[705856,707858]],["Mojo Beam",[500950],"square"],["Mojo: Fish Bones",[705850],"square"],["Mojo: Frog Shrooms",[705851],"square"],["Jungle Secrets",[802219]],["Mojo: Jungle Thistle",[500472],"square"],["Mojo Wave",[707617]],["Sen'jin's Presence",[560544]],["Disciple of Sseratus",[300660]],["Base: Beast Blood",[705870],"square"],["Voodoo Cauldron",[804684],"square"],["Master of Concoctions",[801690]],["Base: Crystal Water",[500962],"square"],["Spirit Link Idol",[706369],"square"],["Unstable Concoction",[802487]],["Master Mixologist",[705864],"square"],["Tiki Splash",[500053]],
  ["Spirit Out Of The Bottle / Touch of the Spirits",[301175,578295],"circle",[["Spirit Out Of The Bottle",[301175],"48.1481% 11.1111%"],["Touch of the Spirits",[578295],"100% 14.8148%"]]],
  ["Spice: Peacebloom / Spice: Earthroot",[803700,504424],"square",[["Spice: Peacebloom",[803700],"66.6667% 51.8519%"],["Spice: Earthroot",[504424],"9.25926% 53.7037%"]]],
  ["Rage Brew / Arcane Brew",[503750,801689],"square",[["Rage Brew",[503750],"11.1111% 40.7407%"],["Arcane Brew",[801689],"12.963% 40.7407%"]]],
  ["Jungle Booms / Doctor of the Jungle",[705859,706545],"circle",[["Jungle Booms",[705859],"24.0741% 11.1111%"],["Doctor of the Jungle",[706545],"79.6296% 24.0741%"]]]
]);

const freeSpecSpells=new Set([801660,801661,92085,560280,705848,707617,706369]);
classNodes.forEach(node=>Object.assign(node,{cost:1,threshold:node.y>=80?24:node.y>=44?9:0}));
specNodes.forEach(node=>{node.cost=freeSpecSpells.has(node.spellIds[0])?0:1;node.threshold=node.cost&&node.y>=80?23:node.cost&&node.y>=44?8:0});

export {classNodes,specNodes};
const E=(nodes,pairs)=>pairs.map(pair=>pair.split(",").map(i=>nodes[+i.slice(1)].id));
const classEdges=E(classNodes,["n3,n1","n3,n0","n4,n1","n5,n1","n5,n2","n6,n4","n6,n3","n7,n4","n7,n5","n8,n5","n9,n6","n9,n28","n10,n7","n10,n8","n11,n10","n11,n9","n12,n10","n13,n29","n14,n11","n14,n29","n15,n11","n15,n12","n16,n12","n17,n13","n17,n14","n18,n30","n18,n14","n19,n15","n19,n30","n20,n15","n20,n16","n21,n20","n22,n31","n22,n32","n23,n32","n24,n21","n24,n32","n25,n22","n26,n24","n26,n23","n26,n22","n27,n24","n28,n3","n29,n9","n30,n11","n31,n17","n32,n19","n32,n18"]);
const specEdges=E(specNodes,["n3,n0","n3,n1","n4,n3","n5,n3","n6,n3","n7,n2","n8,n4","n9,n4","n9,n6","n9,n5","n10,n6","n11,n8","n12,n9","n13,n9","n14,n10","n15,n7","n16,n11","n17,n13","n17,n9","n17,n12","n18,n14","n18,n13","n19,n33","n19,n16","n19,n11","n20,n17","n21,n34","n21,n18","n21,n14","n22,n15","n23,n20","n24,n35","n25,n21","n25,n35","n26,n23","n26,n36","n27,n23","n27,n24","n28,n24","n28,n25","n29,n22","n30,n26","n31,n27","n32,n28","n33,n12","n33,n11","n34,n14","n35,n17","n36,n19","n36,n20"]);

export const encodeState=value=>btoa(String.fromCharCode(...new TextEncoder().encode(JSON.stringify(value))));
export const decodeState=value=>JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(value),c=>c.charCodeAt(0))));
export const toggleEdge=(edges,a,b)=>{const i=edges.findIndex(e=>e.includes(a)&&e.includes(b));return i<0?[...edges,[a,b]]:edges.filter((_,n)=>n!==i)};
export const dbSpellUrl=id=>`https://db.ascension.gg/?spell=${Math.max(1,Math.trunc(Number(id)||1))}`;
export const dbIconUrl=icon=>`https://db.ascension.gg/static/images/wow/icons/large/${String(icon).toLowerCase().replace(/[^a-z0-9_]/g,"")}.jpg`;
export const spentPoints=nodes=>nodes.reduce((sum,node)=>sum+(node.cost===0?0:node.points),0);
export const meetsThreshold=(node,spent)=>spent>=(node.threshold||0);

if(typeof document!=="undefined"){
const base={version:1,active:"class",trees:{class:{label:"Class · AE",budget:26,nodes:classNodes,edges:classEdges},spec:{label:"Brewing · TE",budget:27,nodes:specNodes,edges:specEdges}}};
const clone=value=>structuredClone(value);
let state=clone(base),editing=false,refunding=false,selected=null,connectFrom=null,zoom=1,dirty=false,dragMoved=false;
const $=id=>document.getElementById(id),tree=()=>state.trees[state.active],nodeBy=id=>tree().nodes.find(n=>n.id===id);
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);
const parseSpellIds=value=>[...new Set(String(value).split(/[,\s]+/).map(Number).filter(id=>Number.isSafeInteger(id)&&id>0))];
const spellRequests=new Map();
const nodeDescriptionRequests=new WeakMap(),pendingLookups=new WeakMap();

function tooltipText(html){
  const source=new DOMParser().parseFromString(String(html).replace(/<br\s*\/?\s*>/gi,"\n"),"text/html");
  return (source.querySelector(".q")?.textContent||source.body.textContent||"").replace(/\u00a0/g," ").replace(/[ \t]+/g," ").replace(/\n\s+/g,"\n").trim();
}

window.$WowheadPower={registerSpell(id,_locale,data){
  const pending=spellRequests.get(id);
  if(pending)pending.finish({name:data.name_enus||`Spell ${id}`,description:tooltipText(data.tooltip_enus),icon:data.icon||""});
}};

function fetchSpell(id){
  if(spellRequests.get(id)?.promise)return spellRequests.get(id).promise;
  let resolve,reject;
  const promise=new Promise((ok,no)=>{resolve=ok;reject=no});
  const script=document.createElement("script");
  const finish=value=>{clearTimeout(timer);script.remove();spellRequests.set(id,{promise:Promise.resolve(value)});resolve(value)};
  spellRequests.set(id,{promise,finish});
  const timer=setTimeout(()=>{script.remove();spellRequests.delete(id);reject(new Error(`Spell ${id} timed out`))},8000);
  script.onerror=()=>{clearTimeout(timer);script.remove();spellRequests.delete(id);reject(new Error(`Spell ${id} was not found`))};
  script.src=`${dbSpellUrl(id)}&domain=en&power`;
  document.head.append(script);
  return promise;
}

function loadNodeDescriptions(node){
  if(nodeDescriptionRequests.has(node))return nodeDescriptionRequests.get(node);
  const ids=node.options?.map(option=>option[1][0])||node.spellIds?.slice(0,1)||[];
  if(!ids.length)return Promise.resolve();
  const request=Promise.all(ids.map(fetchSpell)).then(records=>{
    if(node.options){node.optionDescriptions=records.map(record=>record.description);node.dbDescription=records.map(record=>`${record.name}\n${record.description}`).join("\n\n")}
    else{node.dbName=records[0].name;node.dbDescription=records[0].description;node.dbIcon=dbIconUrl(records[0].icon)}
  }).catch(error=>{node.descriptionError=error.message}).finally(()=>nodeDescriptionRequests.delete(node));
  nodeDescriptionRequests.set(node,request);
  return request;
}

function validState(value){return value?.version===1&&value.trees?.class?.nodes?.length&&value.trees?.spec?.nodes?.length}
function hydrate(value){
  for(const key of ["class","spec"]){
    value.trees[key].budget=base.trees[key].budget;
    const originals=base.trees[key].nodes;
    for(const node of value.trees[key].nodes){
      const original=originals.find(item=>item.name===node.name);
      if(!original)continue;
      for(const field of ["spellIds","shape","options","choice","cost","threshold"])if(!(field in node)&&field in original)node[field]=clone(original[field]);
      if(node.description===`${node.name} — edit this description to match your custom talent.`)node.description="";
    }
  }
  return value;
}
function loadInitial(){
  try{
    const shared=new URL(location.href).hash.match(/data=([^&]+)/)?.[1];
    const saved=shared?decodeURIComponent(shared):localStorage.getItem("voljin-tree-editor");
    if(saved){const value=shared?decodeState(saved):JSON.parse(saved);if(validState(value))state=hydrate(value)}
  }catch(error){console.warn("Could not load saved tree",error);toast("Saved tree was invalid; loaded the original.")}
}

function render(){renderTabs();renderTree();renderInspector();updateStatus()}
function renderTabs(){
  $("tree-tabs").innerHTML=Object.entries(state.trees).map(([key,t])=>{const spent=spentPoints(t.nodes);return `<button class="tree-tab ${key===state.active?"active":""}" role="tab" aria-selected="${key===state.active}" data-tab="${key}"><span><strong>${t.label}</strong><small>${Math.max(0,t.budget-spent)} left</small></span><span><b>${spent}</b> <em>/ ${t.budget}</em></span></button>`}).join("");
  $("tree-tabs").querySelectorAll("button").forEach(button=>button.onclick=()=>{state.active=button.dataset.tab;selected=null;connectFrom=null;render()})
}
function renderLines(){
  const t=tree();
  $("lines").innerHTML=t.edges.map(([a,b])=>{const x=nodeBy(a),y=nodeBy(b);if(!x||!y)return "";const active=x.points||y.points;const chosen=selected&&(a===selected||b===selected);return `<line class="edge-under" x1="${x.x*10}" y1="${x.y*10}" x2="${y.x*10}" y2="${y.y*10}"/><line class="edge ${active?"live":""} ${chosen?"selected":""}" x1="${x.x*10}" y1="${x.y*10}" x2="${y.x*10}" y2="${y.y*10}"/>`}).join("")
}
function renderTree(){
  $("tree-stage").classList.toggle("editing",editing);$("tree-canvas").style.setProperty("--zoom",zoom);renderLines();
  const spent=spentPoints(tree().nodes);
  $("nodes").innerHTML=tree().nodes.map(n=>{
    const imageStyle=n.image?`background-image:url('${escapeHtml(n.image)}');background-size:cover;background-position:center`:n.icon?`background-position:${n.icon}`:"background-position:50% 50%";
    const optionStyle=option=>option[3]?`background-image:url('${escapeHtml(option[3])}');background-size:cover;background-position:center`:`background-position:${option[2]}`;
    const icon=n.options?.length===2&&!n.image?`<span class="node-icon choice-icon"><span class="choice-half choice-left" style="${optionStyle(n.options[0])}"></span><span class="choice-half choice-right" style="${optionStyle(n.options[1])}"></span></span>`:`<span class="node-icon" style="${imageStyle}"></span>`;
    const links=n.options?.length?`<div class="spell-links choice-links">${n.options.map((option,index)=>`<a class="${n.choice===index?"active":""}" href="${dbSpellUrl(option[1][0])}" target="_blank" rel="noreferrer" title="Open ${escapeHtml(option[0])} in Ascension DB"><span><b>${escapeHtml(option[0])}</b><small>${escapeHtml(n.optionDescriptions?.[index]||(!n.description?(n.descriptionError||"Loading description from Ascension DB…"):""))}</small></span><em>Spell ${option[1].join(", ")}</em></a>`).join("")}</div>`:`<div class="spell-links">${(n.spellIds||[]).map(id=>`<a href="${dbSpellUrl(id)}" target="_blank" rel="noreferrer">Spell ${id} ↗</a>`).join("")}</div>`;
    const description=n.description||(n.options?"":n.dbDescription||(n.descriptionError||"Loading description from Ascension DB…"));
    const edgeClass=n.y<18?"tooltip-below":n.x<20?"tooltip-right":n.x>80?"tooltip-left":"";
    const locked=!meetsThreshold(n,spent);
    const threshold=locked?`<span class="threshold-note">Requires ${n.threshold} points in this tree (${spent}/${n.threshold})</span>`:"";
    return `<div class="node ${n.shape==="square"?"square":""} ${n.changed?"changed":""} ${n.options?.length?"choice":""} ${edgeClass} ${n.points?"invested":""} ${locked?"locked":""} ${n.id===selected?"selected":""} ${n.id===connectFrom?"connect-source":""}" data-id="${n.id}" data-choice="${n.choice||0}" style="left:${n.x}%;top:${n.y}%"><button class="node-button" aria-label="${escapeHtml(n.name)}${n.changed?", changed":""}. ${locked?`Locked; requires ${n.threshold} points. `:""}${editing?"Select or drag talent":`${n.points} of ${n.max} points${n.options?.length?"; choose the left or right talent":""}`}">${icon}</button><span class="points">${n.points}/${n.max}</span>${n.changed?`<span class="changed-pill" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 10a6.5 6.5 0 0 1 11-3M14 6.8 17 7l.2-3M18 14a6.5 6.5 0 0 1-11 3M10 17.2 7 17l-.2 3"/></svg></span>`:""}<span class="tooltip"><strong>${escapeHtml(n.name)}</strong>${threshold}${description?`<span>${escapeHtml(description)}</span>`:""}${links}</span></div>`;
  }).join("");
  $("nodes").querySelectorAll(".node").forEach(bindNode)
  if(innerWidth<=520&&!$("tree-stage").dataset.centered)requestAnimationFrame(()=>{$("tree-stage").scrollLeft=($("tree-stage").scrollWidth-$("tree-stage").clientWidth)/2;$("tree-stage").dataset.centered="true"})
}
function bindNode(el){
  const id=el.dataset.id,button=el.querySelector("button");
  const loadDescription=()=>{const n=nodeBy(id),missing=n&&!n.description&&!n.descriptionError&&(n.options?!n.optionDescriptions:!n.dbDescription);if(missing)loadNodeDescriptions(n).then(renderTree)};
  button.onpointerenter=loadDescription;button.onfocus=loadDescription;
  button.oncontextmenu=event=>{event.preventDefault();if(!editing)changePoints(id,-1)};
  button.onclick=event=>{if(dragMoved){dragMoved=false;return}if(editing){if(connectFrom&&connectFrom!==id){tree().edges=toggleEdge(tree().edges,connectFrom,id);connectFrom=null;markDirty();render()}else{selected=id;render();if(innerWidth<=800)requestAnimationFrame(()=>$("inspector").scrollIntoView({behavior:"smooth",block:"start"}))}}else{const n=nodeBy(id);if(n.options?.length&&!refunding){n.choice=event.clientX<button.getBoundingClientRect().left+button.offsetWidth/2?0:1;if(n.points){markDirty();render();return}}changePoints(id,refunding?-1:1)}};
  button.onpointerdown=event=>{if(!editing)return;dragMoved=false;button.setPointerCapture(event.pointerId);const rect=$("tree-canvas").getBoundingClientRect();const move=e=>{dragMoved=true;const n=nodeBy(id);n.x=Math.max(4,Math.min(96,(e.clientX-rect.left)/rect.width*100));n.y=Math.max(4,Math.min(96,(e.clientY-rect.top)/rect.height*100));el.style.left=`${n.x}%`;el.style.top=`${n.y}%`;renderLines()};button.onpointermove=move;button.onpointerup=()=>{button.onpointermove=null;if(dragMoved)markDirty()}}
}
function changePoints(id,delta){const n=nodeBy(id),spent=spentPoints(tree().nodes);if(delta>0&&!meetsThreshold(n,spent))return toast(`Spend ${n.threshold-spent} more point${n.threshold-spent===1?"":"s"} to unlock this talent.`);if(delta>0&&n.cost!==0&&spent>=tree().budget)return toast("No points left in this tree.");const next=Math.max(0,Math.min(n.max,n.points+delta));if(next===n.points)return;if(delta<0&&n.cost!==0&&tree().nodes.some(node=>node!==n&&node.points&&!meetsThreshold(node,spent-1)))return toast("Refund talents from higher thresholds first.");n.points=next;markDirty();render()}

function renderInspector(){
  $("inspector").hidden=!editing;const n=nodeBy(selected);$("talent-form").querySelectorAll("input,textarea,button,select").forEach(el=>el.disabled=!n);$("delete-btn").disabled=!n;$("connect-btn").disabled=!n;
  $("inspector-title").textContent=n?.name||"Select a talent";$("talent-name").value=n?.name||"";$("talent-description").value=n?.description||n?.dbDescription||"";$("talent-spells").value=n?.spellIds?.join(", ")||"";$("talent-choice").checked=!!n?.options?.length;$("talent-changed").checked=!!n?.changed;$("talent-shape").value=n?.shape==="square"?"square":"circle";$("talent-max").value=n?.max||1;$("talent-threshold").value=n?.threshold||0;$("talent-threshold").max=tree().budget;$("talent-icon").value=n?.image||"";$("spell-load-state").textContent="";$("connect-btn").textContent=connectFrom?"Cancel connection":"Connect talent";$("connect-help").hidden=!connectFrom;
  const missing=n&&!n.description&&!n.descriptionError&&!n.dbDescription&&(n.options?!n.optionDescriptions:!n.dbDescription);
  if(missing)loadNodeDescriptions(n).then(()=>{if(selected===n.id){renderTree();renderInspector()}})
}
function updateStatus(){const t=tree();$("status").textContent=editing?(connectFrom?"Connection mode: choose another talent.":"Edit mode: drag talents or select one to edit."):(refunding?"Refund mode: tap talents to remove points.":"View mode: tap to spend; use Refund to remove points.");$("node-count").textContent=`${t.nodes.length} talents · ${t.edges.length} connections`;$("save-state").textContent=dirty?"Unsaved changes":"Saved locally";$("refund-btn").disabled=editing;$("refund-btn").classList.toggle("active",refunding);$("refund-btn").setAttribute("aria-pressed",refunding)}
function markDirty(){dirty=true;$("share-row").hidden=true;updateStatus()}
function toast(message){const el=$("toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2200)}

$("edit-toggle").onchange=event=>{editing=event.target.checked;refunding=false;selected=null;connectFrom=null;render()};
$("refund-btn").onclick=()=>{refunding=!refunding;updateStatus();toast(refunding?"Refund mode on.":"Spend mode on.")};
let spellLookupTimer=0,spellLookupToken=0;
async function previewSpellIds(){
  const n=nodeBy(selected),ids=parseSpellIds($("talent-spells").value),token=++spellLookupToken;
  if(!n||!ids.length){$("spell-load-state").textContent=ids.length?"":"Enter a spell ID to load its DB data.";return}
  $("spell-load-state").textContent=`Loading ${ids.length===1?"spell":"spells"} from Ascension DB…`;
  try{
    const records=await Promise.all(ids.map(fetchSpell));
    if(token!==spellLookupToken||selected!==n.id)return;
    const choice=$("talent-choice").checked&&records.length>=2;
    const description=choice?records.slice(0,2).map(record=>`${record.name}\n${record.description}`).join("\n\n"):records[0].description;
    $("talent-name").value=choice?records.slice(0,2).map(record=>record.name).join(" / "):records[0].name;
    $("talent-description").value=description;
    if(!choice)$("talent-icon").value=dbIconUrl(records[0].icon);
    pendingLookups.set(n,{ids,records,description});
    $("spell-load-state").textContent=`Loaded ${records.map(record=>record.name).join(" + ")}. You can edit the text before applying.`;
  }catch(error){if(token===spellLookupToken)$("spell-load-state").textContent=`Could not load DB data: ${error.message}.`}
}
$("talent-spells").oninput=()=>{clearTimeout(spellLookupTimer);$("spell-load-state").textContent="Waiting for a complete spell ID…";spellLookupTimer=setTimeout(previewSpellIds,500)};
$("talent-choice").onchange=()=>{if($("talent-choice").checked&&parseSpellIds($("talent-spells").value).length>=2)previewSpellIds()};
$("talent-form").onsubmit=event=>{event.preventDefault();const n=nodeBy(selected);if(!n)return;let ids=parseSpellIds($("talent-spells").value),pending=pendingLookups.get(n),lookup=pending?.ids.join()===ids.join()?pending:null;const choice=$("talent-choice").checked&&ids.length>=2;n.name=$("talent-name").value.trim()||"Untitled talent";n.dbDescription=lookup?.description||n.dbDescription||"";const description=$("talent-description").value.trim();n.description=description===n.dbDescription?"":description;if(choice){ids=ids.slice(0,2);const old=n.options||[];n.options=ids.map((id,index)=>[lookup?.records[index]?.name||old[index]?.[0]||`Spell ${id}`,[id],old[index]?.[2]||n.icon,lookup?dbIconUrl(lookup.records[index].icon):old[index]?.[3]]);n.choice=Math.min(n.choice||0,1);n.image="";if(lookup)n.optionDescriptions=lookup.records.slice(0,2).map(record=>record.description)}else{delete n.options;delete n.choice;delete n.optionDescriptions;if(lookup){n.dbName=lookup.records[0].name;n.dbIcon=dbIconUrl(lookup.records[0].icon)}}n.spellIds=ids;n.shape=$("talent-shape").value==="square"?"square":"circle";n.changed=$("talent-changed").checked;n.max=Math.max(1,Math.min(9,+$("talent-max").value||1));n.threshold=Math.max(0,Math.min(tree().budget,+$("talent-threshold").value||0));n.points=Math.min(n.points,n.max);n.image=choice?"":$("talent-icon").value.trim();pendingLookups.delete(n);markDirty();render();toast("Talent updated.")};
$("add-btn").onclick=()=>{const n=N("New Talent",50,50);n.description="Describe what this talent does.";tree().nodes.push(n);selected=n.id;markDirty();render();toast("New talent added.")};
$("delete-btn").onclick=()=>{if(!selected)return;tree().nodes=tree().nodes.filter(n=>n.id!==selected);tree().edges=tree().edges.filter(e=>!e.includes(selected));selected=null;connectFrom=null;markDirty();render();toast("Talent deleted.")};
$("connect-btn").onclick=()=>{connectFrom=connectFrom?null:selected;render()};
$("close-inspector").onclick=()=>{selected=null;connectFrom=null;render()};
$("save-btn").onclick=()=>{localStorage.setItem("voljin-tree-editor",JSON.stringify(state));dirty=false;updateStatus();toast("Tree saved in this browser.")};
$("share-btn").onclick=async()=>{const url=new URL(location.href);url.hash=`data=${encodeURIComponent(encodeState(state))}`;$("share-url").value=url.href;$("share-row").hidden=false;try{await navigator.clipboard.writeText(url.href);toast("Share link copied.")}catch{toast("Share link ready below.")}};
$("copy-btn").onclick=async()=>{try{await navigator.clipboard.writeText($("share-url").value);toast("Share link copied.")}catch{$("share-url").select();document.execCommand("copy");toast("Share link copied.")}};
$("reset-btn").onclick=()=>{if(!confirm("Reset both trees to the original Vol'jin layout?"))return;state=clone(base);selected=null;connectFrom=null;dirty=false;localStorage.removeItem("voljin-tree-editor");history.replaceState(null,"",location.pathname+location.search);$("share-row").hidden=true;render();toast("Original tree restored.")};
$("zoom-in").onclick=()=>{zoom=Math.min(1.5,zoom+.1);renderTree()};$("zoom-out").onclick=()=>{zoom=Math.max(.65,zoom-.1);renderTree()};$("center-btn").onclick=()=>{zoom=1;renderTree()};

loadInitial();render();
}
