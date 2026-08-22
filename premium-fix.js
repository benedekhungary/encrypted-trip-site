(()=>{
  const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
  const liveMap='https://www.google.com/maps/dir/?api=1&origin=Budapest%20Ferenc%20Liszt%20International%20Airport&destination=Budapest%2C%20Hungary&travelmode=driving';
  const visited22Map='https://www.google.com/maps/dir/?api=1&origin=Tihany%2C%20Hungary&waypoints=46.956328%2C17.902622&destination=BalatoniBob%20Leisure%20Park%2C%20Balatonf%C5%B1zf%C5%91%2C%20Hungary&travelmode=driving';
  const visited22=[
    {name:'טיהני (Tihany)',detail:'חצי האי טיהני'},
    {name:'Esterházy Beach and Waterpark',detail:'Balatonfüred · 46.956328, 17.902622'},
    {name:'BalatoniBob — מזחלות הרים',detail:'Balatonfűzfő'}
  ];
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
        day.actualVisited=visited22.map(x=>({...x}));
        if(typeof day.map==='string')day.map=visited22Map;
        else if(day.map&&typeof day.map==='object')day.map={...day.map,label:'טיהני → Esterházy Beach → BalatoniBob',url:visited22Map};
        const actualNote='בפועל ב־22.08 ביקרנו בטיהני, ב־Esterházy Beach and Waterpark בבלטונפיורד וב־BalatoniBob (מזחלות הרים) ב־Balatonfűzfő.';
        if('note' in day)day.note=actualNote;
        if('rec' in day)day.rec=actualNote;
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
      if(n===2||txt.includes('22/08')||txt.includes('22.08')){
        rows.forEach(r=>{if(staleCarPickup(r.textContent)){r.style.display='none';r.classList.remove('taskRow')}});
        const map=qa('a[href*="google.com/maps"]',day)[0];if(map){map.href=visited22Map;const small=q('small',map);if(small)small.textContent='טיהני → Esterházy Beach → BalatoniBob'}
        if(!q('.actualVisited22',day)){
          const body=q('.body,.day-body',day);
          if(body){
            const card=document.createElement('div');
            card.className='actualVisited22';
            card.style.cssText='margin:12px 0;padding:14px 16px;border-radius:14px;background:#eef7f2;border:1px solid #bdd8c8';
            card.innerHTML=`<div style="font-weight:900;margin-bottom:8px">✅ המקומות שהיינו בהם היום</div><ul style="margin:0 0 10px;padding-right:20px">${visited22.map(x=>`<li style="margin:5px 0"><strong>${x.name}</strong><div style="font-size:13px;opacity:.75">${x.detail}</div></li>`).join('')}</ul><a href="${visited22Map}" target="_blank" rel="noopener" style="font-weight:800">פתיחת מסלול המקומות ב־Google Maps</a>`;
            body.insertBefore(card,body.firstChild);
          }
        }
      }
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

(()=>{
  const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
  const isDay=(x,n,date)=>x&&((Number(x.d)===n)||String(x.date||'').replace('.','/').includes(date));
  const balatonMap='https://www.google.com/maps/search/?api=1&query=Lake%20Balaton%2C%20Hungary';
  const sundayPlan=[
    ['בוקר','נשארים באזור אגם בלטון — אין מעבר ליעד הבא'],
    ['יום','יום גמיש באזור בלטון: חוף / אטרקציה / טיול קצר לפי הקצב ומזג האוויר'],
    ['ערב','לינה נוספת באזור בלטון']
  ];
  const sundayNote='עדכון מסלול: ביום א׳ 23.08 נשארים יום נוסף באזור אגם בלטון וגם הלילה ישנים בבלטון. היציאה ליעד הבא נדחית לבוקר יום ב׳ 24.08.';
  const groups=[];
  try{if(typeof three!=='undefined'&&Array.isArray(three))groups.push(three)}catch(e){}
  try{if(typeof two!=='undefined'&&Array.isArray(two))groups.push(two)}catch(e){}
  try{if(typeof trip!=='undefined'&&Array.isArray(trip))groups.push(trip)}catch(e){}
  groups.forEach(arr=>{
    const prev=arr.find(d=>isDay(d,2,'22/08'));
    arr.forEach(day=>{
      if(isDay(day,3,'23/08')){
        if(Array.isArray(day.sched))day.sched=sundayPlan.map(x=>x.slice());
        if(Array.isArray(day.a))day.a=sundayPlan.map(x=>({time:x[0],name:x[1]}));
        ['hotel','lodging','stay','sleep','overnight','accommodation','base'].forEach(k=>{
          if(prev&&Object.prototype.hasOwnProperty.call(prev,k))day[k]=(prev[k]&&typeof prev[k]==='object')?{...prev[k]}:prev[k];
        });
        if(Object.prototype.hasOwnProperty.call(day,'title'))day.title='יום נוסף בבלטון';
        if(Object.prototype.hasOwnProperty.call(day,'city'))day.city='בלטון';
        if(Object.prototype.hasOwnProperty.call(day,'place'))day.place='אגם בלטון';
        if(typeof day.map==='string')day.map=balatonMap;
        else if(day.map&&typeof day.map==='object')day.map={...day.map,label:'יום נוסף באזור אגם בלטון',url:balatonMap};
        if(Object.prototype.hasOwnProperty.call(day,'note'))day.note=sundayNote;
        if(Object.prototype.hasOwnProperty.call(day,'rec'))day.rec=sundayNote;
        day.liveUpdate=sundayNote;
      }
      if(isDay(day,4,'24/08')){
        const monday='היום יוצאים מאזור בלטון לאחר הלינה הנוספת של 23.08. ';
        if(Object.prototype.hasOwnProperty.call(day,'note'))day.note=monday+String(day.note||'');
        day.liveStart='יציאה מאזור בלטון בבוקר 24.08';
      }
    });
  });
  const dayNum=el=>Number(el.dataset.day||q('.num',el)?.textContent||q('.daynum',el)?.textContent||0);
  const patchDom=()=>{
    qa('.day').forEach(day=>{
      const txt=day.textContent||'',n=dayNum(day);
      if(n===3||txt.includes('23/08')||txt.includes('23.08')){
        qa('.schedule .row,.activity',day).forEach(r=>{r.style.display='none';r.classList.remove('taskRow')});
        qa('.hotelBox,.hotel,.lodging,.stay,.sleep,.accommodation',day).forEach(el=>{if(!/בלטון|Balaton/i.test(el.textContent||''))el.style.display='none'});
        const map=qa('a[href*="google.com/maps"]',day)[0];
        if(map){map.href=balatonMap;const small=q('small',map);if(small)small.textContent='יום נוסף באזור אגם בלטון'}
        if(!q('.liveBalaton23',day)){
          const body=q('.body,.day-body',day)||day;
          const card=document.createElement('div');
          card.className='liveBalaton23';
          card.style.cssText='margin:12px 0;padding:16px;border-radius:14px;background:#eaf6ff;border:1px solid #afd4ea;box-shadow:0 4px 14px #00000010';
          card.innerHTML='<div style="font-weight:900;font-size:17px;margin-bottom:8px">🌊 עדכון לכל המסלולים — יום א׳ 23.08</div><div style="font-weight:800;margin-bottom:8px">נשארים יום נוסף באזור אגם בלטון וגם הלילה ישנים בבלטון.</div><div style="line-height:1.8">בוקר: נשארים באזור בלטון<br>יום: יום גמיש — חוף / אטרקציה / טיול קצר לפי הקצב<br>ערב: לינה נוספת בבלטון<br><strong>המעבר ליעד הבא נדחה לבוקר יום ב׳ 24.08.</strong></div>';
          body.insertBefore(card,body.firstChild);
        }
      }
      if(n===4||txt.includes('24/08')||txt.includes('24.08')){
        if(!q('.liveBalatonDeparture24',day)){
          const body=q('.body,.day-body',day)||day;
          const note=document.createElement('div');
          note.className='liveBalatonDeparture24';
          note.style.cssText='margin:10px 0;padding:11px 13px;border-radius:12px;background:#fff7df;border:1px solid #ead28a;font-weight:800';
          note.textContent='עדכון נקודת יציאה: הבוקר מתחיל בבלטון, לאחר הלינה הנוספת של 23.08.';
          body.insertBefore(note,body.firstChild);
        }
      }
    });
  };
  patchDom();setTimeout(patchDom,250);setTimeout(patchDom,900);setTimeout(patchDom,1800);
})();
