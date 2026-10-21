import './style.css'

const CARDS=[
// ---- Basis: de 16 kaarten uit de training
{id:"social-proof",d:"basis",e:"👥",name:"Social proof",one:"Mensen doen wat anderen doen.",ax:"M",sub:"erbij horen ↑",how:"Laat zien dat anderen al meedoen. Liefst recent en dichtbij.",ex:"“1.243 mensen tekenden deze week”, in plaats van 27.937 van 100.000."},
{id:"singularity",d:"basis",e:"🤝",name:"Singularity effect",one:"Eén persoon raakt meer dan een groep.",ax:"M",sub:"pijn ↑",how:"Eén gezicht, één naam, één verhaal. Op het moment dat iemand beslist.",ex:"Eén egel in nood in plaats van zes dieren in een raster."},
{id:"loss-aversion",d:"basis",e:"🕯️",name:"Loss aversion",one:"Verlies weegt zwaarder dan winst.",ax:"M",sub:"angst ↑",how:"Maak voelbaar wat er verloren gaat als niemand iets doet.",ex:"“Nog maar 15% natuur in Nederland.”"},
{id:"reciprocity",d:"basis",e:"🎁",name:"Reciprocity",one:"Wie iets krijgt, wil iets teruggeven.",ax:"M",sub:"erbij horen ↑",how:"Geef eerst iets: een gids, kennis, een bedankje. Vraag daarna.",ex:"KWF: eerst de gratis gids, dan de donatievraag."},
{id:"commitment",d:"basis",e:"👞",name:"Commitment & consistency",one:"Na een kleine ja volgt makkelijker een grote.",ax:"P",sub:"na de kleine ja",how:"Vraag eerst het kleine (tekenen), daarna het grote (lid worden).",ex:"Amnesty: op de bedankpagina wordt alsnog 20% lid."},
{id:"default",d:"basis",e:"🚶",name:"Default bias",one:"Mensen laten de standaard staan.",ax:"A",sub:"mentaal →",how:"Kies een verstandige voorselectie. Zichtbaar en eerlijk.",ex:"Middelste bedrag en ‘maandelijks’ al aangevinkt."},
{id:"anchoring",d:"basis",e:"⚓",name:"Anchoring bias",one:"Het eerste getal kleurt de rest.",ax:"A",sub:"geld →",how:"Begin bij het hoogste bedrag en laat zien wat het oplevert.",ex:"KWF: € 12 · 10 · 6. Niet: “al vanaf € 2,-”."},
{id:"progressive",d:"basis",e:"🍰",name:"Progressive disclosure",one:"Vraag pas iets als het nodig is.",ax:"A",sub:"tijd, mentaal →",how:"Toon velden pas na de keuze. Eén vraag per scherm.",ex:"IBAN en adres pas na ‘ja’. Eerst tekenen, dan pas de rest."},
{id:"hick",d:"basis",e:"👀",name:"Hick’s law",one:"Meer keuzes, moeilijker beslissen.",ax:"A",sub:"mentaal →",how:"Schrap keuzes die niets toevoegen. Of help kiezen met een voorselectie.",ex:"Mevrouw, Meneer, Anders: een keuze die je voor een handtekening niet nodig hebt."},
{id:"peak-end",d:"basis",e:"🎢",name:"Peak-end rule",one:"Mensen onthouden de piek en het einde.",ax:"M",sub:"plezier ↑",how:"Het einde blijft hangen. Maak van de bedankpagina een hoogtepunt, geen kale bevestiging.",ex:"Niet: “Bedankt voor je aanmelding.” Wel: “Dankzij jou staan er nu 32.872 namen.”"},
{id:"goal-gradient",d:"basis",e:"🥅",name:"Goal-gradient effect",one:"Hoe dichter bij het doel, hoe groter de motivatie.",ax:"M",sub:"hoop ↑",how:"Laat voortgang zien die haalbaar voelt.",ex:"Een tussendoel in zicht, in plaats van 27.937 van 100.000."},
{id:"endowment",d:"basis",e:"🧤",name:"Endowment effect",one:"Wat voelt als van jou, wil je niet kwijt.",ax:"M",sub:"plezier ↑",how:"Laat het bedankje zien alsof het al van hen is.",ex:"De eekhoornknuffel als beeld naast de keuze."},
{id:"labor-illusion",d:"basis",e:"🧗",name:"Labor illusion",one:"We waarderen wat we zien gebeuren.",ax:"M",sub:"hoop ↑",how:"Laat zien wat er met de handtekening of het geld gebeurt.",ex:"“Wat gebeurt er met je handtekening?” Verzameld, aangeboden, besproken."},
{id:"framing",d:"basis",e:"🖼️",name:"Framing",one:"Hoe je het zegt, bepaalt wat mensen kiezen.",ax:"M",sub:"hoop ↑",how:"Kies de woorden vanuit wat de donateur wint of voorkomt.",ex:"“Help de egel de winter door” in plaats van “Steun ons”."},
{id:"scarcity",d:"basis",e:"🦄",name:"Scarcity",one:"Wat beperkt is, voelt waardevoller.",ax:"P",sub:"urgentie",how:"Alleen als het echt zo is. Maak het hard en concreet.",ex:"“Knuffel gratis t/m 30 september”, niet “tijdelijk”."},
{id:"fitts",d:"basis",e:"🎯",name:"Fitts’s law",one:"Groot en dichtbij is makkelijker aan te tikken.",ax:"A",sub:"fysiek →",how:"Grote knop, binnen bereik van de duim, onderaan het scherm.",ex:"Een vaste knop “Teken de petitie” onderaan op mobiel."},
// ---- Verdieping
{id:"identifiable",d:"verdieping",e:"🦌",name:"Identifiable victim effect",one:"Eén herkenbaar slachtoffer raakt meer dan een statistiek.",ax:"M",sub:"pijn ↑",how:"Maak het concreet: dit dier, deze plek, dit moment. Geen percentages.",ex:"Het verhaal van één ree langs de A1, in plaats van ‘duizenden verkeersslachtoffers per jaar’."},
{id:"authority",d:"verdieping",e:"🎓",name:"Authority bias",one:"We vertrouwen experts en bekende afzenders.",ax:"M",sub:"hoop ↑",how:"Laat zien wie erachter staat: een keurmerk, een deskundige, een bekende naam.",ex:"Het CBF-keurmerk bij de knop, of een boswachter die uitlegt waarom."},
{id:"unity",d:"verdieping",e:"🌍",name:"Unity",one:"‘Wij’ overtuigt meer dan ‘jij’.",ax:"M",sub:"erbij horen ↑",how:"Spreek aan als groep waar iemand al bij hoort.",ex:"“Wij natuurliefhebbers” in plaats van “onze donateurs”."},
{id:"picture",d:"verdieping",e:"📷",name:"Picture superiority effect",one:"Beelden onthoud je beter dan woorden.",ax:"A",sub:"mentaal →",how:"Laat het belangrijkste zien in plaats van het te beschrijven.",ex:"De knuffel als foto naast de keuze, niet in een bijzin."},
{id:"cognitive-load",d:"verdieping",e:"🧠",name:"Cognitive load",one:"Hoe meer je moet verwerken, hoe sneller je afhaakt.",ax:"A",sub:"mentaal →",how:"Eén boodschap per scherm. Schrap tot het pijn doet.",ex:"Geen drie alinea’s op de bedankpagina, maar één zin en één vraag."},
{id:"serial-position",d:"verdieping",e:"🔢",name:"Serial position effect",one:"Het eerste en het laatste in een rij onthoud je het best.",ax:"A",sub:"mentaal →",how:"Zet het sterkste punt bovenaan en het op één na sterkste onderaan.",ex:"Voordelenlijst: ‘gratis parkeren’ eerst, de knuffel als laatste."},
{id:"von-restorff",d:"verdieping",e:"🌸",name:"Von Restorff effect",one:"Wat afwijkt, valt op.",ax:"P",sub:"opvallen",how:"Geef één ding een afwijkende vorm of kleur. Alleen dat ene ding.",ex:"Eén roze knop op een groene pagina."},
{id:"decoy",d:"verdieping",e:"🪤",name:"Decoy effect",one:"Een mindere optie maakt de andere aantrekkelijker.",ax:"A",sub:"mentaal →",how:"Zet een optie naast je doel die er duidelijk minder goed uit komt. Wel eerlijk houden.",ex:"€ 8 zonder magazine naast € 9 mét magazine: ineens is € 9 logisch."},
{id:"aesthetic",d:"verdieping",e:"✨",name:"Aesthetic-usability effect",one:"Wat verzorgd oogt, voelt makkelijker.",ax:"A",sub:"mentaal →",how:"Ruimte, uitlijning en rust. Dezelfde velden voelen dan korter.",ex:"Een rustig formulier voelt korter dan een rommelig formulier met dezelfde velden."},
{id:"zeigarnik",d:"verdieping",e:"🧩",name:"Zeigarnik effect",one:"Wat onaf is, blijft door je hoofd spelen.",ax:"P",sub:"herinnering",how:"Laat zien dat er nog één stap open staat.",ex:"Herinneringsmail: “Je bent er bijna: nog één stap om je steun af te ronden.”"},
{id:"curiosity",d:"verdieping",e:"🔍",name:"Curiosity gap",one:"Een gat in je kennis wil je dichten.",ax:"P",sub:"nieuwsgierigheid",how:"Geef een begin, geen einde. En lever wat je belooft.",ex:"Advertentie: “Waarom dit hert ’s nachts de snelweg over moet.”"},
{id:"ikea",d:"verdieping",e:"🔧",name:"IKEA effect",one:"Wat je zelf (mee)maakt, waardeer je meer.",ax:"M",sub:"plezier ↑",how:"Laat mensen iets kiezen of samenstellen.",ex:"Laat donateurs kiezen welk natuurgebied ze steunen."},
{id:"reactance",d:"verdieping",e:"🙅",name:"Reactance",one:"Voel je druk, dan wil je juist niet.",ax:"M",sub:"vermijd ↓",how:"Geef altijd een eerlijke uitweg, zonder schuldgevoel.",ex:"Niet: “Nee, de natuur kan me niet schelen.” Wel: “Nu niet”."},
{id:"spark",d:"verdieping",e:"⚡",name:"Spark",one:"Een prompt die motivatie geeft.",ax:"P",sub:"Fogg · spark",how:"Voor wie het kán, maar er geen zin in heeft.",ex:"Een advertentie met één dier in nood en één duidelijke vraag."},
{id:"facilitator",d:"verdieping",e:"🛝",name:"Facilitator",one:"Een prompt die het makkelijk maakt.",ax:"P",sub:"Fogg · facilitator",how:"Voor wie wil, maar het lastig vindt.",ex:"“Teken in 10 seconden: alleen naam en e-mail.”"},
{id:"signal",d:"verdieping",e:"🔔",name:"Signal",one:"Een prompt die alleen herinnert.",ax:"P",sub:"Fogg · signaal",how:"Voor wie wil én kan, maar het vergeet.",ex:"Een korte mail twee dagen voordat de petitie wordt aangeboden."}
];
const AXN={M:"Motivatie",A:"Ability",P:"Prompt"},AXI={M:"↕",A:"↔",P:"✸"};
const DECKS=[{id:"basis",name:"Basis",sub:"De 16 kaarten uit de training"},{id:"verdieping",name:"Verdieping",sub:"16 extra principes, waaronder de drie prompts van Fogg"}];
const INT=[0,1,2,4,8,16]; // dagen per doos
const KEY="principekaarten-v1";
const today=()=>{const d=new Date();d.setHours(0,0,0,0);return Math.floor(d.getTime()/864e5)};
let S={c:{},streak:0,last:null,xp:0,deck:"basis"};
try{const r=localStorage.getItem(KEY);if(r)S=Object.assign(S,JSON.parse(r))}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const byId=Object.fromEntries(CARDS.map(c=>[c.id,c]));
const esc=s=>s.replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(a,n)=>shuffle(a).slice(0,n);
const app=document.getElementById("app"),foot=document.getElementById("foot"),footin=document.getElementById("footin");
const axChip=c=>`<span class="ax ${c.ax}"><span aria-hidden="true">${AXI[c.ax]}</span>${AXN[c.ax]} · ${esc(c.sub)}</span>`;
const streakNow=()=>{const t=today();return (S.last===t||S.last===t-1)?S.streak:0};
let view="home",libFilter="alle";

