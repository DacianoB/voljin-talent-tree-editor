import {classNodes,dbSpellUrl,decodeState,encodeState,meetsThreshold,specNodes,spentPoints,toggleEdge} from "./app.js";

const sample={name:"Vol'jin",talents:[{name:"Mirage",shape:"square",changed:true,threshold:7}]};
console.assert(JSON.stringify(decodeState(encodeState(sample)))===JSON.stringify(sample),"share state must round-trip");
console.assert(toggleEdge([],"a","b").length===1,"connection must be added");
console.assert(toggleEdge([["a","b"]],"a","b").length===0,"connection must be removed");
console.assert([...classNodes,...specNodes].every(node=>node.spellIds?.every(Number.isSafeInteger)),"imported talents must keep their spell IDs");
console.assert(dbSpellUrl(801660)==="https://db.ascension.gg/?spell=801660","spell IDs must link to Ascension DB");
console.assert(spentPoints([{points:1,cost:0},{points:8,cost:1}])===8,"granted talents must not count as spent points");
console.assert(!meetsThreshold({threshold:8},7)&&meetsThreshold({threshold:8},8),"thresholds must unlock at the exact requirement");
console.assert(specNodes.filter(node=>node.cost===0).length===7,"Brewing's seven free nodes must not consume talent points");
console.log("Talent editor checks passed.");
