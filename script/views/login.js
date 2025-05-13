export function renderLogin() {
  console.log("Login view loaded");

  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Enter Your Wedding Invite Code</h2>
    <form id="login-form">
      <input type="text" id="code" placeholder="Enter invite code" required />
      <button type="submit">Enter</button>
    </form>
    <p id="error" style="color:red; display:none;">Invalid code. Please try again.</p>
  `;

  const validGuests = {
    'magic123': 'Robin\'s Aunt Juli',
    'balloon456': 'Lio\'s Friend Hugo',
    'ghost789': 'Robin\'s Mom'
  };

  const form = document.getElementById('login-form');
  const error = document.getElementById('error');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = document.getElementById('code').value.trim().toLowerCase();
    console.log("Typed code:", code);

    if (validGuests[code]) {
      console.log("✅ Logged in as:", validGuests[code]);
      localStorage.setItem('auth', 'true');
      localStorage.setItem('guestName', validGuests[code]);
      window.location.hash = '#home';
    } else {
      console.log("❌ Invalid code");
      error.style.display = 'block';
    }
  });
}
