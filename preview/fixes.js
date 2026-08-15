(()=>{
  const q=(s,r=document)=>r.querySelector(s), qa=(s,r=document)=>[...r.querySelectorAll(s)];
  const routeMeta={three:{flags:'🇭🇺 🇦🇹 🇸🇮',name:'הונגריה · אוסטריה · סלובניה'},two:{flags:'🇭🇺 🇸🇮',name:'הונגריה · סלובניה'}};

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
    if(!q('#routeHeroFlags',h1)){
      h1.id='routeHeroTitle';
      h1.innerHTML='<span id="routeHeroFlags" class="heroFlags" style="display:inline-block;margin-left:.25em;white-space:nowrap">🇭🇺 🇦🇹 🇸🇮</span><span id="routeHeroName">הונגריה · אוסטריה · סלובניה</span>';
    }
    return true;
  }

  function syncRoute(route){
    const m=routeMeta[route]||routeMeta.three;
    ensureHero();
    const f=q('#routeHeroFlags'), n=q('#routeHeroName');
    if(f){f.textContent=m.flags;f.style.display='inline-block';f.style.visibility='visible';f.style.opacity='1'}
    if(n)n.textContent=m.name;
    document.title='טיול 2026 — '+m.name;
    try{localStorage.setItem('tripRoute2026',route)}catch(e){}
  }

  const tabs=getRouteTabs();
  tabs.forEach((b,i)=>{
    const route=i===0?'three':'two';
    b.dataset.route=route;
    b.addEventListener('click',()=>setTimeout(()=>syncRoute(route),0));
  });

  let current='three';
  const active=tabs.find(b=>b.classList.contains('active'));
  if(active) current=active.dataset.route||current;
  else { try{const s=localStorage.getItem('tripRoute2026');if(routeMeta[s])current=s}catch(e){} }
  syncRoute(current);

  // Keep the legacy site inside the Preview shell so there is always a route back.
  qa('a').forEach(a=>{
    const txt=(a.textContent||'').trim();
    if(a.classList.contains('legacyTab') || txt.includes('האתר הקודם')){
      a.href='preview/legacy.html';
      a.target='_top';
    }
  });
})();
