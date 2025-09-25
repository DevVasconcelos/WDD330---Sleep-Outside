import Alert from './alert.js';

document.addEventListener('DOMContentLoaded', async () => {
  const alert = new Alert();
  await alert.displayAlerts();
});

export { Alert };