function cardHTML(c,mini){return `<div class="flipwrap ${mini?"mini":""}"><button class="flip" aria-label="Draai kaart ${esc(c.name)}">
 <div class="face front"><span class="emo" aria-hidden="true">${c.e}</span><div style="display:flex;flex-direction:column;gap:10px"><h3>${esc(c.name)}</h3><span class="tap">Tik om te draaien</span></div></div>
 <div class="face back"><div class="one">${esc(c.one)}</div><div>${axChip(c)}</div><dl><div><dt>Zo pas je het toe</dt><dd>${esc(c.how)}</dd></div><div><dt>Bijvoorbeeld</dt><dd>${esc(c.ex)}</dd></div></dl></div>
</button></div>`}
function wireFlips(root){root.querySelectorAll(".flip").forEach(b=>b.onclick=()=>b.classList.toggle("on"))}

function top(){const st=streakNow();return `<div class="top"><div class="brand"><span class="eyebrow">Gedragsprincipes</span><h1>Principe<b>kaarten</b></h1></div>
<div class="stats"><span class="stat" title="Dagen op rij"><span class="emo" aria-hidden="true">🔥</span>${st}</span><span class="stat" title="Punten"><span class="emo" aria-hidden="true">⭐</span>${S.xp}</span></div></div>
<div class="tabs" role="tablist"><button role="tab" aria-selected="${view==="home"}" data-v="home">Leren</button><button role="tab" aria-selected="${view==="lib"}" data-v="lib">Alle kaarten</button></div>`}
function wireTop(){app.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>{view=b.dataset.v;render()})}

