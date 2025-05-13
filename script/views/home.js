export function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Welcome to Robin & Lio's Wedding</h1>
    <p>You're invited to join us for a magical, romantic, and slightly spooky celebration!</p>
    <p>⏳ Countdown coming soon...</p>
    <nav>
      <a href="#rsvp">RSVP</a> |
      <a href="#schedule">Schedule</a> |
      <a href="#story">Our Story</a> |
      <a href="#gallery">Gallery</a> |
      <a href="#registry">Registry</a> |
      <a href="#crew">Wedding Crew</a> |
      <a href="#live">Live</a>
    </nav>
  `;
}
