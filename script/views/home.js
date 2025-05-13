export function renderHome() {
  const app = document.getElementById('app');
  const guestName = localStorage.getItem('guestName') || 'Guest';

  app.innerHTML = `
    <h1>Welcome, ${guestName}!</h1>
    <p>We're so glad you could join us for this special occasion 🎉</p>

    <div style="margin-top: 20px;">
      <a href="#rsvp" id="enter-site" style="padding: 10px 20px; background: black; color: white; text-decoration: none; border-radius: 6px;">Enter the Site</a>
    </div>

    <div style="margin-top: 10px;">
      <button id="logout" style="padding: 5px 10px;">Logout</button>
    </div>
  `;

  document.getElementById('logout').onclick = () => {
    localStorage.clear();
    window.location.hash = '#login';
  };
}
