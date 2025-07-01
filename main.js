// Navbar and contact input animation

const nav = document.querySelector('.navbar');
const height = window.innerHeight;

window.onscroll = function () {
  let scroll = window.scrollY;

  if (scroll > height * 0.2) {
    nav.classList.add('navbar-effect');
  } else {
    nav.classList.remove('navbar-effect');
  }
};

const responsiveNavContent = document.querySelector(
  '.navbar-responsive-content'
);
const navOpen = document.querySelector('.navbar-open');

navOpen.onclick = function () {
  if (responsiveNavContent.classList.contains('navbar-responsive-open')) {
    responsiveNavContent.classList.remove('navbar-responsive-open');
  } else {
    responsiveNavContent.classList.add('navbar-responsive-open');
  }
};

// Carousel

function setCarousel() {
  const slides = document.querySelectorAll('.hero-image');
  const dots = document.querySelectorAll('.dot');
  const prev = document.querySelector('.carousel-arrow.left');
  const next = document.querySelector('.carousel-arrow.right');

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Dots navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      resetInterval();
    });
  });

  // Arrow navigation
  prev.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  next.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });
}

// Services BG change

function setServicesBG() {
  const serviceCards = document.querySelectorAll('.services-card');
  const container = document.querySelector('.services-container');
  const originalBg = getComputedStyle(container).background;

  serviceCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      const bgImg = card.getAttribute('data-bg');
      container.style.background = `${bgImg} center/cover fixed`;
    });

    card.addEventListener('mouseleave', () => {
      container.style.background = `${originalBg} center/cover fixed`;
    });
  });
}

// Swiper

function setSwiper() {
  const width = window.innerWidth;
  const slidesPerViewAchievements = width > 960 ? 3 : 1;
  let slidesPerViewTestimonials = 4;
  if (width < 450) {
    slidesPerViewTestimonials = 1;
  } else if (width < 960) {
    slidesPerViewTestimonials = 2;
  }

  const swiper = new Swiper('.achievements-section', {
    loop: true,
    speed: 300,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: slidesPerViewAchievements,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const testimonialsSwiper = new Swiper('.testimonials-section', {
    loop: true,
    speed: 3000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: slidesPerViewTestimonials,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
}

// Scroll reveal

ScrollReveal({ reset: true }).reveal(
  '.new-section *:not(.swiper-wrapper):not(.swiper-wrapper *)',
  {
    duration: 400,
    origin: 'bottom',
    scale: 0.5,
  }
);

// Accordion

function setAccordion() {
  const accordionTabs = document.querySelectorAll('.choose-dropdown-tab h3');
  accordionTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const content = tab.nextSibling.nextSibling;
      const icon = tab.querySelector('span');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.innerHTML = '+';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.innerHTML = '-';
      }
    });
  });
}

// Contact form

function sendContactMail(event) {
  event.preventDefault();

  // const name = document.getElementById('name').value;
  // const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  window.location.href = `mailto:xyz@sakkshamfinserv.com?subject=${subject}&body=${message}`;
}

// Modal

const modal = document.getElementById('modal');

function openModal() {
  modal.style.display = 'block';
}

function openModalWithMessage(header, body) {
  document.getElementById('modalHeader').innerHTML = header;
  document.getElementById('modalBody').innerHTML = body;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('modalHeader').innerHTML = '';
  document.getElementById('modalBody').innerHTML = '';
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
