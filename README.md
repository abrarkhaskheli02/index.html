src="/mnt/data/Abrar_Khaskheli_Portal_v7_Professional_Search_Logos.zip"
out="/mnt/data/Abrar_Khaskheli_Portal_v8_Offline_Professional.zip"
work="/mnt/data/ak_portal_v8"
if os.path.exists(work): shutil.rmtree(work)
os.makedirs(work)
with zipfile.ZipFile(src) as z: z.extractall(work)

index=os.path.join(work,"index.html")
with open(index,encoding="utf-8") as f: html=f.read()

css=r"""
<style id="v8-offline-css">
.v8-offline{display:flex;align-items:center;gap:8px;justify-content:center;padding:9px 12px;margin:10px auto;max-width:620px;border-radius:12px;font-weight:700;background:#eaf7ef;color:#146c3a;border:1px solid #bfe6ce}
.v8-dot{width:10px;height:10px;border-radius:50%;background:#25a55f;display:inline-block}
.v8-offline.offline{background:#fff4e5;color:#8a5200;border-color:#f1d29a}.v8-offline.offline .v8-dot{background:#f0a202}
</style>
"""
if "v8-offline-css" not in html:
    html=html.replace("</head>",css+"</head>",1)

banner="""<div id="v8OfflineStatus" class="v8-offline"><span class="v8-dot"></span><span id="v8OfflineText">🟢 Offline mode ready</span></div>"""
if 'id="v8OfflineStatus"' not in html:
    # Place after header if possible, otherwise at top of body.
    html=html.replace("</header>", "</header>"+banner, 1)
    if 'id="v8OfflineStatus"' not in html:
        html=html.replace("<body>", "<body>"+banner, 1)

js=r"""
<script id="v8-offline-js">
(function(){
 const status=document.getElementById('v8OfflineStatus'), text=document.getElementById('v8OfflineText');
 function update(){
   const on=navigator.onLine;
   status.classList.toggle('offline',!on);
   text.textContent=on?'🟢 Online — Offline mode ready':'🟠 Offline mode — توهان جو portal local طور ڪم ڪري رهيو آهي';
 }
 window.addEventListener('online',update); window.addEventListener('offline',update); update();
 // Register the service worker so the app shell and local assets remain available offline.
 if('serviceWorker' in navigator){
   window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
 }
})();
</script>
"""
if "v8-offline-js" not in html:
    html=html.replace("</body>",js+"</body>",1)

with open(index,"w",encoding="utf-8") as f:f.write(html)

# Robust offline-first service worker: precache all local portal assets and
# fall back to cache whenever network is unavailable.
sw=os.path.join(work,"sw.js")
assets=[]
for root,_,files in os.walk(work):
    for n in files:
        rel=os.path.relpath(os.path.join(root,n),work).replace("\\","/")
        if rel!="sw.js":
            assets.append("./"+rel)

cache_list=json.dumps(assets,ensure_ascii=False)
sw_code=f"""const CACHE='ak-portal-v8-offline';
const ASSETS={cache_list};
self.addEventListener('install',event=>event.waitUntil(
  caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',event=>event.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
));
self.addEventListener('fetch',event=>{{
  if(event.request.method!=='GET') return;
  event.respondWith(
    caches.match(event.request).then(cached=>cached || fetch(event.request).then(response=>{{
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{{}});
      return response;
    }}).catch(()=>caches.match('./index.html')))
  );
}});
"""
with open(sw,"w",encoding="utf-8") as f:f.write(sw_code)

with zipfile.ZipFile(out,"w",zipfile.ZIP_DEFLATED) as z:
    for root,_,files in os.walk(work):
        for n in files:
            p=os.path.join(root,n); z.write(p,os.path.relpath(p,work))
shutil.rmtree(work)
print(out)
