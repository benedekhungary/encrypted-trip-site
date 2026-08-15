(()=>{
  const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
  const animals=['🦊','🐼','🦁','🐬','🦒','🐘','🦉','🐧','🐨','🦋','🐢','🦄','🐯','🐻'];
  function build(route){const pane=q('#'+route);if(!pane)return;let box=q('.kidQuest',pane);if(!box){box=document.createElement('div');box.className='kidQuest';box.dataset.kidRoute=route;const anchor=q('.days',pane);if(anchor)anchor.insertAdjacentElement('beforebegin',box)}if(!box)return;const days=qa('.day',pane);let earned=0;const badges=days.map((d,i)=>{const day=Number(d.dataset.questDay)||i+1,on=d.classList.contains('done');if(on)earned++;return `<span class="animalBadge ${on?'earned':''}" title="יום ${day}">${animals[(day-1)%animals.length]}</span>`}).join('');box.innerHTML=`<div class="kidHead"><div><h3>🐾 מסע החיות של הילד</h3><p>מסמנים כל תחנה שסיימתם. כשכל משימות היום הושלמו — חיית היום מצטרפת לאוסף.</p></div><div class="kidProgress">${earned}/${days.length} חיות נאספו</div></div><div class="animalShelf">${badges}</div>`}
  ['three','two'].forEach(build);
  const obs=new MutationObserver(ms=>{if(ms.some(m=>m.type==='attributes'&&m.attributeName==='class'&&m.target.classList?.contains('day'))){['three','two'].forEach(build)}});
  qa('.day').forEach(d=>obs.observe(d,{attributes:true,attributeFilter:['class']}));
})();
