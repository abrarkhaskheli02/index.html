<!DOCTYPE html>
<html lang="sd" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#0d6fa8">
<title>Abrar Khaskheli Portal</title>

<style>
*{box-sizing:border-box}
body{
 margin:0;
 background:#eef4f8;
 color:#20364a;
 font-family:Arial,"Noto Sans Arabic",sans-serif
}
.hero{
 background:linear-gradient(135deg,#0d4770,#147bb5);
 color:white;
 padding:18px 15px 28px;
 min-height:195px
}
.brand{text-align:right;font-weight:bold}
.hero h1{font-size:29px;line-height:1.6;margin:25px 0 5px}
.hero p{margin:0;opacity:.9}
.lang{
 width:100%;margin-top:20px;padding:11px;
 border:0;border-radius:9px;
 background:#ffffff30;color:white
}
.status{
 margin:8px auto;
 max-width:520px;
 padding:9px;
 text-align:center;
 background:#eaf8f0;
 color:#28734d;
 border-radius:12px;
 font-weight:bold
}
nav{
 display:flex;
 justify-content:center;
 gap:20px;
 flex-wrap:wrap;
 background:white;
 padding:12px 5px;
 border-bottom:1px solid #ddd
}
nav button{
 background:none;border:0;padding:8px;
 font-weight:bold;color:#53616d
}
nav button.active{
 color:#126fa7;
 border-bottom:3px solid #126fa7
}
.container{max-width:1000px;margin:auto;padding:10px}
.card{
 background:white;
 border-radius:16px;
 padding:18px;
 margin:14px 0;
 box-shadow:0 3px 15px #00000010
}
h2{margin-top:0}
.grid{
 display:grid;
 grid-template-columns:repeat(4,1fr);
 gap:12px
}
.stat{
 background:#edf7ff;
 border-radius:14px;
 padding:17px;
 text-align:center
}
.stat b{
 display:block;
 font-size:26px;
 color:#126fa7;
 margin-top:7px
}
.formgrid{
 display:grid;
 grid-template-columns:1fr 1fr;
 gap:12px
}
input,select,textarea{
 width:100%;
 padding:12px;
 border:1px solid #d4dfe7;
 border-radius:10px;
 font-size:15px;
 margin:5px 0 10px
}
textarea{min-height:70px}
button,.btn{
 border:0;
 border-radius:11px;
 padding:12px 17px;
 background:#126fa7;
 color:white;
 font-weight:bold;
 cursor:pointer
}
.green{background:#20a864}
.red{background:#d94b4b}
.gold{background:#e8a900}
.dark{background:#123f61}
.search{display:flex;gap:8px}
.search input{flex:1}
table{
 width:100%;
 border-collapse:collapse;
 margin-top:15px
}
th,td{
 padding:10px;
 border-bottom:1px solid #e5ebef;
 text-align:right
}
th{background:#edf6fb}
.table{overflow:auto}
.notice{
 background:#fff7e3;
 border-right:4px solid #f2b705;
 padding:12px;
 border-radius:8px
}
.hidden{display:none}
.social{
 display:flex;
 justify-content:center;
 gap:10px;
 flex-wrap:wrap
}
.social a{
 color:white;
 text-decoration:none;
 padding:12px 18px;
 border-radius:11px;
 font-weight:bold
}
.fb{background:#1877f2}
.wa{background:#20c76b}
footer{
 background:#103f63;
 color:white;
 text-align:center;
 padding:22px;
 margin-top:20px
}
#lock{
 position:fixed;
 inset:0;
 background:#0d4770ee;
 display:none;
 align-items:center;
 justify-content:center;
 z-index:99
}
.lockbox{
 background:white;
 padding:25px;
 border-radius:18px;
 width:90%;
 max-width:350px;
 text-align:center
}
@media(max-width:700px){
 .grid{grid-template-columns:1fr 1fr}
 .formgrid{grid-template-columns:1fr}
 .hero h1{font-size:25px}
 nav{gap:7px;font-size:13px}
}
@media print{
 nav,.status,.btn,button{display:none!important}
 body{background:white}
 .card{box-shadow:none}
}
</style>
</head>

<body>

<header class="hero">
<div class="brand">Abrar Khaskheli 🌴</div>

<h1 id="title">
زمين ۽ حساب<br>
ڪتاب پورٽل
</h1>

<p id="subtitle">
آسان، تيز ۽ موبائل دوست ويب پورٽل
</p>

<select id="lang" onchange="languageChange()">
<option value="sd">سنڌي</option>
<option value="ur">اردو</option>
<option value="en">English</option>
</select>
</header>

<div class="status" id="status">
● Online — Offline mode ready ●
</div>

<nav>
<button class="active" onclick="tab('dashboard',this)">🏠 Dashboard</button>
<button onclick="tab('records',this)">📋 رڪارڊ</button>
<button onclick="tab('calculator',this)">📐 ڪيلڪيوليٽر</button>
<button onclick="tab('recovery',this)">♻️ Recovery</button>
<button onclick="tab('settings',this)">⚙️ Settings</button>
</nav>

<div class="container">

<!-- DASHBOARD -->

<section id="dashboard">

<div class="card">
<h2>📊 Dashboard</h2>

<div class="grid">

<div class="stat">
ڪل رڪارڊ
<b id="recordCount">0</b>
</div>

<div class="stat">
Active
<b id="activeCount">0</b>
</div>

<div class="stat">
Trash
<b id="trashCount">0</b>
</div>

<div class="stat">
Balance
<b>Rs <span id="balance">0</span></b>
</div>

</div>
</div>

<div class="card">

<h2>➕ نئون رڪارڊ</h2>

<div class="formgrid">

<div>
<label>مالڪ جو نالو</label>
<input id="owner" placeholder="مالڪ جو نالو">
</div>

<div>
<label>ڳوٺ / شهر</label>
<input id="city" placeholder="ڳوٺ / شهر">
</div>

<div>
<label>خسرو نمبر</label>
<input id="khasra" placeholder="خسرو نمبر">
</div>

<div>
<label>زمين</label>
<input id="area" placeholder="زمين (ايڪڙ / فٽ)">
</div>

</div>

<label>نوٽ</label>
<textarea id="note" placeholder="نوٽ"></textarea>

<button onclick="addRecord()">💾 رڪارڊ محفوظ ڪريو</button>

</div>

</section>


<!-- RECORDS -->

<section id="records" class="hidden">

<div class="card">

<h2>📋 زمين جا رڪارڊ</h2>

<div class="search">
<input id="search"
placeholder="🔎 نالو، ڳوٺ يا خسرو نمبر ڳوليو..."
oninput="showRecords()">

<button onclick="clearSearch()">Clear</button>
</div>

<div class="table">
<table>

<thead>
<tr>
<th>مالڪ</th>
<th>ڳوٺ</th>
<th>خسرو</th>
<th>زمين</th>
<th>Action</th>
</tr>
</thead>

<tbody id="recordTable"></tbody>

</table>
</div>

</div>

</section>


<!-- CALCULATOR -->

<section id="calculator" class="hidden">

<div class="card">

<h2>📐 زمين جو حساب</h2>

<div class="formgrid">

<div>
<label>ميدانو (فٽ)</label>
<input id="length" type="number" placeholder="121">
</div>

<div>
<label>ڊگھ (فٽ)</label>
<input id="width" type="number" placeholder="360">
</div>

</div>

<button onclick="calculate()">🧮 حساب ڪريو</button>

<div class="notice" style="margin-top:15px">
نتيجو:
<b id="result">0 sq ft</b>
</div>

</div>

</section>


<!-- RECOVERY -->

<section id="recovery" class="hidden">

<div class="card">

<h2>♻️ Recovery / Trash</h2>

<div class="notice">
Delete ٿيل رڪارڊ هتان Restore ڪري سگهجن ٿا.
</div>

<div class="table">
<table>

<thead>
<tr>
<th>مالڪ</th>
<th>ڳوٺ</th>
<th>Action</th>
</tr>
</thead>

<tbody id="trashTable"></tbody>

</table>
</div>

</div>

</section>


<!-- SETTINGS -->

<section id="settings" class="hidden">

<div class="card">

<h2>⚙️ Settings & Future Options</h2>

<div class="notice">
PIN Lock، Backup، Restore، Income/Expense ۽ PDF Report.
</div>

<br>

<button onclick="setPIN()" class="dark">
🔐 PIN Set/Change
</button>

<button onclick="lockNow()" class="gold">
🔒 Lock Now
</button>

<button onclick="backup()">
💾 Backup Download
</button>

<label class="btn" style="display:inline-block">
⬆️ Restore
<input type="file" accept=".json"
onchange="restore(event)" style="display:none">
</label>

<button onclick="clearAll()" class="red">
⚠️ سڀ Data ختم ڪريو
</button>

<button onclick="window.print()" class="green">
🖨️ PDF Report
</button>

</div>


<div class="card">

<h2>💰 آمدني / خرچ</h2>

<div class="formgrid">

<input id="moneyDesc"
placeholder="تفصيل / Description">

<input id="moneyAmount"
type="number"
placeholder="رقم">

<select id="moneyType">
<option value="income">آمدني</option>
<option value="expense">خرچ</option>
</select>

<button onclick="addMoney()" class="green">
Add
</button>

</div>

<div class="table">
<table>

<thead>
<tr>
<th>تاريخ</th>
<th>تفصيل</th>
<th>قسم</th>
<th>رقم</th>
<th>Action</th>
</tr>
</thead>

<tbody id="moneyTable"></tbody>

</table>
</div>

</div>


<div class="card">

<h2>🔎 Search Portal</h2>

<div class="search">

<input id="webSearch"
placeholder="Search records, income, expense...">

<button onclick="searchWeb()">
Search
</button>

</div>

</div>

</section>

</div>


<footer>

<p>
Portal & حساب ڪتاب — Abrar Khaskheli 🌴
</p>

<div class="social">

<a class="wa"
href="https://wa.me/923173796981"
target="_blank">
WhatsApp: 0317-3796981
</a>

<a class="fb"
href="https://www.facebook.com/search/top?q=Abrar%20Khaskheli"
target="_blank">
Facebook: Abrar Khaskheli
</a>

</div>

</footer>


<!-- PIN LOCK -->

<div id="lock">

<div class="lockbox">

<h2>🔐 Portal Locked</h2>

<p>PIN داخل ڪريو</p>

<input id="unlockPIN"
type="password"
maxlength="6">

<button onclick="unlock()">
Unlock
</button>

</div>

</div>


<script>

let records =
JSON.parse(localStorage.getItem("records") || "[]");

let trash =
JSON.parse(localStorage.getItem("trash") || "[]");

let money =
JSON.parse(localStorage.getItem("money") || "[]");


function save(){

localStorage.setItem(
"records",
JSON.stringify(records)
);

localStorage.setItem(
"trash",
JSON.stringify(trash)
);

localStorage.setItem(
"money",
JSON.stringify(money)
);

}


function addRecord(){

let ownerValue =
document.getElementById("owner").value.trim();

if(!ownerValue){

alert("مالڪ جو نالو لکو");
return;

}

records.push({

id:Date.now(),

owner:ownerValue,

city:document.getElementById("city").value,

khasra:document.getElementById("khasra").value,

area:document.getElementById("area").value,

note:document.getElementById("note").value

});

save();

document.getElementById("owner").value="";
document.getElementById("city").value="";
document.getElementById("khasra").value="";
document.getElementById("area").value="";
document.getElementById("note").value="";

render();

alert("رڪارڊ محفوظ ٿي ويو");

}


function showRecords(){

let q =
document.getElementById("search").value.toLowerCase();

let html="";

records.forEach(function(r){

let text =
(r.owner+" "+r.city+" "+r.khasra).toLowerCase();

if(text.includes(q)){

html+=`

<tr>

<td>${safe(r.owner)}</td>

<td>${safe(r.city)}</td>

<td>${safe(r.khasra)}</td>

<td>${safe(r.area)}</td>

<td>
<button class="red"
onclick="deleteRecord(${r.id})">
Delete
</button>
</td>

</tr>

`;

}

});

if(!html)
html="<tr><td colspan='5'>اڃا ڪو record ناهي.</td></tr>";

document.getElementById("recordTable").innerHTML=html;

}


function deleteRecord(id){

let i =
records.findIndex(x=>x.id===id);

if(i>=0){

trash.push(records[i]);

records.splice(i,1);

save();
render();

}

}


function restoreRecord(id){

let i =
trash.findIndex(x=>x.id===id);

if(i>=0){

records.push(trash[i]);

trash.splice(i,1);

save();
render();

}

}


function showTrash(){

let html="";

trash.forEach(function(r){

html+=`

<tr>

<td>${safe(r.owner)}</td>

<td>${safe(r.city)}</td>

<td>
<button class="green"
onclick="restoreRecord(${r.id})">
Restore
</button>
</td>

</tr>

`;

});

if(!html)
html="<tr><td colspan='3'>Trash خالي آهي.</td></tr>";

document.getElementById("trashTable").innerHTML=html;

}


function calculate(){

let a =
Number(document.getElementById("length").value)||0;

let b =
Number(document.getElementById("width").value)||0;

document.getElementById("result").innerText=
(a*b)+" sq ft";

}


function addMoney(){

let amount =
Number(document.getElementById("moneyAmount").value);

if(!amount){

alert("رقم لکو");
return;

}

money.push({

date:new Date().toLocaleDateString(),

desc:document.getElementById("moneyDesc").value,

type:document.getElementById("moneyType").value,

amount:amount

});

save();
render();

document.getElementById("moneyDesc").value="";
document.getElementById("moneyAmount").value="";

}


function showMoney(){

let html="";
let income=0;
let expense=0;

money.forEach(function(m,i){

if(m.type==="income")
income+=Number(m.amount);
else
expense+=Number(m.amount);

html+=`

<tr>

<td>${m.date}</td>

<td>${safe(m.desc)}</td>

<td>${m.type}</td>

<td>Rs ${m.amount}</td>

<td>
<button class="red"
onclick="deleteMoney(${i})">
Delete
</button>
</td>

</tr>

`;

});

if(!html)
html="<tr><td colspan='5'>اڃا ڪو record ناهي.</td></tr>";

document.getElementById("moneyTable").innerHTML=html;

document.getElementById("balance").innerText=
income-expense;

}


function deleteMoney(i){

money.splice(i,1);

save();
render();

}


function backup(){

let data={
records:records,
trash:trash,
money:money
};

let blob=new Blob(
[JSON.stringify(data,null,2)],
{type:"application/json"}
);

let a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="Abrar-Khaskheli-Backup.json";

a.click();

}


function restore(event){

let file=event.target.files[0];

if(!file)return;

let reader=new FileReader();

reader.onload=function(){

try{

let data=JSON.parse(reader.result);

records=data.records||[];
trash=data.trash||[];
money=data.money||[];

save();
render();

alert("Restore ڪامياب ٿي ويو");

}catch(e){

alert("Backup file غلط آهي");

}

};

reader.readAsText(file);

}


function setPIN(){

let p=prompt(
"نئون PIN لکو (4 کان 6 digits)"
);

if(p && /^[0-9]{4,6}$/.test(p)){

localStorage.setItem("portalPIN",p);

alert("PIN محفوظ ٿي ويو");

}else if(p){

alert("PIN 4 کان 6 digits هجڻ گهرجي");

}

}


function lockNow(){

if(localStorage.getItem("portalPIN")){

document.getElementById("lock").style.display="flex";

}else{

alert("پهريان PIN Set ڪريو");

}

}


function unlock(){

let p=
document.getElementById("unlockPIN").value;

if(p===localStorage.getItem("portalPIN")){

document.getElementById("lock").style.display="none";

document.getElementById("unlockPIN").value="";

}else{

alert("غلط PIN");

}

}


function clearAll(){

if(confirm("ڇا سڀ data ختم ڪرڻو آهي؟")){

records=[];
trash=[];
money=[];

save();
render();

}

}


function searchWeb(){

let q=
document.getElementById("webSearch").value.trim();

if(q){

window.open(
"https://www.google.com/search?q="+
encodeURIComponent(q),
"_blank"
);

}

}


function clearSearch(){

document.getElementById("search").value="";

showRecords();

}


function tab(id,button){

document.querySelectorAll(
"body > .container section"
).forEach(function(s){

s.classList.add("hidden");

});

document.getElementById(id)
.classList.remove("hidden");

document.querySelectorAll("nav button")
.forEach(function(b){

b.classList.remove("active");

});

button.classList.add("active");

}


function render(){

document.getElementById("recordCount")
.innerText=records.length;

document.getElementById("activeCount")
.innerText=records.length;

document.getElementById("trashCount")
.innerText=trash.length;

showRecords();
showTrash();
showMoney();

}


function safe(value){

return String(value||"")
.replace(/&/g,"&amp;")
.replace(/</g,"&lt;")
.replace(/>/g,"&gt;")
.replace(/"/g,"&quot;");

}


function languageChange(){

let l=
document.getElementById("lang").value;

if(l==="ur"){

document.documentElement.dir="rtl";

document.getElementById("title").innerHTML=
"زمین اور حساب<br>کتاب پورٹل";

document.getElementById("subtitle").innerText=
"آسان، تیز اور موبائل دوست ویب پورٹل";

}

else if(l==="en"){

document.documentElement.dir="ltr";

document.getElementById("title").innerHTML=
"Land & Account<br>Portal";

document.getElementById("subtitle").innerText=
"Easy, fast and mobile-friendly web portal";

}

else{

document.documentElement.dir="rtl";

document.getElementById("title").innerHTML=
"زمين ۽ حساب<br>ڪتاب پورٽل";

document.getElementById("subtitle").innerText=
"آسان، تيز ۽ موبائل دوست ويب پورٽل";

}

}


function onlineStatus(){

document.getElementById("status").innerText=
navigator.onLine
?"● Online — Offline mode ready ●"
:"● Offline Mode ●";

}

window.addEventListener("online",onlineStatus);
window.addEventListener("offline",onlineStatus);

render();
onlineStatus();

</script>

</body>
</html>
