document.addEventListener('DOMContentLoaded', () => {

  const body = document.body;

  function openModal(selector) {
    const modal = document.querySelector(selector);
    if (!modal) return;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';
  }

  document.querySelectorAll('.open-modal').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      openModal(a.dataset.target);
    });
  });

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
  });

  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', e => {
      if (e.target === m) closeModal(m);
    });
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.show').forEach(closeModal);
    }
  });

  const popup = document.getElementById("photoPopup");
  const btn = document.getElementById("seePhotoBtn");
  const span = document.querySelector(".close");
  const popupImg = document.getElementById("popupImage");

  if (btn) {
    btn.onclick = function () {
      popup.style.display = "block";
      popupImg.src = "kitchen.jpeg";
    };
  }

  if (span) {
    span.onclick = function () {
      popup.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  };

  document.querySelectorAll('.content-box[data-audio]').forEach(box => {
    let audio = new Audio(box.dataset.audio);
    box.addEventListener('click', () => {
      audio.currentTime = 0;
      audio.play();
    });
  });

  document.querySelectorAll('.site-footer .btn').forEach(button => {
    button.addEventListener('click', () => {
      const countSpan = button.querySelector('.count');
      let count = parseInt(countSpan.textContent, 10);
      countSpan.textContent = count + 1;
    });
  });
});


const musicBox = document.getElementById('music');
const audio = new Audio(musicBox.dataset.audio);

musicBox.addEventListener('mouseenter', () => {
  musicBox.style.cursor = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'><text y=\'24\' font-size=\'24\'>🎵</text></svg>") 16 16, auto';
});

musicBox.addEventListener('mouseleave', () => {
  musicBox.style.cursor = 'auto';
});

musicBox.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();
});
