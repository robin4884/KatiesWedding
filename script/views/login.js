export function renderLogin() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Enter Your Wedding Invite Code</h2>
    <form id="login-form">
      <input type="text" placeholder="Enter invite code" required />
      <button type="submit">Enter</button>
    </form>
    <p id="error" style="color:red; display:none;">Invalid code. Please try again.</p>
  `;

  const validGuests = {
    'testcode': "Robin",
    'magic123': "Aunt Juli"
  };

  const form = document.getElementById('login-form');
  const error = document.getElementById('error');

  form.onsubmit = (e) => {
    e.preventDefault();
    const code = form.querySelector('input').value.trim().toLowerCase();
    console.log("Entered code:", code); // 🔍 for debugging

    if (validGuests[code]) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('guestName', validGuests[code]);
      window.location.hash = '#home';
    } else {
      error.style.display = 'block';
    }
  };
}
