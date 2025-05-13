import { renderLogin } from './views/login.js';
import { renderHome } from './views/home.js';
// import other views as you build them
// import { renderRSVP } from './views/rsvp.js';
// import { renderSchedule } from './views/schedule.js';
// etc...

const routes = {
  '#home': renderHome,
  // '#rsvp': renderRSVP,
  // '#schedule': renderSchedule,
  // more routes here...
};

// Check if the guest is logged in
function isAuthenticated() {
  return localStorage.getItem('auth') === 'true';
}

// Page loader
function router() {
  const hash = window.location.hash || '#home';

  if (!isAuthenticated() && hash !== '#login') {
    window.location.hash = '#login';
    return renderLogin();
  }

  const view = routes[hash] || renderHome;
  view();
}

// Load theme toggle + route listener
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  addThemeToggle();
  router();
});

// Add dark/light toggle button
function addThemeToggle() {
  const btn = document.createElement('button');
  btn.textContent = '🌓 Toggle Theme';
  btn.className = 'theme-toggle';
  btn.onclick = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  };
  document.body.appendChild(btn);
  document.documentElement.setAttribute('data-theme', 'light');
}