function dueCount(){const t=today();return CARDS.filter(c=>S.c[c.id]&&S.c[c.id].due<=t).length}
function home(){
 foot.hidden=true;const due=dueCount(),seen=CARDS.filter(c=>S.c[c.id]).length;
 const msg=seen===0?"Begin met je eerste les: drie nieuwe kaarten en een paar vragen. Vijf minuten.":due?`${due} ${due===1?"kaart staat":"kaarten staan"} klaar om te herhalen.`:"Alles herhaald voor vandaag. Je kunt nieuwe kaarten leren.";
 app.innerHTML=top()+`<section class="hero"><span class="eyebrow" style="color:inherit;opacity:.8">Les van vandaag</span><h2>Ken je <b>principes</b> uit je hoofd.</h2><p>${msg}</p><button class="big" id="start">Start les</button></section>
 <div class="decks">${DECKS.map(d=>{const cs=CARDS.filter(c=>c.d===d.id);const known=cs.filter(c=>(S.c[c.id]?.box||0)>=3).length;
  return `<section class="deck"><div class="deck-h"><h3>${d.name}</h3><small>${known} van ${cs.length} goed in je hoofd</small></div><span class="small">${d.sub}</span>
  <div class="dots" aria-label="Voortgang per kaart">${cs.map(c=>`<span class="dot" data-b="${S.c[c.id]?.box||0}" title="${esc(c.name)}"></span>`).join("")}</div></section>`}).join("")}
  <div class="legend"><span>nieuw</span><span>zit erin</span></div></div>
 <div class="how"><span class="eyebrow">Zo werkt het</span><span>Elke les mengt nieuwe kaarten met kaarten die je bijna vergeet. Goed antwoord: de kaart komt later terug (1, 2, 4, 8, dan 16 dagen). Fout: morgen weer.</span>
 <button class="reset" id="reset">Voortgang wissen</button></div>`;
 wireTop();document.getElementById("start").onclick=startLesson;
 const r=document.getElementById("reset");r.onclick=()=>{if(r.dataset.sure){S={c:{},streak:0,last:null,xp:0,deck:"basis"};save();render()}else{r.dataset.sure=1;r.textContent="Zeker weten? Tik nog een keer."}};
}
function lib(){
 foot.hidden=true;const f=libFilter;const list=CARDS.filter(c=>f==="alle"||c.d===f||c.ax===f);
 const fb=[["alle","Alle"],["basis","Basis"],["verdieping","Verdieping"],["M","Motivatie"],["A","Ability"],["P","Prompt"]];
 app.innerHTML=top()+`<div class="filters">${fb.map(([k,l])=>`<button class="chipbtn" aria-pressed="${f===k}" data-f="${k}">${l}</button>`).join("")}</div>
 <div class="grid">${list.map(c=>cardHTML(c,true)).join("")}</div>`;
 wireTop();wireFlips(app);app.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{libFilter=b.dataset.f;render()});
}

