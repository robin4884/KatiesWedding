export function renderHome() {
  const app = document.getElementById('app');
  const guestName = localStorage.getItem('guestName') || 'Guest';

  app.innerHTML = `
    <h1>Welcome, ${guestName}!</h1>
    <p>We're so glad you could join us for this special occasion 🎉</p>
    <nav>
      <a href="#rsvp">RSVP</a> |
      <a href="#schedule">Schedule</a> |
      <a href="#story">Our Story</a> |
      <a href="#gallery">Gallery</a> |
      <a href="#registry">Registry</a> |
      <a href="#crew">Wedding Crew</a> |
      <a href="#live">Live</a>
    </nav>
    <br>
    <button id="logout">🚪 Logout</button>
  `;

  document.getElementById('logout').onclick = () => {
    localStorage.clear();
    window.location.hash = '#login';
  };
}
