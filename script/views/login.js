export function renderLogin() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <section class="login-wrapper">
      <div class="login-box">
        <h1 class="login-title">Welcome to Our Wedding</h1>
        <p class="login-sub">Enter your special invite code to continue ✨</p>
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

