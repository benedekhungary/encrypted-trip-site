(()=>{
  const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
  const liveMap='https://www.google.com/maps/dir/?api=1&origin=Budapest%20Ferenc%20Liszt%20International%20Airport&destination=Budapest%2C%20Hungary&travelmode=driving';
  const isDay=(x,n,date)=>x&&((Number(x.d)===n)||String(x.date||'').replace('.','/').includes(date));
  const staleCarPickup=s=>/איסוף.*רכב|לאסוף.*רכב|סניף.*רכב|עדיפות.*שדה התעופה/.test(String(s||''));
  const patchData=()=>{
    const groups=[];
    try{if(typeof three!=='undefined'&&Array.isArray(three))groups.push(three)}catch(e){}
    try{if(typeof two!=='undefined'&&Array.isArray(two))groups.push(two)}catch(e){}
    try{if(typeof trip!=='undefined'&&Array.isArray(trip))groups.push(trip)}catch(e){}
    groups.forEach(arr=>arr.forEach(day=>{
      if(isDay(day,1,'21/08')){
        if(Array.isArray(day.sched))day.sched=[
          ['14:55','נחיתה בבודפשט — טיסת IZ291'],
          ['15:00–17:30','איסוף מזוודות, מעבר ל־Enterprise וקבלת הרכב'],
          ['17:30','יציאה משדה התעופה ברכב השכור לכיוון מקום הלינה בבודפשט'],
          ['ערב','צ׳ק־אין וארוחת ערב רגועה; ללא אטרקציה מתוזמנת']
        ];
        if(Array.isArray(day.a))day.a=[
          {time:'14:55',name:'נחיתה בבודפשט — טיסת IZ291'},
          {time:'15:00–17:30',name:'איסוף מזוודות, מעבר ל־Enterprise וקבלת הרכב'},
          {time:'17:30',name:'יציאה משדה התעופה ברכב השכור לכיוון מקום הלינה בבודפשט'},
          {time:'ערב',name:'צ׳ק־אין וארוחת ערב רגועה; ללא אטרקציה מתוזמנת'}
        ];
        if(typeof day.map==='string')day.map=liveMap;
        else if(day.map&&typeof day.map==='object')day.map={...day.map,label:'שדה התעופה בודפשט → מקום הלינה בבודפשט',url:liveMap};
        if('rec' in day)day.rec='הרכב נאסף בשדה התעופה ביום הנחיתה; אין צורך באיסוף נוסף בשבת או בראשון.';
        if('note' in day)day.note='צפי יציאה מהשדה: 17:30. הערב נשאר גמיש לצ׳ק־אין וארוחה.';
      }
      if(isDay(day,2,'22/08')){
        if(Array.isArray(day.sched))day.sched=day.sched.filter(r=>!staleCarPickup(Array.isArray(r)?r.join(' '):r));
        if(Array.isArray(day.a))day.a=day.a.filter(a=>!staleCarPickup((a&&a.name)||a));
      }
      if(isDay(day,3,'23/08')){
        if(Array.isArray(day.sched))day.sched=day.sched.filter(r=>!staleCarPickup(Array.isArray(r)?r.join(' '):r));
        if(Array.isArray(day.a))day.a=day.a.filter(a=>!staleCarPickup((a&&a.name)||a));
        if(typeof day.note==='string'&&!day.note.includes('הרכב כבר נאסף'))day.note='הרכב כבר נאסף בשדה התעופה ב־21.08. '+day.note;
      }
    }));
  };
  const setRow=(row,time,text)=>{if(!row)return;const cells=[...row.children];if(cells[0])cells[0].textContent=time;if(cells[1])cells[1].textContent=text};
  const dayNumber=el=>Number(el.dataset.day||q('.num',el)?.textContent||q('.daynum',el)?.textContent||0);
  const patchDom=()=>{
    qa('.day').forEach(day=>{
      const n=dayNumber(day),txt=day.textContent||'';
      const rows=qa('.schedule .row,.activity',day);
      if(n===1||txt.includes('21/08')||txt.includes('21.08')){
        const plan=[
          ['14:55','נחיתה בבודפשט — טיסת IZ291'],
          ['15:00–17:30','איסוף מזוודות, מעבר ל־Enterprise וקבלת הרכב'],
          ['17:30','יציאה משדה התעופה ברכב השכור לכיוון מקום הלינה בבודפשט'],
          ['ערב','צ׳ק־אין וארוחת ערב רגועה; ללא אטרקציה מתוזמנת']
        ];
        plan.forEach((p,i)=>setRow(rows[i],p[0],p[1]));
        rows.slice(plan.length).forEach(r=>{if(/טיילת הדנובה|העברה למלון/.test(r.textContent||''))r.style.display='none'});
        const map=qa('a[href*="google.com/maps"]',day)[0];if(map){map.href=liveMap;const small=q('small',map);if(small)small.textContent='שדה התעופה בודפשט → מקום הלינה בבודפשט'}
        if(!q('.liveArrivalNote',day)){const body=q('.body,.day-body',day);if(body){const note=document.createElement('div');note.className='liveArrivalNote';note.style.cssText='margin:12px 0;padding:12px 14px;border-radius:12px;background:#eef7f2;border:1px solid #bdd8c8;font-weight:700';note.textContent='עדכון בפועל: איסוף הרכב מתבצע היום בשדה התעופה, עם יציאה צפויה ב־17:30.';body.insertBefore(note,body.firstChild)}}
      }
      if(n===2||txt.includes('22/08')||txt.includes('22.08'))rows.forEach(r=>{if(staleCarPickup(r.textContent)){r.style.display='none';r.classList.remove('taskRow')}});
      if(n===3||txt.includes('23/08')||txt.includes('23.08'))rows.forEach(r=>{if(staleCarPickup(r.textContent)){r.style.display='none';r.classList.remove('taskRow')}});
    });
  };
  patchData();patchDom();setTimeout(patchDom,250);setTimeout(patchDom,900);

  const animals=['🦊','🐼','🦁','🐬','🦒','🐘','🦉','🐧','🐨','🦋','🐢','🦄','🐯','🐻'];
  function build(route){const pane=q('#'+route);if(!pane)return;let box=q('.kidQuest',pane);if(!box){box=document.createElement('div');box.className='kidQuest';box.dataset.kidRoute=route;const anchor=q('.days',pane);if(anchor)anchor.insertAdjacentElement('beforebegin',box)}if(!box)return;const days=qa('.day',pane);let earned=0;const badges=days.map((d,i)=>{const day=Number(d.dataset.questDay)||i+1,on=d.classList.contains('done');if(on)earned++;return `<span class="animalBadge ${on?'earned':''}" title="יום ${day}">${animals[(day-1)%animals.length]}</span>`}).join('');box.innerHTML=`<div class="kidHead"><div><h3>🐾 מסע החיות של הילד</h3><p>מסמנים כל תחנה שסיימתם. כשכל משימות היום הושלמו — חיית היום מצטרפת לאוסף.</p></div><div class="kidProgress">${earned}/${days.length} חיות נאספו</div></div><div class="animalShelf">${badges}</div>`}
  ['three','two'].forEach(build);
  const obs=new MutationObserver(ms=>{if(ms.some(m=>m.type==='attributes'&&m.attributeName==='class'&&m.target.classList?.contains('day'))){['three','two'].forEach(build)}});
  qa('.day').forEach(d=>obs.observe(d,{attributes:true,attributeFilter:['class']}));
})();
