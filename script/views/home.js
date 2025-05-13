export function renderHome() {
  const app = document.getElementById('app');

  // Add this inside renderHome()
app.innerHTML += `
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
`;

// Carousel JS
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

// Smooth scroll for nav links
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
}