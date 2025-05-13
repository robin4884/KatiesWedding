// app.js
import { renderLogin, renderHome } from './components.js';

function router() {
  const hash = window.location.hash || '#login';
  const isAuth = localStorage.getItem('auth');

  if (hash === '#home' && isAuth) {
    renderHome();
  } else {
    renderLogin();
  }
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

