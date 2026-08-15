(()=>{
  const q=(s,r=document)=>r.querySelector(s), qa=(s,r=document)=>[...r.querySelectorAll(s)];
  const hero=q('.hero'), sw=q('.switch');
  if(!hero||!sw) return;

  qa('a[href="legacy.html"]').forEach(a=>a.href='legacy-index.html');
  if(!q('.legacyTab',sw)){
    const a=document.createElement('a'); a.className='legacyTab'; a.href='legacy-index.html'; a.textContent='🧰 האתר הקודם'; sw.appendChild(a);
  }

  const oldKicker=q('.tiny',hero);
  if(oldKicker){ oldKicker.classList.add('heroKicker'); }
  const top=document.createElement('div'); top.className='heroTop';
  if(oldKicker) top.appendChild(oldKicker);
  const chooser=document.createElement('div'); chooser.className='designSwitcher'; chooser.setAttribute('aria-label','בחירת עיצוב');
  chooser.innerHTML='<span class="designLabel">🎨 עיצוב</span><button class="themeBtn active" type="button" data-theme="classic">קלאסי</button><button class="themeBtn" type="button" data-theme="alpine">Alpine Glass</button><button class="themeBtn" type="button" data-theme="atlas">Travel Atlas</button>';
  top.appendChild(chooser); hero.insertBefore(top,hero.firstChild);
  const h1=q('h1',hero); if(h1){h1.id='routeHeroTitle';h1.innerHTML='<span id="routeHeroFlags" class="heroFlags">🇭🇺 🇦🇹 🇸🇮</span><span id="routeHeroName">הונגריה · אוסטריה · סלובניה</span>';}
  const hint=document.createElement('div');hint.id='designHint';hint.className='designHint';hint.textContent='העיצוב המקורי — נקי, רגוע וממוקד תכנון.'; if(h1)h1.insertAdjacentElement('afterend',hint);
  const themeMeta={classic:'העיצוב המקורי — נקי, רגוע וממוקד תכנון.',alpine:'Alpine Glass — מראה פרימיום של אגמים, יער והרים עם שכבות זכוכית.',atlas:'Travel Atlas — יומן מסע יוקרתי עם אופי של מפה מודפסת.'};
  function setTheme(t){if(!themeMeta[t])t='classic';document.body.dataset.theme=t;qa('.themeBtn').forEach(b=>b.classList.toggle('active',b.dataset.theme===t));hint.textContent=themeMeta[t];localStorage.setItem('tripTheme2026',t)}
  qa('.themeBtn').forEach(b=>b.addEventListener('click',()=>setTheme(b.dataset.theme))); setTheme(localStorage.getItem('tripTheme2026')||'classic');

  const tabs=qa('.tab[data-route]');
  const routeMeta={three:{flags:'🇭🇺 🇦🇹 🇸🇮',name:'הונגריה · אוסטריה · סלובניה'},two:{flags:'🇭🇺 🇸🇮',name:'הונגריה · סלובניה'}};
  function syncRoute(route){const m=routeMeta[route]||routeMeta.three;const f=q('#routeHeroFlags'),n=q('#routeHeroName');if(f)f.textContent=m.flags;if(n)n.textContent=m.name;document.title='טיול 2026 — '+m.name;localStorage.setItem('tripRoute2026',route)}
  tabs.forEach(b=>b.addEventListener('click',()=>syncRoute(b.dataset.route)));
  const saved=localStorage.getItem('tripRoute2026');
  if(saved&&routeMeta[saved]){tabs.forEach(b=>b.classList.toggle('active',b.dataset.route===saved));qa('.routePane').forEach(p=>p.classList.toggle('active',p.id===saved));syncRoute(saved)}else{const a=q('.tab.active[data-route]')||tabs[0];syncRoute(a?a.dataset.route:'three')}

  const budgetMarkup=(route)=>`<section class="budgetPanel" data-budget-route="${route}"><div class="budgetHead"><div><h3>💰 תקציב החלופה</h3><p>הזן סכומים בש״ח. הנתונים נשמרים אוטומטית במכשיר הזה ונפרדים לכל חלופה.</p></div><div class="budgetTotal" data-budget-total>₪0</div></div><div class="budgetGrid">${[['flights','✈️ טיסות'],['hotels','🏨 לינה'],['car','🚗 רכב שכור'],['road','⛽ דלק / אגרות / חניה'],['attractions','🎟️ אטרקציות'],['food','🍽️ אוכל'],['shopping','🛍️ קניות'],['other','➕ שונות']].map(([k,l])=>`<label class="budgetItem"><span>${l}</span><input type="number" min="0" step="50" inputmode="decimal" data-budget-key="${k}" placeholder="0"></label>`).join('')}</div><div class="budgetFoot"><span>סה״כ מתעדכן בזמן אמת.</span><button class="budgetReset" type="button" data-budget-reset>איפוס תקציב</button></div></section>`;
  const mapThree=`<section class="schematic"><div class="schematicHead"><div><h3>🧭 מפה סכמטית — חלופה A · 3 מדינות</h3><small>בודפשט → בלטון → קרינתיה → סלובניה → בודפשט</small></div><small>לא בקנה מידה · החצים מציגים את סדר ההתקדמות</small></div><div class="schematicScroll"><svg viewBox="0 0 1040 250" role="img" aria-label="מסלול הונגריה אוסטריה סלובניה"><path class="path" d="M80 130 C170 65 245 75 320 120 S470 190 555 120 S720 50 795 115 S915 175 965 125"/><g><circle class="node major" cx="80" cy="130" r="13"/><text class="lbl" x="80" y="105">בודפשט</text><text class="sub" x="80" y="160">BUD</text></g><g><circle class="node" cx="300" cy="112" r="12"/><text class="lbl" x="300" y="82">בלטון</text><text class="sub" x="300" y="144">2 לילות</text></g><g><circle class="node" cx="540" cy="127" r="12"/><text class="lbl" x="540" y="96">קרינתיה</text><text class="sub" x="540" y="158">Gerlitzen · Malta</text></g><g><circle class="node" cx="770" cy="105" r="12"/><text class="lbl" x="770" y="74">בלד</text><text class="sub" x="770" y="137">סלובניה</text></g><g><circle class="node" cx="900" cy="150" r="12"/><text class="lbl" x="900" y="184">Maribor / Ptuj</text></g><g><circle class="node major" cx="965" cy="125" r="13"/><text class="lbl" x="965" y="96">בודפשט</text><text class="sub" x="965" y="156">סיום</text></g></svg></div><div class="schematicLegend">● התחלה/סיום · הקישורים הקיימים ל־Google Maps נשארים זמינים.</div></section>`;
  const mapTwo=`<section class="schematic"><div class="schematicHead"><div><h3>🧭 מפה סכמטית — חלופה B · הונגריה–סלובניה</h3><small>בודפשט → בלטון → בלד והאלפים היוליאניים → Maribor/Ptuj → בודפשט</small></div><small>לא בקנה מידה · החצים מציגים את סדר ההתקדמות</small></div><div class="schematicScroll"><svg viewBox="0 0 1040 250" role="img" aria-label="מסלול הונגריה סלובניה"><path class="path" d="M80 130 C180 70 260 80 345 128 S520 175 625 105 S805 75 880 135 S940 155 965 125"/><g><circle class="node major" cx="80" cy="130" r="13"/><text class="lbl" x="80" y="105">בודפשט</text><text class="sub" x="80" y="160">BUD</text></g><g><circle class="node" cx="320" cy="120" r="12"/><text class="lbl" x="320" y="90">בלטון</text><text class="sub" x="320" y="152">2 לילות</text></g><g><circle class="node" cx="610" cy="112" r="12"/><text class="lbl" x="610" y="82">בלד</text><text class="sub" x="610" y="144">בסיס מרכזי</text></g><g><circle class="node" cx="845" cy="125" r="12"/><text class="lbl" x="845" y="94">Maribor / Ptuj</text><text class="sub" x="845" y="157">מזרח סלובניה</text></g><g><circle class="node major" cx="965" cy="125" r="13"/><text class="lbl" x="965" y="96">בודפשט</text><text class="sub" x="965" y="156">סיום</text></g></svg></div><div class="schematicLegend">● התחלה/סיום · החלופה משאירה יותר זמן וגמישות בסלובניה.</div></section>`;
  function addTools(route,mapHtml){const pane=q('#'+route);if(!pane||q('[data-budget-route="'+route+'"]',pane))return;const overview=q('.grid.cols2',pane);if(!overview)return;overview.insertAdjacentHTML('afterend',mapHtml+budgetMarkup(route));}
  addTools('three',mapThree); addTools('two',mapTwo);

  const fmt=new Intl.NumberFormat('he-IL',{style:'currency',currency:'ILS',maximumFractionDigits:0});
  qa('[data-budget-route]').forEach(box=>{const route=box.dataset.budgetRoute,key='tripBudget2026_'+route;let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')}catch(_){saved={}}const inputs=qa('[data-budget-key]',box);inputs.forEach(i=>{if(saved[i.dataset.budgetKey]!=null&&saved[i.dataset.budgetKey]!==0)i.value=saved[i.dataset.budgetKey]});const update=()=>{const state={};let total=0;inputs.forEach(i=>{const v=Math.max(0,Number(i.value)||0);state[i.dataset.budgetKey]=v;total+=v});localStorage.setItem(key,JSON.stringify(state));q('[data-budget-total]',box).textContent=fmt.format(total)};inputs.forEach(i=>i.addEventListener('input',update));q('[data-budget-reset]',box).addEventListener('click',()=>{inputs.forEach(i=>i.value='');update()});update()});
})();
