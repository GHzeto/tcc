// ===== Login =====
const loginBtn = document.getElementById("open-login");
const loginModal = document.getElementById("login-modal");
const closeLogin = document.getElementById("close-login");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.add("show");
});

closeLogin.addEventListener("click", () => {
  loginModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) loginModal.classList.remove("show");
});

// ===== Carrinho =====
const cartBtn = document.getElementById("open-cart");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartModal.classList.add("show");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === cartModal) cartModal.classList.remove("show");
});

// ===== Carrossel =====
window.addEventListener('load', () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const visibleSlides = 4;
  let index = 0;
  let autoInterval = null;

  function getSlideFullWidth(slide) {
    const rect = slide.getBoundingClientRect();
    const style = getComputedStyle(slide);
    const marginLeft = parseFloat(style.marginLeft) || 0;
    const marginRight = parseFloat(style.marginRight) || 0;
    return rect.width + marginLeft + marginRight;
  }

  let slideWidth = getSlideFullWidth(slides[0]);
  let totalSlides = slides.length;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);

  slides.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      window.location.href = "brinquedos.html";
    });
  });

  function updateButtons() {
    prevBtn.disabled = index === 0;
    nextBtn.disabled = false; // sempre ativo agora, já que vai reiniciar
    prevBtn.style.opacity = prevBtn.disabled ? '0.45' : '1';
    nextBtn.style.opacity = '1';
    prevBtn.style.pointerEvents = prevBtn.disabled ? 'none' : 'auto';
    nextBtn.style.pointerEvents = 'auto';
  }

  function updateCarousel() {
    if (index < 0) index = 0;
    if (index > maxIndex) index = 0; // reinicia quando passa do fim
    track.style.transform = `translateX(${-index * slideWidth}px)`;
    updateButtons();
  }

  nextBtn.addEventListener("click", () => {
    index++;
    if (index > maxIndex) index = 0;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = maxIndex;
    updateCarousel();
  });

  function startAuto() {
    if (autoInterval) clearInterval(autoInterval);
    autoInterval = setInterval(() => {
      index++;
      if (index > maxIndex) index = 0;
      updateCarousel();
    }, 3000);
  }

  function stopAuto() {
    if (autoInterval) {
      clearInterval(autoInterval);
      autoInterval = null;
    }
  }

  window.addEventListener('resize', () => {
    slideWidth = getSlideFullWidth(slides[0]);
    updateCarousel();
  });

  updateCarousel();
  startAuto();
});
