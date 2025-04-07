  const popup = document.getElementById('consent-popup');
  const agreeBtn = document.getElementById('agree-btn');

  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000; 
  const savedTimestamp = localStorage.getItem('consentTimestamp');

  if (!savedTimestamp || now - savedTimestamp > oneDay) {
    popup.style.display = 'flex';
  }

  agreeBtn.addEventListener('click', () => {
    localStorage.setItem('consentTimestamp', Date.now());
    popup.style.display = 'none';
  });



