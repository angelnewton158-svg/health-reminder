‎health/emergency.html
+25
Lines changed: 25 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,25 @@
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Emergency Call</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="iphone">
    <div class="island"></div>
    <header>
      Emergency Call
      <button onclick="speak('This is the emergency call page')">🔊</button>
    </header>
    <main>
      <h2>Emergency Options</h2>
      <button class="danger" onclick="speak('Calling 911 now')">📞 Call 911</button><br>
      <button onclick="speak('Calling emergency contact')">📞 Call Family</button>
      <p><a href="index.html">⬅ Back</a></p>
    </main>
  </div>
  <script src="voice.js"></script>
</body>
</html>
‎health/home.html
+26
Lines changed: 26 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,26 @@
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Home Command</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="iphone">
    <div class="island"></div>
    <header>
      Home Command
      <button onclick="speak('This is your home command control')">🔊</button>
    </header>
    <main>
      <h2>Connected Devices</h2>
      <p>💡 Lights – <strong>ON</strong></p>
      <p>🌡 Thermostat – <strong>22°C</strong></p>
      <p>🔒 Door Lock – <strong>Secured</strong></p>
      <p><a href="index.html">⬅ Back</a></p>
    </main>
  </div>
  <script src="voice.js"></script>
</body>
</html>
‎health/index.html
+53
Lines changed: 53 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,53 @@
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Health – Accessible Prototype</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="iphone">
    <div class="island"></div>
    <header>
      Health
      <button onclick="speak('Welcome to Health dashboard')">🔊 Read</button>
    </header>
    <main>
      <a class="card" href="pills.html">
        <div>
          <div class="label">Pills Reminder</div>
          <div class="muted">Daily medication alerts</div>
        </div>
        <div class="icon">💊</div>
      </a>
      <a class="card" href="physical.html">
        <div>
          <div class="label">Physical Info</div>
          <div class="muted">Weight, heart, sleep</div>
        </div>
        <div class="icon">📊</div>
      </a>
      <a class="card" href="home.html">
        <div>
          <div class="label">Home Command</div>
          <div class="muted">Smart devices</div>
        </div>
        <div class="icon">🏠</div>
      </a>
      <a class="card danger" href="emergency.html">
        <div>
          <div class="label">Emergency Call</div>
          <div class="muted">Quick help</div>
        </div>
        <div class="icon">🚨</div>
      </a>
    </main>
  </div>
  <script src="voice.js"></script>
</body>
</html>
‎health/physical.html
+26
Lines changed: 26 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,26 @@
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Physical Info</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="iphone">
    <div class="island"></div>
    <header>
      Physical Info
      <button onclick="speak('This is your physical information dashboard')">🔊</button>
    </header>
    <main>
      <h2>Recent Stats</h2>
      <p>⚖ Weight: 68 kg</p>
      <p>❤️ Heart Rate: 72 bpm</p>
      <p>😴 Sleep: 7 hrs</p>
      <p><a href="index.html">⬅ Back</a></p>
    </main>
  </div>
  <script src="voice.js"></script>
</body>
</html>
‎health/pills.html
+28
Lines changed: 28 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,28 @@
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Pills Reminder</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="iphone">
    <div class="island"></div>
    <header>
      Pills Reminder
      <button onclick="speak('This is your pills reminder screen')">🔊</button>
    </header>
    <main>
      <h2>Today’s Medication</h2>
      <ul>
        <li>💊 8:00 AM – Vitamin D</li>
        <li>💊 12:00 PM – Blood Pressure Tablet</li>
        <li>💊 9:00 PM – Sleep Aid</li>
      </ul>
      <p><a href="index.html">⬅ Back</a></p>
    </main>
  </div>
  <script src="voice.js"></script>
</body>
</html>
‎health/style.css
+47
Lines changed: 47 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,47 @@
:root{
  --bg:#121212;
  --panel:#1e1e1e;
  --text:#ffffff;
  --muted:#b0b0b0;
  --accent:#4CAF50;
  --danger:#FF5252;
}
body{
  margin:0;
  display:flex;justify-content:center;align-items:center;
  min-height:100vh;background:#000;
  font-family:sans-serif;
  font-size:1.2rem; line-height:1.6;
  color:var(--text);
}
/* iPhone frame */
.iphone{
  width:390px; height:844px;
  background:var(--bg); border-radius:50px;
  box-shadow:0 0 0 12px #000, 0 0 40px rgba(0,0,0,.6);
  overflow:hidden; position:relative; display:flex; flex-direction:column;
}
.island{
  width:120px;height:35px;background:#000;border-radius:20px;
  position:absolute;top:10px;left:50%;transform:translateX(-50%);
}
header{
  background:var(--panel);padding:1rem;
  display:flex;justify-content:space-between;align-items:center;
  font-weight:700;font-size:1.4rem;
}
header button{
  background:var(--accent);color:white;font-size:1rem;
  border:none;border-radius:8px;padding:.6rem 1rem;cursor:pointer;
}
main{padding:1rem;flex:1;overflow-y:auto}
h2{font-size:1.3rem;margin-top:0}
a{color:var(--accent);text-decoration:none}
button{
  margin:.5rem 0;padding:.8rem 1rem;border-radius:8px;
  border:none;background:var(--accent);color:white;cursor:pointer;
  font-size:1.2rem;
}
button.danger{background:var(--danger)}
‎health/voice.js
+6
Lines changed: 6 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,6 @@
function speak(text){
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 0.9; // slower for older users
  msg.pitch = 1;
  window.speechSynthesis.speak(msg);
}
