export function renderLogin() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <section class="login-wrapper">
      <div class="login-box">
        <h1 class="login-title">Welcome to Our Wedding</h1>
        <p class="login-sub">Enter your invite code to continue</p>
        <input id="invite-code" type="text" placeholder="Enter code..." />
        <button id="login-btn">Continue</button>
        <p id="login-error" class="error-msg" style="display:none;">Invalid code. Please try again.</p>
      </div>
    </section>
  `;

  const loginBtn = document.getElementById('login-btn');
  const codeInput = document.getElementById('invite-code');
  const errorMsg = document.getElementById('login-error');

  const validGuests = {
    "apple123": "Robin",
    "beetlejuice": "Lio",
    "haunt28": "Aunt Juli"
  };

  loginBtn.onclick = () => {
    const code = codeInput.value.trim().toLowerCase();
    if (validGuests[code]) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('guestName', validGuests[code]);
      window.location.hash = '#home';
    } else {
      errorMsg.style.display = 'block';
    }
  };
}

export function renderHome() {
  const app = document.getElementById('app');
  const guestName = localStorage.getItem('guestName') || 'Guest';

  app.innerHTML = `
    <header class="top-bar">
      <div class="wrapper">
        <nav class="main-nav">
          <a href="#home">Home</a>
          <a href="#rsvp">RSVP</a>
          <a href="#schedule">Schedule</a>
          <a href="#story">Our Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#registry">Registry</a>
          <a href="#crew">Wedding Crew</a>
          <a href="#live">Live</a>
        </nav>
        <button id="logout" class="logout-btn">Logout</button>
      </div>
    </header>

    <main class="wrapper">
      <section class="hero" id="home">
        <h1 class="main-title">Welcome, ${guestName}</h1>
        <p class="sub-title">You're invited to a whimsical, romantic, and slightly spooky celebration</p>
      </section>
    </main>
  `;

  document.getElementById('logout').onclick = () => {
    localStorage.clear();
    window.location.hash = '#login';
  };
}

