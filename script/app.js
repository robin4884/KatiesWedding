import { renderLogin } from './views/login.js';
import { renderHome } from './views/home.js';

const routes = {
  '#home': renderHome,
};

function isAuthenticated() {
  return localStorage.getItem('auth') === 'true';
}

function router() {
  const hash = window.location.hash || '#home';

  if (!isAuthenticated()) {
    if (hash !== '#login') {
      window.location.hash = '#login';
      return;
    }
    return renderLogin();
  }

  const view = routes[hash] || renderHome;
  view();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);