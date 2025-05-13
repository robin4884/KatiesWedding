export function renderHome() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <header>
      <h1>Robin & Lio's Wedding</h1>
      <p>You're invited to a whimsical, romantic, and slightly spooky celebration!</p>
    </header>

    <section id="countdown">
      <h3>Countdown to the Big Day</h3>
      <p id="timer">Loading...</p>
    </section>

    <nav style="margin-top: 20px;">
      <a href="#rsvp">RSVP</a> |
      <a href="#schedule">Schedule</a> |
      <a href="#story">Our Story</a> |
      <a href="#gallery">Gallery</a> |
      <a href="#registry">Registry</a> |
      <a href="#crew">Wedding Crew</a> |
      <a href="#live">Live</a>
    </nav>

    <div style="margin-top: 20px;">
      <button id="logout">🚪 Logout</button>
    </div>
  `;

  document.getElementById('logout').onclick = () => {
    localStorage.clear();
    window.location.hash = '#login';
  };

  // Optional: Countdown logic (set your date here)
  const weddingDate = new Date('2028-10-14T15:00:00'); // Update to your actual date/time
  const timer = document.getElementById('timer');

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      timer.textContent = "It's Wedding Time! 💍🎉";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
