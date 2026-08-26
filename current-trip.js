(()=>{
  if(document.getElementById('currentTrip20260826')) return;
  const style=document.createElement('style');
  style.id='currentTrip20260826';
  style.textContent=`
  :root{--bg:#f4f1e8;--paper:#fffdf7;--ink:#20312d;--muted:#66736d;--green:#2f6655;--mint:#dce9df;--gold:#e8b85a;--line:#d8d7cd;--shadow:0 14px 35px #25352b18;--done:#e6f5e9;--today:#fff1c9;--future:#e8f0fb}
  *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
  .hero{min-height:360px;padding:38px max(20px,calc((100% - 1180px)/2));background:linear-gradient(100deg,#183c32e8,#183c3272),url('https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?auto=format&fit=crop&w=1800&q=85') center/cover;color:#fff;display:flex;flex-direction:column;justify-content:space-between}
  .eyebrow{letter-spacing:.12em;font-size:13px;opacity:.9}.hero h1{font-size:clamp(38px,7vw,72px);line-height:1.02;margin:14px 0}.hero p{max-width:760px;font-size:19px}.hero-stats{display:flex;gap:10px;flex-wrap:wrap}.hero-stats span{background:#ffffff18;border:1px solid #ffffff40;padding:8px 13px;border-radius:999px;backdrop-filter:blur(7px)}
  main{max-width:1180px;margin:auto;padding:28px 20px 70px}.toolbar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;background:var(--paper);padding:16px;border-radius:18px;box-shadow:var(--shadow);margin-top:-52px;position:relative;z-index:2}.toolbar a,.toolbar button{border:0;border-radius:10px;padding:10px 14px;background:var(--green);color:#fff;text-decoration:none;font-weight:800;cursor:pointer}.toolbar a.secondary,.toolbar button.secondary{background:var(--mint);color:var(--green)}
  .section-title{display:flex;justify-content:space-between;align-items:end;gap:12px;margin:38px 0 14px}.section-title h2{margin:0;font-size:28px}.section-title p{margin:0;color:var(--muted)}
  .overview{display:grid;grid-template-columns:1.15fr .85fr;gap:18px}.panel{background:var(--paper);border-radius:18px;padding:20px;box-shadow:var(--shadow)}.panel h3{margin-top:0}.legend{display:flex;gap:8px;flex-wrap:wrap}.legend span,.chip{font-size:12px;padding:5px 9px;border-radius:999px;background:#eeeae0}.legend .d{background:var(--done);color:#1c6839}.legend .t{background:var(--today);color:#8a5a00}.legend .f{background:var(--future);color:#2457a7}.route-list{margin:12px 0 0;padding-right:20px}.route-list li{margin:7px 0}.muted{color:var(--muted)}
  .days{display:grid;gap:13px}.day{background:var(--paper);border:1px solid transparent;border-radius:16px;box-shadow:0 6px 18px #25352b0c;overflow:hidden}.day[open]{border-color:#b7cbbf}.day.done{border-right:6px solid #3c8b55}.day.today{border-right:6px solid #d39b22}.day.future{border-right:6px solid #4b74b8}.day summary{list-style:none;cursor:pointer;padding:17px;display:grid;grid-template-columns:62px 1fr auto;gap:15px;align-items:center}.day summary::-webkit-details-marker{display:none}.daynum{width:56px;height:56px;border-radius:14px;background:var(--mint);display:grid;place-items:center;color:var(--green);font-weight:900}.day.today .daynum{background:var(--today);color:#835400}.day.future .daynum{background:var(--future);color:#2457a7}.day h3{margin:0;font-size:19px}.day-meta{color:var(--muted);font-size:14px}.chips{display:flex;gap:6px;flex-wrap:wrap;justify-content:end}.day-body{padding:0 18px 18px 95px;border-top:1px solid #eeece5}.activity{display:grid;grid-template-columns:86px 1fr auto;gap:12px;padding:12px 0;border-bottom:1px solid #eeece5;align-items:start}.activity:last-child{border:0}.time{font-weight:850;color:var(--green)}.activity small{display:block;color:var(--muted);margin-top:3px}.links{display:flex;gap:7px;flex-wrap:wrap;justify-content:end}.links a{white-space:nowrap;text-decoration:none;background:#edf3ef;color:var(--green);border:1px solid #d4e1d8;border-radius:9px;padding:6px 9px;font-size:12px;font-weight:800}.links a.book{background:#fff1cf;color:#7c5700;border-color:#ecd18d}
  .checklist{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.check{background:var(--paper);padding:14px;border-radius:12px;box-shadow:0 5px 14px #25352b0b}.check label{display:flex;gap:9px;align-items:start}.check input{margin-top:5px}.progress{height:10px;background:#e0dfd7;border-radius:99px;overflow:hidden;margin-top:14px}.progress i{display:block;height:100%;width:0;background:var(--green);transition:.25s}.status-note{margin-top:12px;padding:13px;border-radius:12px;background:#fff8e5;border:1px solid #ead8a6}.footer{margin-top:38px;padding-top:18px;border-top:1px solid var(--line);color:var(--muted);font-size:13px}
  @media(max-width:760px){.hero{min-height:330px}.overview{grid-template-columns:1fr}.section-title{align-items:start;flex-direction:column}.day summary{grid-template-columns:56px 1fr}.chips{grid-column:2;justify-content:start}.day-body{padding:0 14px 14px}.activity{grid-template-columns:64px 1fr}.links{grid-column:2;justify-content:start}.checklist{grid-template-columns:1fr}.toolbar{margin-top:-34px}}
  `;
  document.head.appendChild(style);
  document.title='הטיול שלנו — הונגריה + סלובניה';

  const gm=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
  const dir=(o,d,w='')=>'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(o)+'&destination='+encodeURIComponent(d)+(w?'&waypoints='+encodeURIComponent(w):'');

  document.body.innerHTML=`
  <header class="hero">
    <div><div class="eyebrow">עודכן 26.08.2026 · המסלול היחיד</div><h1>הונגריה + סלובניה</h1><p>האתר מסונכרן לפי מה שבוצע בפועל עד 25/08, התכנון ל־26/08 והמשך המסלול עד הגעה ולינה בבודפשט ב־31/08. חלופת אוסטריה הוסרה.</p></div>
    <div class="hero-stats"><span>✓ בפועל: 21–25/08</span><span>◉ היום: בוהין + Vogel</span><span>→ בודפשט: 31/08</span><span>👦 קצב מותאם לילד קטן</span></div>
  </header>
  <main>
    <nav class="toolbar"><a href="#days">המסלול היומי</a><a class="secondary" href="#book">מה להזמין</a><a class="secondary" href="#done">מה כבר עשינו</a><button class="secondary" id="openAll">פתח את כל הימים</button></nav>

    <div class="section-title"><div><h2>תמונת מצב</h2><p>בלי לשחזר פעילויות שלא אושרו כביצוע.</p></div></div>
    <section class="overview">
      <div class="panel"><h3>המסלול מכאן ועד בודפשט</h3><ol class="route-list"><li><b>26/08 — Bohinj + Vogel</b>: יום האלפים החזק.</li><li><b>27/08 — Vintgar → Logarska Dolina</b>: נקיק בבוקר ומעבר לעמק.</li><li><b>28/08 — Logarska Dolina</b>: מפל Rinka והכביש הפנורמי.</li><li><b>29/08 — Postojna + Predjama</b>: מערה נוחה למשפחה וטירה.</li><li><b>30/08 — Ljubljana</b>: מרכז העיר, פוניקולר וטירה בקצב רגוע.</li><li><b>31/08 — Budapest</b>: נסיעה להונגריה והגעה ללינה בעיר.</li></ol></div>
      <div class="panel"><h3>סימון באתר</h3><div class="legend"><span class="d">בוצע בפועל</span><span class="t">היום / לפי תכנון</span><span class="f">עתידי</span></div><p class="muted">האטרקציות העתידיות מבוססות על המסלול המשפחתי בסלובניה שהותאם להעדפה שלכם לנוף אלפיני, רכבלים וקצב נוח עם ילד קטן.</p><div class="status-note"><b>עיקרון:</b> אם מזג האוויר ההררי לא מתאים ביום מסוים, מחליפים בין יום חוץ ליום Postojna/Ljubljana — בלי להחזיר את אוסטריה למסלול.</div></div>
    </section>

    <div class="section-title" id="days"><div><h2>יום־יום</h2><p>העבר מסומן לפי ביצוע; העתיד לפי התוכנית העדכנית.</p></div></div>
    <section class="days">
      <details class="day done" open><summary><div class="daynum">21</div><div><h3>21/08 · ו׳ — תחילת הטיול בהונגריה</h3><div class="day-meta">התמקמות ותחילת מסלול באזור אגם בלטון</div></div><div class="chips"><span class="chip">בוצע</span><span class="chip">הונגריה</span></div></summary><div class="day-body"><div class="activity"><div class="time">בפועל</div><div><b>תחילת הטיול</b><small>נשמר רק מה שאושר בוודאות; איננו מסמנים אטרקציות ישנות כבוצעו בלי אישור.</small></div><div class="links"><a href="${gm('Lake Balaton Hungary')}" target="_blank">מפה</a></div></div></div></details>

      <details class="day done" open><summary><div class="daynum">22</div><div><h3>22/08 · שבת — אגם בלטון</h3><div class="day-meta">טיהאני · Balatonfüred · BalatoniBob</div></div><div class="chips"><span class="chip">בוצע</span><span class="chip">משפחתי</span></div></summary><div class="day-body">
        <div class="activity"><div class="time">בפועל</div><div><b>טיהאני</b><small>חצי האי, העיירה והתצפיות על אגם בלטון.</small></div><div class="links"><a href="${gm('Tihany Hungary')}" target="_blank">מפה</a></div></div>
        <div class="activity"><div class="time">בפועל</div><div><b>חוף ב־Balatonfüred</b><small>עצירת רחצה באגם.</small></div><div class="links"><a href="${gm('Balatonfured beach Hungary')}" target="_blank">מפה</a></div></div>
        <div class="activity"><div class="time">בפועל</div><div><b>BalatoniBob</b><small>מזחלות הרים / Bob.</small></div><div class="links"><a href="${gm('BalatoniBob Leisure Park Balatonfuzfo Hungary')}" target="_blank">מפה</a></div></div>
      </div></details>

      <details class="day done"><summary><div class="daynum">23</div><div><h3>23/08 · א׳ — יום נוסף באזור בלטון</h3><div class="day-meta">שהות נוספת באזור האגם</div></div><div class="chips"><span class="chip">בוצע</span></div></summary><div class="day-body"><div class="activity"><div class="time">בפועל</div><div><b>אזור בלטון</b><small>האטרקציות שעלו כאפשרויות בתכנון אינן מסומנות כאן כבוצעו, משום שלא אושרו במפורש.</small></div><div class="links"><a href="${gm('Lake Balaton Hungary')}" target="_blank">מפה</a></div></div></div></details>

      <details class="day done"><summary><div class="daynum">24</div><div><h3>24/08 · ב׳ — בלטון → סלובניה</h3><div class="day-meta">נסיעה לאזור בלד והתמקמות</div></div><div class="chips"><span class="chip">בוצע</span><span class="chip">מעבר מדינה</span></div></summary><div class="day-body"><div class="activity"><div class="time">בפועל</div><div><b>מעבר לסלובניה</b><small>יציאה מאזור בלטון והגעה לאזור בלד.</small></div><div class="links"><a href="${dir('Lake Balaton Hungary','Bled Slovenia')}" target="_blank">מסלול נסיעה</a></div></div></div></details>

      <details class="day done" open><summary><div class="daynum">25</div><div><h3>25/08 · ג׳ — יאסנה + בלד</h3><div class="day-meta">אגם יאסנה · מרחצאות · אגם בלד</div></div><div class="chips"><span class="chip">בוצע</span><span class="chip">נוף + מים</span></div></summary><div class="day-body">
        <div class="activity"><div class="time">בפועל</div><div><b>אגם Jasna</b><small>עצירת נוף אלפינית ליד Kranjska Gora.</small></div><div class="links"><a href="${gm('Lake Jasna Kranjska Gora Slovenia')}" target="_blank">מפה</a></div></div>
        <div class="activity"><div class="time">בפועל</div><div><b>מרחצאות / ספא בבלד</b><small>פעילות מים משפחתית.</small></div><div class="links"><a href="${gm('Bled thermal spa Slovenia')}" target="_blank">מפה</a></div></div>
        <div class="activity"><div class="time">בפועל</div><div><b>אגם Bled</b><small>אגם, טיילת ונוף.</small></div><div class="links"><a href="${gm('Lake Bled Slovenia')}" target="_blank">מפה</a></div></div>
      </div></details>

      <details class="day today" open><summary><div class="daynum">26</div><div><h3>26/08 · ד׳ — Bohinj + רכבל Vogel</h3><div class="day-meta">היום · נוף אלפיני בעדיפות ראשונה</div></div><div class="chips"><span class="chip">היום</span><span class="chip">רכבל</span><span class="chip">אלפים</span></div></summary><div class="day-body">
        <div class="activity"><div class="time">בוקר</div><div><b>אגם Bohinj</b><small>פתיחת היום על שפת האגם; עדיף להגיע מוקדם.</small></div><div class="links"><a href="${gm('Lake Bohinj Slovenia')}" target="_blank">מפה</a></div></div>
        <div class="activity"><div class="time">עיקר היום</div><div><b>Vogel Cable Car</b><small>היעד המרכזי: עליה לנוף עוצמתי מעל אגם בוהין. לבדוק תנאי הפעלה ורוח באותו בוקר.</small></div><div class="links"><a href="${gm('Vogel Cable Car Slovenia')}" target="_blank">מפה</a><a class="book" href="https://vogel.si/en/current-conditions-summer/" target="_blank">מצב רכבל</a></div></div>
        <div class="activity"><div class="time">אופציונלי</div><div><b>מפל Savica</b><small>להוסיף רק אם מזג האוויר, הזמן והאנרגיה של הילד מתאימים.</small></div><div class="links"><a href="${gm('Savica Waterfall Slovenia')}" target="_blank">מפה</a></div></div>
      </div></details>

      <details class="day future" open><summary><div class="daynum">27</div><div><h3>27/08 · ה׳ — Vintgar → Logarska Dolina</h3><div class="day-meta">נקיק בבוקר · מעבר לעמק האלפיני אחר הצהריים</div></div><div class="chips"><span class="chip">מתוכנן</span><span class="chip">טבע</span><span class="chip">מעבר לינה</span></div></summary><div class="day-body">
        <div class="activity"><div class="time">מוקדם</div><div><b>Vintgar Gorge</b><small>להיכנס מוקדם כדי להקטין עומס. מסלול על גשרוני עץ בתוך נקיק טורקיז.</small></div><div class="links"><a href="${gm('Vintgar Gorge Slovenia')}" target="_blank">מפה</a><a class="book" href="https://www.vintgar.si/" target="_blank">כרטיסים</a></div></div>
        <div class="activity"><div class="time">צהריים</div><div><b>נסיעה ל־Logarska Dolina</b><small>מעבר רגוע לעמק קמניק–סביניה, בלי להעמיס אטרקציה גדולה נוספת.</small></div><div class="links"><a href="${dir('Vintgar Gorge Slovenia','Logarska Dolina Slovenia')}" target="_blank">מסלול נסיעה</a></div></div>
        <div class="activity"><div class="time">אחה״צ</div><div><b>טעימה מהעמק</b><small>הליכה קצרה, עצירות תצפית וחווה/ארוחה מקומית לפי שעת ההגעה.</small></div><div class="links"><a href="${gm('Logarska Dolina Slovenia')}" target="_blank">מפה</a></div></div>
      </div></details>

      <details class="day future" open><summary><div class="daynum">28</div><div><h3>28/08 · ו׳ — יום מלא ב־Logarska Dolina</h3><div class="day-meta">הרים דרמטיים · מפל Rinka · דרך פנורמית</div></div><div class="chips"><span class="chip">מתוכנן</span><span class="chip">נוף עוצמתי</span><span class="chip">משפחתי</span></div></summary><div class="day-body">
        <div class="activity"><div class="time">בוקר</div><div><b>עמק Logarska Dolina</b><small>נסיעה איטית בעמק ועצירות בנקודות התצפית והמרעה.</small></div><div class="links"><a href="${gm('Logarska Dolina Slovenia')}" target="_blank">מפה</a></div></div>
        <div class="activity"><div class="time">בוקר+</div><div><b>Rinka Waterfall</b><small>הליכה משפחתית למפל; ממשיכים מעבר לנקודת המפל רק אם כולם רוצים.</small></div><div class="links"><a href="${gm('Rinka Waterfall Slovenia')}" target="_blank">מפה</a></div></div>
        <div class="activity"><div class="time">אחה״צ</div><div><b>Solčava Panoramic Road</b><small>כביש נופי עם תצפיות על האלפים והעמק. מתאים במיוחד להעדפה שלכם לנוף חזק בלי מסלול ארוך.</small></div><div class="links"><a href="${gm('Solcava Panoramic Road Slovenia')}" target="_blank">מפה</a></div></div>
      </div></details>

      <details class="day future" open><summary><div class="daynum">29</div><div><h3>29/08 · שבת — Postojna + Predjama</h3><div class="day-meta">יום מצוין גם אם מזג האוויר פחות טוב</div></div><div class="chips"><span class="chip">מתוכנן</span><span class="chip">להזמין מראש</span><span class="chip">ילד קטן</span></div></summary><div class="day-body">
        <div class="activity"><div class="time">בוקר</div><div><b>Predjama Castle</b><small>הטירה הבנויה בתוך המצוק. סדר זה מאפשר את מערת Postojna בהמשך היום.</small></div><div class="links"><a href="${gm('Predjama Castle Slovenia')}" target="_blank">מפה</a></div></div>
        <div class="activity"><div class="time">צהריים</div><div><b>Postojna Cave</b><small>המערה הנוחה ביותר עם ילד קטן בזכות רכבת המערה. להגיע לפחות 30 דקות לפני שעת הסיור.</small></div><div class="links"><a href="${gm('Postojna Cave Slovenia')}" target="_blank">מפה</a><a class="book" href="https://www.postojnska-jama.eu/en/" target="_blank">כרטיסים</a></div></div>
        <div class="activity"><div class="time">אופציונלי</div><div><b>Vivarium / Proteus</b><small>תוספת טובה אם הילד עוד באנרגיה ורוצה בעלי חיים תת־קרקעיים.</small></div><div class="links"><a href="${gm('Vivarium Postojna Slovenia')}" target="_blank">מפה</a></div></div>
      </div></details>

      <details class="day future" open><summary><div class="daynum">30</div><div><h3>30/08 · א׳ — Ljubljana בקצב רגוע</h3><div class="day-meta">עיר עתיקה · פוניקולר · טירה · זמן חופשי</div></div><div class="chips"><span class="chip">מתוכנן</span><span class="chip">קליל</span><span class="chip">רכבל עירוני</span></div></summary><div class="day-body">
        <div class="activity"><div class="time">בוקר</div><div><b>המרכז העתיק של Ljubljana</b><small>Prešeren Square, Triple Bridge, השוק ו־Dragon Bridge בהליכה קצרה ונוחה.</small></div><div class="links"><a href="${gm('Preseren Square Ljubljana Slovenia')}" target="_blank">מפה</a></div></div>
        <div class="activity"><div class="time">צהריים</div><div><b>פוניקולר + Ljubljana Castle</b><small>עלייה קצרה ומהנה לילד ותצפית על העיר; אפשר לשלב את מוזיאון הבובות.</small></div><div class="links"><a href="${gm('Ljubljana Castle Funicular Slovenia')}" target="_blank">מפה</a><a class="book" href="https://www.ljubljanskigrad.si/en/" target="_blank">מידע/כרטיסים</a></div></div>
        <div class="activity"><div class="time">אחה״צ</div><div><b>Tivoli / מנוחה</b><small>פארק פתוח וקצב רגוע לפני יום הנסיעה לבודפשט.</small></div><div class="links"><a href="${gm('Tivoli Park Ljubljana Slovenia')}" target="_blank">מפה</a></div></div>
      </div></details>

      <details class="day future" open><summary><div class="daynum">31</div><div><h3>31/08 · ב׳ — סלובניה → בודפשט</h3><div class="day-meta">הגעה ולינה בבודפשט באותו ערב</div></div><div class="chips"><span class="chip">מתוכנן</span><span class="chip">בודפשט</span><span class="chip">לילה בעיר</span></div></summary><div class="day-body">
        <div class="activity"><div class="time">בוקר</div><div><b>יציאה מ־Ljubljana לכיוון Budapest</b><small>יום מעבר. עדיפות לנסיעה ישירה יחסית עם עצירת התרעננות לפי הצורך.</small></div><div class="links"><a href="${dir('Ljubljana Slovenia','Budapest Hungary')}" target="_blank">מסלול נסיעה</a></div></div>
        <div class="activity"><div class="time">אחה״צ/ערב</div><div><b>הגעה לבודפשט</b><small>צ׳ק־אין ולינה בעיר בלילה של 31/08.</small></div><div class="links"><a href="${gm('Budapest Hungary')}" target="_blank">מפה</a></div></div>
      </div></details>
    </section>

    <div class="section-title" id="done"><div><h2>מה כבר עשינו</h2><p>קישורי ניווט מהירים.</p></div></div>
    <section class="panel"><div class="links" style="justify-content:flex-start"><a href="${gm('Tihany Hungary')}" target="_blank">טיהאני</a><a href="${gm('Balatonfured Hungary')}" target="_blank">Balatonfüred</a><a href="${gm('BalatoniBob Leisure Park Hungary')}" target="_blank">BalatoniBob</a><a href="${gm('Lake Jasna Slovenia')}" target="_blank">אגם יאסנה</a><a href="${gm('Lake Bled Slovenia')}" target="_blank">אגם בלד</a></div></section>

    <div class="section-title" id="book"><div><h2>מה להזמין / לבדוק</h2><p>כדי לא להיתקע בימים הקרובים.</p></div></div>
    <section class="checklist">
      <div class="check"><label><input type="checkbox" data-task="vintgar"><span><b>Vintgar · 27/08</b><br><small>לרכוש כניסה לשעה מוקדמת ולבדוק הוראות הגעה/חניה.</small></span></label></div>
      <div class="check"><label><input type="checkbox" data-task="postojna"><span><b>Postojna · 29/08</b><br><small>להזמין שעת סיור מראש; להגיע כ־30 דקות לפני.</small></span></label></div>
      <div class="check"><label><input type="checkbox" data-task="vogel"><span><b>Vogel · היום</b><br><small>לבדוק בבוקר רוח, עננות ומצב הפעלת הרכבל.</small></span></label></div>
      <div class="check"><label><input type="checkbox" data-task="lodging"><span><b>לינות 27–30/08</b><br><small>לוודא התאמה למעבר Logarska → Postojna/Ljubljana.</small></span></label></div>
      <div class="check"><label><input type="checkbox" data-task="budapest"><span><b>בודפשט · 31/08</b><br><small>לינה בעיר; אם מגיעים עם הרכב — חניה נדרשת ללילה אחד בלבד.</small></span></label></div>
      <div class="check"><label><input type="checkbox" data-task="vignette"><span><b>אגרות כביש</b><br><small>לוודא שהוינייטה הסלובנית וההונגרית תקפות ליום המעבר.</small></span></label></div>
    </section>
    <div class="progress"><i id="progressBar"></i></div>
    <p class="footer">גרסת מסלול: 26.08.2026 · Hungary + Slovenia בלבד · התוכן העתידי נשאר ניתן להתאמה לפי מזג האוויר, אך יעד 31/08 הוא לינה בבודפשט.</p>
  </main>`;

  const key='trip-20260826-checks';
  let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')}catch(e){}
  const boxes=[...document.querySelectorAll('[data-task]')];
  const update=()=>{let n=0;boxes.forEach(b=>{saved[b.dataset.task]=b.checked;if(b.checked)n++});localStorage.setItem(key,JSON.stringify(saved));const p=document.getElementById('progressBar');if(p)p.style.width=(boxes.length?n/boxes.length*100:0)+'%'};
  boxes.forEach(b=>{b.checked=!!saved[b.dataset.task];b.addEventListener('change',update)});update();
  const openBtn=document.getElementById('openAll');if(openBtn)openBtn.addEventListener('click',()=>{document.querySelectorAll('details.day').forEach(d=>d.open=true)});
})();