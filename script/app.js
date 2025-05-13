import { renderLogin } from './views/login.js';
import { renderHome } from './views/home.js';
// import other views as needed

const routes = {
  '#home': renderHome,
  // '#rsvp': renderRSVP,
  // etc...
};

// 👇 This checks if the user is logged in
function isAuthenticated() {
  return localStorage.getItem('auth') === 'true';
}

function router() {
  const hash = window.location.hash || '#home';

  // 👇 Force to login if not authenticated
  if (!isAuthenticated()) {
    if (hash !== '#login') {
      window.location.hash = '#login'; // Triggers rerender to login view
      return;
    }
    renderLogin();
    return;
  }

  const view = routes[hash] || renderHome;
  view();
}

// 👇 Ensure router runs immediately on page load AND after any hash change
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  addThemeToggle();
  router(); // Call this *after* setting up theme
});

function addThemeToggle() {
  const themeBtn = document.createElement('button');
  themeBtn.textContent = '🌓 Toggle Theme';
  themeBtn.className = 'theme-toggle';
  themeBtn.onclick = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  };

  const logoutBtn = document.createElement('button');
  logoutBtn.textContent = '🚪 Logout';
  logoutBtn.className = 'logout-button';
  logoutBtn.style.marginLeft = '10px';
  logoutBtn.onclick = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('guestName');
    window.location.hash = '#login';
  };

  const btnContainer = document.createElement('div');
  btnContainer.style.position = 'fixed';
  btnContainer.style.top = '10px';
  btnContainer.style.right = '10px';
  btnContainer.appendChild(themeBtn);
  btnContainer.appendChild(logoutBtn);

  document.body.appendChild(btnContainer);
  document.documentElement.setAttribute('data-theme', 'light');
}