export function renderHome() {
  const app = document.getElementById('app');
  const guestName = localStorage.getItem('guestName') || 'Guest';

  app.innerHTML = `
    <h1>Welcome, ${guestName}!</h1>
    <p>We're so glad you could join us for this special occasion 🎉</p>

    <button id="enter-site">Enter the Site</button>
    <button id="logout">Logout</button>
  `;

  document.getElementById('enter-site').onclick = () => {
    alert("You can now build your next page here — like RSVP or Schedule!");
    // You can redirect to #rsvp, #schedule, etc. when they're ready
  };

  document.getElementById('logout').onclick = () => {
    localStorage.clear();
    window.location.hash = '#login';
  };
}
