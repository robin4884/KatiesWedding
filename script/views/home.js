export function renderHome() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <header class="top-bar">
      <nav class="main-nav">
        <a href="#home">Home</a>
        <a href="#rsvp">RSVP</a>
        <a href="#schedule">Schedule</a>
        <a href="#story">Our Story</a>
        <a href="#gallery">Gallery</a>
        <a href="#registry">Registry</a>
        <a href="#crew">Wedding Crew</a>
        <a href="#live">Live</a>
      </nav>
      <button id="logout" class="logout-btn">Logout</button>
    </header>

    <main class="wrapper">
      <section class="hero">
        <h1 class="main-title">Welcome</h1>
        <p class="sub-title">You're invited to a whimsical, romantic, and slightly spooky celebration</p>
      </section>

      <section class="countdown">
        <h3>Countdown to the Big Day</h3>
        <p id="timer">Loading...</p>
      </section>

      <section class="story-section fade-on-scroll">
        <div class="story-text">
          <h2>Their Story</h2>
          <p>Once upon a time, two beautiful souls found each other in this vast, chaotic world...</p>
          <p>They laughed, cried, grew, and now they invite you to join their next chapter.</p>
        </div>
        <div class="story-image">
          <img src="assets/images/Pale-pink-and-purple-bouquet.jpg" alt="Placeholder bouquet">
        </div>
      </section>
    </main>

    <div id="petal-container"></div>
  `;

  document.getElementById('logout').onclick = () => {
    localStorage.clear();
    window.location.hash = '#login';
  };

  const weddingDate = new Date('2028-10-14T15:00:00');
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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-on-scroll').forEach(el => observer.observe(el));

  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = 3 + Math.random() * 5 + 's';
    document.getElementById('petal-container').appendChild(petal);
    setTimeout(() => petal.remove(), 8000);
  }

  setInterval(createPetal, 300);
}
