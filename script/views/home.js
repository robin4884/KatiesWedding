export function renderHome() {
  const name = localStorage.getItem('guestName') || 'guest';
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Welcome, ${name}!</h1>
    <p>You are now invited to the wedding website 🎉</p>
    <a href="#login" onclick="logout()">Logout</a>
  `;
}

window.logout = function () {
  localStorage.clear();
  window.location.hash = '#login';
};
