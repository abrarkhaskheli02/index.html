<!DOCTYPE html>
<html lang="sd" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Abrar Khaskheli - زمين ۽ حساب ڪتاب پورٹل</title>

  <meta name="theme-color" content="#1769aa">
  <meta name="description" content="زمين ۽ حساب ڪتاب جو آسان ويب پورٹل">

  <link rel="manifest" href="./manifest.webmanifest">

  <style>
    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      margin: 0;
      font-family: Arial, "Noto Naskh Arabic", sans-serif;
      background: #f3f7fb;
      color: #172b3a;
    }

    /* TOP HEADER */
    .top {
      height: 76px;
      background: #176da8;
      color: white;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 25px;
      font-size: 25px;
      font-weight: bold;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* HERO */
    .hero {
      min-height: 650px;
      padding: 55px 35px 45px;
      background: linear-gradient(135deg, #174f7c, #176da8);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero h1 {
      font-size: 58px;
      line-height: 1.45;
      margin: 40px 0 35px;
      font-weight: 500;
    }

    .hero p {
      font-size: 28px;
      line-height: 1.7;
      margin-top: 45px;
    }

    /* LANGUAGE */
    .language {
      width: 48%;
      min-width: 280px;
      max-width: 430px;
      height: 82px;
      background: rgba(255,255,255,0.17);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22px;
      font-size: 27px;
      margin-top: 40px;
    }

    .language span:first-child {
      font-size: 30px;
    }

    /* STATUS */
    .status {
      margin: 22px 0;
      padding: 23px;
      border: 2px solid #c5e7d5;
      background: #edf9f1;
      color: #167342;
      border-radius: 25px;
      text-align: center;
      font-size: 29px;
      font-weight: bold;
    }

    .dot {
      display: inline-block;
      width: 25px;
      height: 25px;
      background: #2aa865;
      border-radius: 50%;
      margin: 0 8px;
      vertical-align: middle;
    }

    /* NAVIGATION */
    .nav {
      background: white;
      display: flex;
      overflow-x: auto;
      white-space: nowrap;
      border-bottom: 1px solid #ddd;
      direction: rtl;
    }

    .nav button {
      border: 0;
      background: white;
      padding: 22px 35px;
      font-size: 23px;
      color: #176da8;
      font-weight: bold;
      cursor: pointer;
    }

    .nav button:hover {
      background: #eef6fc;
    }

    /* CONTENT */
    .container {
      max-width: 900px;
      margin: auto;
      padding: 35px;
    }

    .card {
      background: white;
      border: 1px solid #d7e1e8;
      border-radius: 35px;
      padding: 35px;
      margin-bottom: 30px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.04);
    }

    .card h2 {
      font-size: 34px;
      margin-top: 0;
      margin-bottom: 30px;
    }

    .item {
      background: #edf6fd;
      border-radius: 30px;
      padding: 28px;
      margin: 20px 0;
      font-size: 27px;
      cursor: pointer;
      transition: 0.2s;
    }

    .item:hover {
      background: #dceefa;
      transform: scale(1.01);
    }

    /* FORM */
    label {
      display: block;
      font-size: 23px;
      margin: 20px 0 8px;
    }

    input,
    select {
      width: 100%;
      padding: 20px;
      border: 1px solid #cbd8e2;
      border-radius: 17px;
      font-size: 22px;
      outline: none;
      background: white;
    }

    input:focus,
    select:focus {
      border-color: #176da8;
    }

    .btn {
      width: 100%;
      border: 0;
      background: #176da8;
      color: white;
      padding: 20px;
      border-radius: 18px;
      font-size: 24px;
      margin-top: 25px;
      cursor: pointer;
      font-weight: bold;
    }

    .btn:active {
      transform: scale(.98);
    }

    /* RESULT */
    #result {
      margin-top: 25px;
      padding: 22px;
      border-radius: 18px;
      background: #edf9f1;
      color: #176b3b;
      font-size: 23px;
      display: none;
    }

    /* FOOTER */
    footer {
      background: #124e79;
      color: white;
      text-align: center;
      padding: 30px;
      font-size: 20px;
      margin-top: 30px;
    }

    /* MOBILE */
    @media(max-width:600px) {

      .top {
        height: 65px;
        font-size: 21px;
        padding: 0 18px;
      }

      .hero {
        min-height: 590px;
        padding: 30px 25px;
      }

      .hero h1 {
        font-size: 45px;
        margin-top: 35px;
      }

      .hero p {
        font-size: 23px;
      }

      .language {
        width: 100%;
        min-width: 0;
        height: 70px;
        font-size: 24px;
      }

      .status {
        font-size: 20px;
        padding: 18px 10px;
      }

      .nav button {
        font-size: 19px;
        padding: 20px 24px;
      }

      .container {
        padding: 20px 15px;
      }

      .card {
        padding: 25px 18px;
        border-radius: 28px;
      }

      .card h2 {
        font-size: 29px;
      }

      .item {
        font-size: 23px;
        padding: 24px;
      }
    }
  </style>
