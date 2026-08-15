(()=>{
  const q=(s,r=document)=>r.querySelector(s), qa=(s,r=document)=>[...r.querySelectorAll(s)];

  const style=document.createElement('style');
  style.textContent=`
    #routeHeroFlags{display:inline-flex!important;gap:.14em;align-items:center;direction:ltr;margin-left:.28em;vertical-align:.08em;white-space:nowrap}
    .routeFlag{display:inline-block;width:.74em;height:.49em;min-width:29px;min-height:19px;max-width:52px;max-height:35px;border-radius:4px;box-shadow:0 0 0 1px #ffffffb8,0 2px 7px #0004;overflow:hidden;flex:0 0 auto}
    .flagHU{background:linear-gradient(to bottom,#ce2939 0 33.333%,#fff 33.333% 66.666%,#477050 66.666% 100%)}
    .flagAT{background:linear-gradient(to bottom,#ed2939 0 33.333%,#fff 33.333% 66.666%,#ed2939 66.666% 100%)}
    .flagSI{position:relative;background:linear-gradient(to bottom,#fff 0 33.333%,#005da4 33.333% 66.666%,#ed1c24 66.666% 100%)}
    .flagSI:after{content:'';position:absolute;left:23%;top:12%;width:20%;height:32%;border-radius:40% 40% 55% 55%;background:linear-gradient(145deg,#fff 0 43%,#005da4 44% 67%,#ed1c24 68%);box-shadow:0 0 0 1px #005da4}
  `;
  document.head.appendChild(style);

  const flagHtml={
    three:'<span class="routeFlag flagHU" title="הונגריה" aria-label="דגל הונגריה"></span><span class="routeFlag flagAT" title="אוסטריה" aria-label="דגל אוסטריה"></span><span class="routeFlag flagSI" title="סלובניה" aria-label="דגל סלובניה"></span>',
    two:'<span class="routeFlag flagHU" title="הונגריה" aria-label="דגל הונגריה"></span><span class="routeFlag flagSI" title="סלובניה" aria-label="דגל סלובניה"></span>'
  };
  const routeMeta={three:{name:'הונגריה · אוסטריה · סלובניה'},two:{name:'הונגריה · סלובניה'}};

  function getRouteTabs(){
    let tabs=qa('.switch .tab');
    if(tabs.length<2) tabs=qa('.tab');
    tabs=tabs.slice(0,2);
    if(tabs[0]&&!tabs[0].dataset.route) tabs[0].dataset.route='three';
    if(tabs[1]&&!tabs[1].dataset.route) tabs[1].dataset.route='two';
    return tabs;
  }

  function ensureHero(){
    const hero=q('.hero'); if(!hero) return false;
    const h1=q('h1',hero); if(!h1) return false;
    h1.id='routeHeroTitle';
    if(!q('#routeHeroFlags',h1)) h1.innerHTML='<span id="routeHeroFlags" class="heroFlags"></span><span id="routeHeroName"></span>';
    return true;
  }

  function syncRoute(route){
    const m=routeMeta[route]||routeMeta.three;
    ensureHero();
    const f=q('#routeHeroFlags'), n=q('#routeHeroName');
    if(f) f.innerHTML=flagHtml[route]||flagHtml.three;
    if(n)n.textContent=m.name;
    document.title='טיול 2026 — '+m.name;
    try{localStorage.setItem('tripRoute2026',route)}catch(e){}
  }

  const tabs=getRouteTabs();
  tabs.forEach((b,i)=>{
    const route=i===0?'three':'two';
    b.dataset.route=route;
    b.addEventListener('click',()=>setTimeout(()=>syncRoute(route),10));
  });

  let current='three';
  const active=tabs.find(b=>b.classList.contains('active'));
  if(active) current=active.dataset.route||current;
  else { try{const s=localStorage.getItem('tripRoute2026');if(routeMeta[s])current=s}catch(e){} }
  syncRoute(current);

  qa('a').forEach(a=>{
    const txt=(a.textContent||'').trim();
    if(a.classList.contains('legacyTab') || txt.includes('האתר הקודם')){
      a.href='preview/legacy.html';
      a.target='_top';
    }
  });
})();
