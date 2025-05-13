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

  // 💬 Add or change codes + names here
  const validGuests = {
    'KJ1': "Robin - Maid of Honor",
    'KJ2': "Katie - Bride",
    'KJ3': "Julie - Justins's Mom",
    'KJ4': "Justin - Grom",
    'ClassFinal': "JohnM - Profesor",
    // Add more later - delete Class Final later
  };

  const form = document.getElementById('login-form');
  const error = document.getElementById('error');

  form.onsubmit = (e) => {
    e.preventDefault();
    const code = form.querySelector('input').value.trim().toLowerCase();

    if (validGuests[code]) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('guestName', validGuests[code]); // save name for greeting
      window.location.hash = '#home';
    } else {
      error.style.display = 'block';
    }
  };
}
