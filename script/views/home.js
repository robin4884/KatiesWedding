export function renderHome() {
  const app = document.getElementById('app');
  const guestName = localStorage.getItem('guestName') || 'Guest';

  app.innerHTML = `
    <header class="top-bar">
      <div class="wrapper">
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
      </div>
    </header>

    <main class="wrapper">
      <section class="hero" id="home">
        <h1 class="main-title">Welcome, ${guestName}</h1>
        <p class="sub-title">You're invited to a whimsical, romantic, and slightly spooky celebration</p>
      </section>

      <section class="countdown">
        <h3>Countdown to the Big Day</h3>
        <p id="timer">Loading...</p>
      </section>

      <section class="story-section fade-on-scroll" id="story">
        <div class="story-text">
          <h2>Their Story</h2>
          <p>Once upon a time, two beautiful souls found each other in this vast, chaotic world...</p>
          <p>They laughed, cried, grew, and now they invite you to join their next chapter.</p>
        </div>
        <div class="story-image">
          <img src="assets/images/Pale-pink-and-purple-bouquet.jpg" alt="Placeholder bouquet">
        </div>
      </section>

      <section id="gallery" class="carousel-section">
        <h2 class="section-title">Gallery</h2>
        <div class="carousel-container">
          <button class="carousel-btn left">&#10094;</button>
          <div class="carousel-track">
            <img src="assets/images/photo1.jpg" alt="Photo 1" />
            <img src="assets/images/photo2.jpg" alt="Photo 2" />
            <img src="assets/images/photo3.jpg" alt="Photo 3" />
          </div>
          <button class="carousel-btn right">&#10095;</button>
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

  let index = 0;
  const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');
  const slides = document.querySelectorAll('.carousel-track img');

  function updateCarousel() {
    index = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  leftBtn.onclick = () => {
    index--;
    updateCarousel();
  };

  rightBtn.onclick = () => {
    index++;
    updateCarousel();
  };

  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const section = document.querySelector(href);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
