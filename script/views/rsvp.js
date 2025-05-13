export function renderRSVP() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>RSVP Page</h2>
    <p>This is where the RSVP form will go.</p>

    <button onclick="window.location.hash = '#home'">Back to Home</button>
  `;
}
