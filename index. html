‎from pathlib import Path
‎import zipfile, textwrap, json, os
‎
‎root = Path("/mnt/data/abrar_khaskheli_land_portal")
‎root.mkdir(exist_ok=True)
‎
‎index_html = r'''<!doctype html>
‎<html lang="sd" dir="rtl">
‎<head>
‎<meta charset="utf-8">
‎<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
‎<meta name="theme-color" content="#0b6f5b">
‎<meta name="description" content="Abrar Khaskheli - Sindhi Land & Unit Calculator Portal">
‎<link rel="manifest" href="manifest.webmanifest">
‎<link rel="icon" href="icon.svg">
‎<title>زمين جي ماپ — Abrar Khaskheli</title>
‎<style>
‎:root{--green:#0b6f5b;--dark:#075342;--mint:#eaf7f3;--line:#cce5de;--gold:#e8b84b;--text:#16483f}
‎*{box-sizing:border-box}body{margin:0;background:#f5faf8;color:var(--text);font-family:Tahoma,"Noto Naskh Arabic",Arial,sans-serif}
‎.header{background:linear-gradient(135deg,var(--dark),var(--green));color:#fff;padding:24px 18px 18px;text-align:right;box-shadow:0 4px 16px #0002}
‎.header h1{margin:0;font-size:30px}.header p{margin:7px 0 0;font-size:16px;opacity:.9}
‎.lang{display:flex;gap:8px;justify-content:center;padding:10px;background:#064b3e}
‎.lang button,.tab{border:0;background:transparent;color:#eafff8;font-weight:700;padding:10px 15px;border-radius:22px;cursor:pointer}
‎.lang button.active{background:#fff;color:var(--green)}
‎.tabs{display:flex;overflow:auto;background:#fff;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:4}
‎.tab{color:#466b63;white-space:nowrap;border-radius:0;padding:15px 18px}.tab.active{color:var(--green);border-bottom:4px solid var(--green);background:#eff9f6}
‎main{max-width:900px;margin:auto;padding:18px 14px 35px}
‎.card{background:#fff;border:1px solid var(--line);border-radius:24px;padding:20px;margin:15px 0;box-shadow:0 8px 24px #0b6f5b10}
‎h2{margin:0 0 16px;font-size:23px;border-bottom:1px solid var(--line);padding-bottom:12px}
‎.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.field label{display:block;font-weight:700;margin:5px 0 7px}.field input,.field select,.field textarea{width:100%;padding:14px;border:2px solid var(--line);border-radius:14px;font-size:17px;background:#fff;color:#214f46}
‎.full{grid-column:1/-1}.btn{width:100%;border:0;border-radius:16px;padding:15px;font-size:18px;font-weight:800;background:var(--green);color:#fff;cursor:pointer;margin-top:12px}.btn.secondary{background:#fff;color:var(--green);border:2px solid var(--line)}
‎.notice{background:var(--mint);border-right:5px solid var(--green);padding:15px;border-radius:14px;line-height:1.9}
‎.result{font-size:22px;font-weight:800;background:#eff9f6;padding:16px;border-radius:15px;margin-top:12px}
‎.table{width:100%;border-collapse:collapse}.table td{padding:12px 8px;border-bottom:1px solid #dcece7}.table td:last-child{font-weight:800}
‎.formula{background:#f7fbfa;padding:14px;border-radius:14px;line-height:2}
‎.footer{background:#064b3e;color:#fff;text-align:center;padding:28px 16px}.footer h3{margin:0 0 8px;font-size:20px}.fb{display:inline-block;margin-top:14px;background:#1680ef;color:white;padding:11px 22px;border-radius:30px;font-weight:800;text-decoration:none}
‎.install{display:none;position:fixed;bottom:15px;left:15px;right:15px;z-index:9;background:#0b6f5b;color:#fff;padding:14px;border-radius:16px;text-align:center;font-weight:800;box-shadow:0 8px 30px #0004}
‎@media(max-width:650px){.grid{grid-template-columns:1fr}.header h1{font-size:25px}.card{padding:16px}}
‎</style>
‎</head>
‎<body>
‎<header class="header">
‎  <div style="font-size:14px;opacity:.8">🌾 Abrar Khaskheli</div>
‎  <h1>🌾 زمين جي ماپ</h1>
‎  <p>سنڌ — روائتي ماپ ۽ ڪلڪيوليٽر</p>
‎</header>
‎<div class="lang">
‎  <button class="active" onclick="setLang('sd',this)">سنڌي</button>
‎  <button onclick="setLang('ur',this)">اردو</button>
‎  <button onclick="setLang('en',this)">English</button>
‎</div>
‎<nav class="tabs">
‎  <button class="tab active" onclick="showTab('basic',this)">📐 بنيادي</button>
‎  <button class="tab" onclick="showTab('convert',this)">📏 ويجھي</button>
‎  <button class="tab" onclick="showTab('change',this)">🔄 تبديلي</button>
‎  <button class="tab" onclick="showTab('report',this)">📄 رپورٽ</button>
‎  <button class="tab" onclick="showTab('about',this)">📚 حوالو</button>
‎</nav>
‎
‎<main>
‎<section id="basic" class="page">
‎<div class="card">
‎<h2>📐 بنيادي زمين جو حساب</h2>
‎<div class="grid">
‎<div class="field"><label>مينڊيئو (فٽ)</label><input id="m1" type="number" value="121" inputmode="decimal"></div>
‎<div class="field"><label>لام (فٽ)</label><input id="l1" type="number" value="360" inputmode="decimal"></div>
‎<div class="field full"><label>يونٽ چونڊيو</label><select id="unit"><option>گهنٽا / ويسا</option><option>ايڪڙ</option><option>چوٽائي</option><option>چوٽائي / ويسا</option></select></div>
‎</div>
‎<button class="btn" onclick="calcBasic()">🧮 حساب ڪريو</button>
‎<div id="basicResult" class="result">121 × 360 = 43,560 چورس فٽ → 1 ايڪڙ</div>
‎</div>
‎<div class="card">
‎<h2>🧭 فارمولا ياد ڪريو</h2>
‎<div class="formula"><b>A</b> برابر زمين: مينڊيو × لام ÷ 1089 = گهنٽا<br>
‎<b>B</b> غير برابر: مينڊيو جو اوسط × لام جو اوسط ÷ 1089 = گهنٽا<br>
‎<b>C</b> گهنٽا کان ايڪڙ: گهنٽا ÷ 40 = ايڪڙ</div>
‎</div>
‎</section>
‎
‎<section id="convert" class="page" style="display:none">
‎<div class="card">
‎<h2>📏 ويجھي ماپ — غير برابر زمين</h2>
‎<div class="notice">مينڊيو ۽ لام جا ٻه پاسا ڏيو. سسٽم اوسط وٺي زمين جو حساب ڪندو.</div>
‎<div class="grid" style="margin-top:12px">
‎<div class="field"><label>مينڊيو 1 (فٽ)</label><input id="m1b" type="number" value="121"></div>
‎<div class="field"><label>مينڊيو 2 (فٽ)</label><input id="m2b" type="number" value="130"></div>
‎<div class="field"><label>لام 1 (فٽ)</label><input id="l1b" type="number" value="360"></div>
‎<div class="field"><label>لام 2 (فٽ)</label><input id="l2b" type="number" value="380"></div>
‎</div>
‎<button class="btn" onclick="calcIrregular()">🧮 اوسط سان حساب ڪريو</button>
‎<div id="irregularResult" class="result">نتيجو هتي ظاهر ٿيندو</div>
‎</div>
‎</section>
‎
‎<section id="change" class="page" style="display:none">
‎<div class="card">
‎<h2>🔄 ماپ جي تبديلي</h2>
‎<div class="grid">
‎<div class="field"><label>قدر</label><input id="cv" type="number" value="1"></div>
‎<div class="field"><label>يونٽ</label><select id="cu">
‎<option value="acre">ايڪڙ</option><option value="ghunta">گهنٽا</option><option value="sqft">چورس فٽ</option><option value="sqyd">چورس گز</option><option value="sqm">مربع ميٽر</option></select></div>
‎</div>
‎<button class="btn" onclick="convert()">تبديلي ڪريو</button>
‎<div id="convResult" class="result">نتيجو هتي ظاهر ٿيندو</div>
‎</div>
‎</section>
‎
‎<section id="report" class="page" style="display:none">
‎<div class="card">
‎<h2>📄 رپورٽ ٺاهيو</h2>
‎<div class="grid">
‎<div class="field full"><label>مالڪ جو نالو</label><input id="owner" placeholder="مثال: Abrar Khaskheli"></div>
‎<div class="field"><label>ڳوٺ / شهر</label><input id="village" placeholder="مثال: سڪرنڊ"></div>
‎<div class="field"><label>خسرو نمبر</label><input id="survey" placeholder="مثال: A/123"></div>
‎<div class="field"><label>ديه نمبر</label><input id="deh" placeholder="مثال: 45"></div>
‎<div class="field"><label>تعلقو / ضلعو</label><input id="taluka" placeholder="مثال: مٽياري"></div>
‎<div class="field full"><label>نوٽس</label><textarea id="notes" rows="3" placeholder="ڪو به خاص نوٽ..."></textarea></div>
‎</div>
‎<button class="btn" onclick="makeReport()">📥 PDF محفوظ ڪرڻ لاءِ پرنٽ ڪريو</button>
‎<div id="reportPreview" class="notice" style="margin-top:15px">رپورٽ جي معلومات هتي ڏيکاري ويندي.</div>
‎</div>
‎</section>
‎
‎<section id="about" class="page" style="display:none">
‎<div class="card">
‎<h2>📚 سنڌي زمين جي ماپ — مڪمل حوالو</h2>
‎<table class="table">
‎<tr><td>1 گهنٽو / ويسو</td><td>1,089 sq ft (33×33)</td></tr>
‎<tr><td>1 ايڪڙ</td><td>43,560 sq ft = 40 گهنٽا</td></tr>
‎<tr><td>1 چوٽائي</td><td>10,890 sq ft = 10 گهنٽا</td></tr>
‎<tr><td>1 ايڪڙ ۾ چوٽايون</td><td>4</td></tr>
‎<tr><td>1 چوٽائي ۾ ويسا</td><td>10</td></tr>
‎<tr><td>1 ويسا ۾ پرهه</td><td>5</td></tr>
‎<tr><td>1 ايڪڙ</td><td>4,046.86 m²</td></tr>
‎<tr><td>1 ايڪڙ</td><td>4,840 sq yd</td></tr>
‎</table>
‎</div>
‎</section>
‎</main>
‎
‎<div id="install" class="install">📱 ايپ انسٽال ڪريو</div>
‎<footer class="footer">
‎<h3>🌾 ٺاهيندڙ: Abrar Khaskheli</h3>
‎<p>زمين جي ماپ ايپ — سنڌ</p>
‎<a class="fb" href="https://www.facebook.com/" target="_blank">Facebook: Abrar Khaskheli</a>
‎<p style="opacity:.85">Contact: 0317-3796981</p>
‎</footer>
‎
‎<script>
‎function showTab(id,el){document.querySelectorAll('.page').forEach(x=>x.style.display='none');document.getElementById(id).style.display='block';document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));el.classList.add('active');scrollTo({top:0,behavior:'smooth'})}
‎function calcBasic(){let m=+document.getElementById('m1').value||0,l=+document.getElementById('l1').value||0,s=m*l;let g=s/1089;let a=s/43560;document.getElementById('basicResult').innerHTML=`${m} × ${l} = <b>${s.toLocaleString()}</b> چورس فٽ<br>${g.toFixed(2)} گهنٽا — ${a.toFixed(2)} ايڪڙ`}
‎function calcIrregular(){let m=(+m1b.value+(+m2b.value))/2,l=(+l1b.value+(+l2b.value))/2,s=m*l,g=s/1089,a=s/43560;irregularResult.innerHTML=`مينڊيو اوسط: <b>${m.toFixed(2)} فٽ</b><br>لام اوسط: <b>${l.toFixed(2)} فٽ</b><br>رقبو: <b>${s.toLocaleString(undefined,{maximumFractionDigits:2})} چورس فٽ</b><br>${g.toFixed(2)} گهنٽا = ${a.toFixed(2)} ايڪڙ`}
‎function convert(){let v=+cv.value||0,u=cu.value;let sqft=u==='acre'?v*43560:u==='ghunta'?v*1089:u==='sqyd'?v*9:u==='sqm'?v*10.7639104:v;convResult.innerHTML=`<b>${sqft.toLocaleString(undefined,{maximumFractionDigits:2})}</b> چورس فٽ<br>ايڪڙ: ${(sqft/43560).toFixed(4)}<br>گهنٽا: ${(sqft/1089).toFixed(4)}<br>چورس گز: ${(sqft/9).toFixed(2)}<br>مربع ميٽر: ${(sqft/10.7639104).toFixed(2)}`}
‎function makeReport(){let o=owner.value||'—',v=village.value||'—',s=survey.value||'—',d=deh.value||'—',t=taluka.value||'—',n=notes.value||'—';reportPreview.innerHTML=`<b>مالڪ:</b> ${o}<br><b>ڳوٺ:</b> ${v}<br><b>خسرو نمبر:</b> ${s}<br><b>ديه نمبر:</b> ${d}<br><b>تعلقو/ضلعو:</b> ${t}<br><b>نوٽ:</b> ${n}`;setTimeout(()=>window.print(),300)}
‎function setLang(lang,el){document.querySelectorAll('.lang button').forEach(x=>x.classList.remove('active'));el.classList.add('active');if(lang==='en')alert('English mode is prepared for the calculator; the main portal remains in Sindhi.');if(lang==='ur')alert('اردو موڊ لاءِ بنيادي حساب موجود آهي؛ پورٽل جو انداز سنڌي ۾ رکيو ويو آهي.')}
‎let deferred;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;install.style.display='block';install.onclick=()=>{deferred.prompt();deferred=null;install.style.display='none'}});if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
‎</script>
‎</body>
‎</html>'''
‎
‎manifest = {
‎    "name":"Abrar Khaskheli - زمين جي ماپ",
‎    "short_name":"زمين جي ماپ",
‎    "start_url":"./",
‎    "display":"standalone",
‎    "background_color":"#f5faf8",
‎    "theme_color":"#0b6f5b",
‎    "lang":"sd",
‎    "dir":"rtl",
‎    "icons":[{"src":"icon.svg","sizes":"any","type":"image/svg+xml","purpose":"any maskable"}]
‎}
‎sw = """const CACHE='abrar-land-v1';const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg'];self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{let y=x.clone();caches.open(CACHE).then(c=>c.put(e.request,y));return x}).catch(()=>caches.match('./index.html')))));"""
‎icon = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="110" fill="#0b6f5b"/><text x="256" y="300" text-anchor="middle" font-size="210">🌾</text></svg>'''
‎
‎(root/"index.html").write_text(index_html,encoding="utf-8")
‎(root/"manifest.webmanifest").write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding="utf-8")
‎(root/"sw.js").write_text(sw,encoding="utf-8")
‎(root/"icon.svg").write_text(icon,encoding="utf-8")
‎(root/"README.txt").write_text("""ABRAR KHASKHELI — ZAMEEN JI MAAP PORTAL
‎
‎Website:
‎1) Upload this folder to GitHub Pages / Netlify / Vercel / any static hosting.
‎2) Open index.html locally to test.
‎3) For the installable Android app: host the site over HTTPS, then open it in Chrome on Android and choose "Install app" / "Add to Home screen".
‎
‎The portal includes:
‎- Sindhi RTL design
‎- Basic land-area calculator
‎- Irregular land average calculator
‎- Unit conversion
‎- Printable report form
‎- Reference table
‎- PWA manifest + offline service worker
‎- Branding: Abrar Khaskheli
‎- Contact: 0317-3796981
‎""",encoding="utf-8")
‎
‎zip_path=Path("/mnt/data/Abrar_Khaskheli_Zameen_Portal.zip")
‎with zipfile.ZipFile(zip_path,"w",zipfile.ZIP_DEFLATED) as z:
‎    for p in root.iterdir():
‎        z.write(p, p.name)
‎
‎print(f"Created: {zip_path}")
‎print(f"Files: {[p.name for p in root.iterdir()]}")
‎
