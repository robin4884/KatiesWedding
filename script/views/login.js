export function renderLogin() {
  console.log("Login view loaded"); // debug log

  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Enter Your Wedding Invite Code</h2>
    <form id="login-form">
      <input type="text" placeholder="Enter invite code" required />
      <button type="submit">Enter</button>
    </form>
    <p id="error" style="color:red; display:none;">Invalid code. Please try again.</p>
  `;

  // All codes must be lowercase
  const validGuests = {
    'kj': "Robin",
    'balloon456': "Lio's Friend Hugo",
    'ghost789': "Robin's Mom",
    'moonlight': "Best Friend Archer",
    'enchanted': "Cousin Eva"
  };

  const form = document.getElementById('login-form');
  const error = document.getElementById('error');

  form.onsubmit = (e) => {
    e.preventDefault();
    const code = form.querySelector('input').value.trim().toLowerCase();
    console.log("Typed code:", code); // debug

    if (validGuests[code]) {
      console.log("✅ Valid code for:", validGuests[code]);
      localStorage.setItem('auth', 'true');
      localStorage.setItem('guestName', validGuests[code]);
      window.location.hash = '#home';
    } else {
      console.log("❌ Invalid code:", code);
      error.style.display = 'block';
    }
  };
}