// ---- les
let L=null;
function startLesson(){
 const t=today();const seen=CARDS.filter(c=>S.c[c.id]);
 let due=seen.filter(c=>S.c[c.id].due<=t).sort((a,b)=>S.c[a.id].box-S.c[b.id].box).slice(0,7);
 const fresh=CARDS.filter(c=>!S.c[c.id]).slice(0,due.length>=6?1:3);
 if(due.length+fresh.length<4)due=due.concat(pick(seen.filter(c=>!due.includes(c)),4-due.length-fresh.length));
 const steps=[];fresh.forEach(c=>steps.push({t:"learn",c}));
 const quiz=[];fresh.forEach(c=>{quiz.push(mk(c,["def"]));quiz.push(mk(c,["voorbeeld","naam","as"]))});due.forEach(c=>quiz.push(mk(c,["voorbeeld","def","as","naam","toepassing"])));
 L={steps:steps.concat(shuffle(quiz)),i:0,done:0,right:0,wrong:new Set(),retried:new Set(),fresh:fresh.map(c=>c.id),firstTry:{}};
 L.total=L.steps.length;view="les";render();
}
function mk(c,types){return {t:types[Math.random()*types.length|0],c}}
function distract(c,n){const pool=CARDS.filter(x=>x.id!==c.id);const same=pool.filter(x=>x.d===c.d);return pick(same.length>=n?same:pool,n)}