</head>

<body>

  <!-- HEADER -->
  <div class="top">
    <div class="brand">
      Abrar Khaskheli 🌾
    </div>
  </div>

  <!-- HERO -->
  <section class="hero">

    <h1>
      زمين ۽<br>
      حساب ڪتاب<br>
      پورٽل
    </h1>

    <div class="language">
      <span>⌄</span>
      <span>سنڌي</span>
    </div>

    <p>
      آسان، تيز ۽ موبائل فرينڊلي<br>
      ويب پورٽل
    </p>

  </section>

  <!-- ONLINE OFFLINE -->
  <div class="status">
    Online – Offline mode ready
    <span class="dot"></span>
    🟢
  </div>

  <!-- NAVIGATION -->
  <nav class="nav">

    <button onclick="showSection('dashboard')">
      🏠 ڊيش بورڊ
    </button>

    <button onclick="showSection('records')">
      📋 رڪارڊ
    </button>

    <button onclick="showSection('calculator')">
      📐 ڪيلڪيوليٽر
    </button>

    <button onclick="showSection('registry')">
      ♻️ رجسٽري
    </button>

  </nav>

  <!-- MAIN -->
  <main class="container">

    <!-- DASHBOARD -->
    <section id="dashboard" class="card">

      <h2>📊 ڊيش بورڊ</h2>

      <div class="item" onclick="message('ڪل رڪارڊ')">
        ڪل رڪارڊ
      </div>

      <div class="item" onclick="message('فعال رڪارڊ')">
        فعال
      </div>

      <div class="item" onclick="message('ٽرينش / منتقلي')">
        ٽرينش
      </div>

    </section>


    <!-- NEW RECORD -->
    <section class="card">

      <h2>➕ نيا رڪارڊ</h2>

      <label>مالڪ جو نالو</label>
      <input id="owner" type="text" placeholder="مالڪ جو نالو لکو">

      <label>زمين جو نمبر</label>
      <input id="landNo" type="text" placeholder="زمين نمبر">

      <label>رقبو</label>
      <input id="area" type="text" placeholder="رقبو">

      <label>قسم</label>
      <select id="type">
        <option>زرعي زمين</option>
        <option>رهائشي</option>
        <option>ڪمرشل</option>
        <option>ٻيو</option>
      </select>

      <button class="btn" onclick="saveRecord()">
        💾 رڪارڊ محفوظ ڪريو
      </button>

      <div id="result"></div>

    </section>


    <!-- CALCULATOR -->
    <section id="calculator" class="card">

      <h2>📐 زمين ڪيلڪيوليٽر</h2>

      <label>ڊيگهه</label>
      <input id="length" type="number" placeholder="ڊيگهه">

      <label>ويڪر</label>
      <input id="width" type="number" placeholder="ويڪر">

      <button class="btn" onclick="calculateArea()">
        حساب ڪريو
      </button>

      <div id="calcResult"></div>

    </section>


    <!-- RECORDS -->
    <section id="records" class="card">

      <h2>📋 محفوظ رڪارڊ</h2>

      <div id="recordList">
        اڃا تائين ڪو رڪارڊ موجود ناهي.
      </div>

    </section>

  </main>


  <footer>
    © 2026 Abrar Khaskheli<br>
    زمين ۽ حساب ڪتاب پورٽل
  </footer>


  <script>

    /* NAVIGATION */
    function showSection(id) {

      const section = document.getElementById(id);

      if(section) {
        section.scrollIntoView({
          behavior: "smooth"
        });
      }

    }


    /* MESSAGE */
    function message(text) {

      alert(text + " چونڊيو ويو");

    }


    /* SAVE RECORD */
    function saveRecord() {

      const owner = document.getElementById("owner").value;
      const landNo = document.getElementById("landNo").value;
      const area = document.getElementById("area").value;
      const type = document.getElementById("type").value;

      if(!owner || !landNo) {

        alert("مهرباني ڪري مالڪ جو نالو ۽ زمين نمبر لکو");

        return;
      }

      const record = {
        owner: owner,
        landNo: landNo,
        area: area,
        type: type,
        date: new Date().toLocaleDateString()
      };

      let records =
        JSON.parse(localStorage.getItem("landRecords")) || [];

      records.push(record);

      localStorage.setItem(
        "landRecords",
        JSON.stringify(records)
      );

      document.getElementById("result").style.display = "block";

      document.getElementById("result").innerHTML =
        "✅ رڪارڊ ڪاميابي سان محفوظ ٿي ويو";

      document.getElementById("owner").value = "";
      document.getElementById("landNo").value = "";
      document.getElementById("area").value = "";

      loadRecords();

    }


    /* LOAD RECORDS */
    function loadRecords() {

      const records =
        JSON.parse(localStorage.getItem("landRecords")) || [];

      const list =
        document.getElementById("recordList");

      if(records.length === 0) {

        list.innerHTML =
          "اڃا تائين ڪو رڪارڊ موجود ناهي.";

        return;
      }

      list.innerHTML = "";

      records.forEach((r, index) => {

        const div = document.createElement("div");

        div.className = "item";

        div.innerHTML =
          "<b>رڪارڊ #" + (index + 1) + "</b><br>" +
          "مالڪ: " + r.owner + "<br>" +
          "زمين نمبر: " + r.landNo + "<br>" +
          "رقبو: " + r.area + "<br>" +
          "قسم: " + r.type + "<br>" +
          "تاريخ: " + r.date;

        list.appendChild(div);

      });

    }


    /* CALCULATOR */
    function calculateArea() {

      const length =
        parseFloat(document.getElementById("length").value);

      const width =
        parseFloat(document.getElementById("width").value);

      if(isNaN(length) || isNaN(width)) {

        alert("ڊيگهه ۽ ويڪر داخل ڪريو");

        return;
      }

      const area = length * width;

      const result =
        document.getElementById("calcResult");

      result.style.display = "block";

      result.style.marginTop = "20px";

      result.style.padding = "20px";

      result.style.background = "#edf9f1";

      result.style.borderRadius = "18px";

      result.style.fontSize = "23px";

      result.innerHTML =
        "📐 ڪل رقبو: <b>" + area + "</b> چورس يونٽ";

    }


    /* LOAD SAVED DATA */
    loadRecords();


    /* SERVICE WORKER */
    if("serviceWorker" in navigator) {

      window.addEventListener("load", () => {

        navigator.serviceWorker.register("./sw.js")
          .then(() => {
            console.log("Offline mode ready");
          })
          .catch(error => {
            console.log("Service Worker error:", error);
          });

      });

    }

  </script>

</body>
</html>
