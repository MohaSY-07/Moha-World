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


    // Menu modal open/close logic
    (function () {
      const menuBtn = document.getElementById('menuBtn');
      const modal = document.getElementById('menuModal');
      const closeBtn = document.getElementById('menuClose');
      const overlay = modal.querySelector('.modal-overlay');

      function openModal() {
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('open');
        // Move focus inside modal for accessibility
        closeBtn.focus();
        // prevent background scroll
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('open');
        menuBtn.focus();
        document.body.style.overflow = '';
      }

      menuBtn.addEventListener('click', openModal);
      closeBtn.addEventListener('click', closeModal);
      overlay.addEventListener('click', closeModal);

      // close on ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
      });

      // close if a link inside modal is clicked (optional UX)
      modal.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') closeModal();
      });
    })();