function les(){
 const s=L.steps[L.i];const pct=Math.round(L.done/L.total*100);
 let body="";
 if(s.t==="learn"){body=`<div class="q"><span class="eyebrow">Nieuwe kaart</span>${cardHTML(s.c)}<span class="small">Draai de kaart, lees hem, en ga door.</span></div>`}
 else{
  const c=s.c;let q="",opts=[],kind="txt";
  if(s.t==="voorbeeld"){q=`<h2>Welk principe zie je hier?</h2><div class="prompt quote">${esc(c.ex)}</div>`;opts=shuffle([c,...distract(c,3)]).map(x=>({k:x.id,l:x.name}))}
  if(s.t==="def"){q=`<h2>Wat betekent <b style="font-family:var(--f-body)">${esc(c.name)}</b>?</h2>`;opts=shuffle([c,...distract(c,3)]).map(x=>({k:x.id,l:x.one}))}
  if(s.t==="naam"){q=`<h2>Welk principe is dit?</h2><div class="prompt quote">${esc(c.one)}</div>`;opts=shuffle([c,...distract(c,3)]).map(x=>({k:x.id,l:x.name}))}
  if(s.t==="toepassing"){q=`<h2>Bij welk principe hoort deze tip?</h2><div class="prompt">${esc(c.how)}</div>`;opts=shuffle([c,...distract(c,3)]).map(x=>({k:x.id,l:x.name}))}
  if(s.t==="as"){kind="as";q=`<h2>Op welke as werkt <b style="font-family:var(--f-body)">${esc(c.name)}</b>?</h2><div class="prompt">${esc(c.one)}</div>`;opts=["M","A","P"].map(a=>({k:a,l:AXN[a],i:AXI[a]}))}
  s.ans=s.t==="as"?c.ax:c.id;
  body=`<div class="q">${q}<div class="opts ${kind==="as"?"axopts":""}" role="group">${opts.map((o,n)=>kind==="as"?`<button class="opt" data-k="${o.k}" aria-pressed="false"><b class="ax-${o.k}" aria-hidden="true">${o.i}</b>${o.l}</button>`:`<button class="opt" data-k="${o.k}" aria-pressed="false"><span class="k">${n+1}</span><span>${esc(o.l)}</span></button>`).join("")}</div></div>`;
 }
 app.innerHTML=`<div class="bar"><button class="x" id="quit" aria-label="Stop les">×</button><div class="track" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><div class="fill" style="width:${pct}%"></div></div></div>`+body;
 document.getElementById("quit").onclick=()=>{L=null;view="home";render()};
 foot.hidden=false;foot.className="foot";
 if(s.t==="learn"){wireFlips(app);footin.innerHTML=`<button class="go" id="go">Doorgaan</button>`;document.getElementById("go").onclick=next;return}
 let sel=null;footin.innerHTML=`<button class="go" id="go" disabled>Controleer</button>`;const go=document.getElementById("go");
 const optEls=[...app.querySelectorAll(".opt")];
 optEls.forEach(b=>b.onclick=()=>{if(go.dataset.state)return;optEls.forEach(o=>o.setAttribute("aria-pressed","false"));b.setAttribute("aria-pressed","true");sel=b.dataset.k;go.disabled=false});
 go.onclick=()=>{if(go.dataset.state){next();return}check(s,sel,optEls,go)};
}
function check(s,sel,optEls,go){
 const ok=sel===s.ans;const c=s.c;go.dataset.state=1;
 optEls.forEach(o=>{if(o.dataset.k===s.ans)o.classList.add("right");else if(o.dataset.k===sel)o.classList.add("wrong")});
 if(!(c.id in L.firstTry))L.firstTry[c.id]=ok;else if(!ok)L.firstTry[c.id]=false;
 if(ok){L.right++;S.xp+=10}else{if(!L.retried.has(c.id)){L.retried.add(c.id);L.steps.push(mk(c,["def","naam","voorbeeld"]));L.total++}}
 foot.className="foot "+(ok?"good":"badf");
 footin.innerHTML=`<div class="verdict">${ok?["Goed zo!","Precies.","Klopt.","Raak."][Math.random()*4|0]:"Net niet."}</div><p><b>${esc(c.name)}</b>: ${esc(c.one)} ${axChip(c)}</p><button class="go" id="go" data-state="1">Doorgaan</button>`;
 document.getElementById("go").onclick=next;
}
function next(){L.done++;L.i++;if(L.i>=L.steps.length){finish();return}render()}
function finish(){
 const t=today();
 for(const id of new Set(L.steps.filter(s=>s.t!=="learn").map(s=>s.c.id))){const st=S.c[id]||{box:0,due:t};const ok=L.firstTry[id];st.box=ok?Math.min(5,st.box+1):1;st.due=t+INT[st.box];S.c[id]=st}
 if(S.last!==t){S.streak=(S.last===t-1)?S.streak+1:1;S.last=t}
 const quizN=L.steps.filter(s=>s.t!=="learn").length;const acc=quizN?Math.round(Object.values(L.firstTry).filter(Boolean).length/Object.keys(L.firstTry).length*100):100;
 save();foot.hidden=false;foot.className="foot";
 app.innerHTML=`<div class="end"><span class="emo" style="font-size:64px" aria-hidden="true">🌳</span><h2>Les klaar.</h2><p class="small">${L.fresh.length?`Nieuw geleerd: ${L.fresh.map(id=>esc(byId[id].name)).join(", ")}.`:"Alleen herhaling vandaag. Zo blijft het hangen."}</p>
 <div class="tiles"><div class="tile"><b>${L.right*10}</b><span>punten</span></div><div class="tile"><b>${acc}%</b><span>in één keer goed</span></div><div class="tile"><b>${S.streak}</b><span>dagen op rij</span></div></div></div>`;
 footin.innerHTML=`<button class="go" id="go">Terug naar overzicht</button>`;document.getElementById("go").onclick=()=>{L=null;view="home";render()};
}
document.addEventListener("keydown",e=>{if(view!=="les")return;const n=+e.key;const opts=[...app.querySelectorAll(".opt")];if(n>=1&&n<=opts.length){opts[n-1].click()}if(e.key==="Enter"){const g=document.getElementById("go");if(g&&!g.disabled)g.click()}});
function render(){if(view==="les"&&L)les();else if(view==="lib")lib();else home();window.scrollTo(0,0)}
render();
