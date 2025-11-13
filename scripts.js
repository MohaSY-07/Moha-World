document.addEventListener('DOMContentLoaded', () => {

  // ===== Dark Mode =====
  const darkModeBtns = document.querySelectorAll('.p-mode-btn');
  darkModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });

  // ===== Language Switch =====
  const langBtns = document.querySelectorAll('.lang-btn');
  let langState = 'EN'; // EN → SV → AR

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (langState === 'EN') langState = 'SV';
      else if (langState === 'SV') langState = 'AR';
      else langState = 'EN';
      updateLanguage();
    });
  });

  function updateLanguage() {
    document.body.lang = langState.toLowerCase();
    document.querySelectorAll('[data-text]').forEach(el => {
      if (langState === 'EN') el.textContent = el.dataset.en;
      else if (langState === 'SV') el.textContent = el.dataset.sv;
      else el.textContent = el.dataset.ar;
    });
    langBtns.forEach(btn => btn.textContent = langState);
  }

});
