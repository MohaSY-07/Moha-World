// ===== Dark Mode =====
const pModeBtns = document.querySelectorAll('#p-mode, #p-mode-footer');
pModeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});

// ===== Language Switch =====
const langBtns = document.querySelectorAll('#lang-btn, #lang-footer');
let langState = 'EN'; // EN → SV → AR

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(langState === 'EN') {
      langState = 'SV';
    } else if(langState === 'SV') {
      langState = 'AR';
    } else {
      langState = 'EN';
    }
    updateLanguage();
  });
});

function updateLanguage() {
  if(langState === 'EN') {
    document.body.lang = 'en';
    document.querySelectorAll('[data-text]').forEach(el => {
      el.textContent = el.dataset.en;
    });
    langBtns.forEach(b => b.textContent = 'EN');
  } else if(langState === 'SV') {
    document.body.lang = 'sv';
    document.querySelectorAll('[data-text]').forEach(el => {
      el.textContent = el.dataset.sv;
    });
    langBtns.forEach(b => b.textContent = 'SV');
  } else {
    document.body.lang = 'ar';
    document.querySelectorAll('[data-text]').forEach(el => {
      el.textContent = el.dataset.ar;
    });
    langBtns.forEach(b => b.textContent = 'AR');
  }
}
