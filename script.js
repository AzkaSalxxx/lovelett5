const config = window.MOON_MAIL_CONFIG || MOON_MAIL_CONFIG;

const starField = document.getElementById('starField');
const shootingStars = document.getElementById('shootingStars');
const moonButton = document.getElementById('moonButton');
const moonScreen = document.getElementById('moonScreen');
const letterScreen = document.getElementById('letterScreen');
const letterCard = document.getElementById('letterCard');
const typedLetter = document.getElementById('typedLetter');
const skipButton = document.getElementById('skipButton');
const gallerySection = document.getElementById('gallerySection');
const starGallery = document.getElementById('starGallery');
const bgMusic = document.getElementById('bgMusic');
const musicButton = document.getElementById('musicButton');
const photoModal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.getElementById('closeModal');

let typeIndex = 0;
let typingTimer = null;
let typingDone = false;
let musicStarted = false;

function applyConfig() {
  document.title = config.siteTitle || 'Moon Mail';
  document.getElementById('siteTitle').textContent = config.siteTitle || 'Moon Mail';
  document.getElementById('siteSubtitle').textContent = config.siteSubtitle || 'Tekan bulan untuk membuka surat.';
  document.getElementById('letterTitle').textContent = config.letterTitle || 'Dear Kamu,';

  if (config.music) {
    bgMusic.src = config.music;
    bgMusic.volume = config.musicVolume ?? 0.45;
  }
}

function createStars() {
  const totalStars = window.innerWidth < 640 ? 95 : 165;
  starField.innerHTML = '';

  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--size', `${Math.random() * 2.8 + 1}px`);
    star.style.setProperty('--opacity', `${Math.random() * 0.75 + 0.22}`);
    star.style.setProperty('--duration', `${Math.random() * 2.8 + 1.4}s`);
    star.style.animationDelay = `${Math.random() * 3}s`;
    starField.appendChild(star);
  }
}

function createShootingStars() {
  shootingStars.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const shoot = document.createElement('span');
    shoot.className = 'shooting-star';
    shoot.style.right = `${Math.random() * 20 - 8}%`;
    shoot.style.top = `${Math.random() * 42 + 4}%`;
    shoot.style.animationDelay = `${i * 1.9 + Math.random()}s`;
    shootingStars.appendChild(shoot);
  }
}

async function startMusic() {
  if (!config.music || musicStarted) return;
  try {
    await bgMusic.play();
    musicStarted = true;
    musicButton.textContent = '♫ Musik On';
  } catch (error) {
    musicButton.textContent = '♫ Klik Musik';
  }
}

function toggleMusic() {
  if (!config.music) return;
  if (bgMusic.paused) {
    bgMusic.play();
    musicStarted = true;
    musicButton.textContent = '♫ Musik On';
  } else {
    bgMusic.pause();
    musicButton.textContent = '♫ Musik Off';
  }
}

function openMoonMail() {
  startMusic();
  moonButton.classList.add('opening');

  setTimeout(() => {
    moonScreen.classList.remove('active');
    letterScreen.classList.add('active');
    letterCard.classList.add('arrive');
    setTimeout(startTyping, 900);
  }, 950);
}

function startTyping() {
  typedLetter.classList.add('cursor');
  typeIndex = 0;
  typedLetter.textContent = '';
  typingDone = false;
  typeNextCharacter();
}

function typeNextCharacter() {
  const text = config.letterText || '';
  if (typeIndex >= text.length) {
    finishTyping();
    return;
  }

  typedLetter.textContent += text.charAt(typeIndex);
  typeIndex++;

  const currentChar = text.charAt(typeIndex - 1);
  const pause = currentChar === '\n' ? 260 : currentChar.match(/[.,!?]/) ? 140 : config.typingSpeed || 38;
  typingTimer = setTimeout(typeNextCharacter, pause);
}

function finishTyping() {
  clearTimeout(typingTimer);
  typedLetter.textContent = config.letterText || '';
  typedLetter.classList.remove('cursor');
  typingDone = true;
  skipButton.classList.add('hidden');
  showGallery();
}

function skipTyping() {
  if (typingDone) return;
  finishTyping();
}

function showGallery() {
  buildGallery();
  setTimeout(() => {
    gallerySection.classList.remove('hidden');
    gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 500);
}

function buildGallery() {
  const photos = Array.isArray(config.photos) ? config.photos : [];
  starGallery.innerHTML = '';
  createDecorativeGalleryStars();

  const mobile = window.innerWidth < 640;
  const positions = mobile
    ? [
        [22, 12], [72, 18], [38, 30], [78, 42], [25, 58], [62, 70], [35, 84], [78, 88]
      ]
    : [
        [15, 28], [33, 15], [52, 32], [73, 18], [84, 48], [62, 68], [38, 76], [20, 58]
      ];

  photos.forEach((photo, index) => {
    const button = document.createElement('button');
    button.className = 'memory-star';
    const pos = positions[index % positions.length];
    button.style.setProperty('--x', `${pos[0]}%`);
    button.style.setProperty('--y', `${pos[1]}%`);
    button.style.setProperty('--photo', `url('${photo.src}')`);
    button.style.animationDelay = `${index * .18}s`;
    button.setAttribute('aria-label', photo.caption || `Foto ${index + 1}`);
    button.addEventListener('click', () => openPhoto(photo));
    starGallery.appendChild(button);
  });
}

function createDecorativeGalleryStars() {
  const total = Number.isFinite(config.decorativeStars) ? config.decorativeStars : 42;

  for (let i = 0; i < total; i++) {
    const star = document.createElement('span');
    const size = Math.random() * 7 + 3;
    const glow = Math.random() * 14 + 6;

    star.className = 'decorative-gallery-star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.opacity = `${Math.random() * 0.55 + 0.28}`;
    star.style.filter = `drop-shadow(0 0 ${glow}px rgba(255,255,255,.95))`;
    star.style.animationDelay = `${Math.random() * 4.5}s`;
    star.style.animationDuration = `${Math.random() * 3 + 2.2}s`;

    // Hindari beberapa bintang dekoratif terlalu menumpuk di tengah bintang foto.
    if (i % 7 === 0) star.classList.add('tiny-moon-dot');
    starGallery.appendChild(star);
  }

  for (let i = 0; i < 6; i++) {
    const dust = document.createElement('span');
    dust.className = 'purple-stardust';
    dust.style.left = `${Math.random() * 92 + 4}%`;
    dust.style.top = `${Math.random() * 85 + 5}%`;
    dust.style.animationDelay = `${Math.random() * 5}s`;
    starGallery.appendChild(dust);
  }
}

function openPhoto(photo) {
  modalImage.src = photo.src;
  modalCaption.textContent = photo.caption || '';
  photoModal.classList.remove('hidden');
}

function closePhoto() {
  photoModal.classList.add('hidden');
  modalImage.src = '';
}

applyConfig();
createStars();
createShootingStars();

moonButton.addEventListener('click', openMoonMail);
skipButton.addEventListener('click', skipTyping);
musicButton.addEventListener('click', toggleMusic);
closeModal.addEventListener('click', closePhoto);
photoModal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal-backdrop')) closePhoto();
});
window.addEventListener('resize', () => {
  createStars();
  if (!gallerySection.classList.contains('hidden')) buildGallery();
});
