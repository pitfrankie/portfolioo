// ================= TYPED TEXT =================
if (document.querySelector(".text")) {
  new Typed(".text", {
    strings: ["Student", "Gamer", "Planner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
}

// ================= EDUC TOUR IMAGE MODAL =================
document.addEventListener("DOMContentLoaded", () => {

  const imgModal = document.getElementById("imgModal");
  const fullImage = document.getElementById("fullImage");
  const closeModal = document.querySelector(".close-modal");

  if (imgModal && fullImage) {
    document.querySelectorAll(".eductour-card img").forEach(img => {
      img.addEventListener("click", () => {
        imgModal.style.display = "flex";
        fullImage.src = img.src;
      });
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      imgModal.style.display = "none";
    });
  }

  // ================= FULL CARD MODAL =================
  const cardModal = document.getElementById("cardModal");

  if (cardModal) {
    document.querySelectorAll(".eductour-card .btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();

        const card = btn.closest(".eductour-card");
        document.getElementById("modalImage").src = card.querySelector("img").src;
        document.getElementById("modalTitle").innerText = card.querySelector("h3").innerText;
        document.getElementById("modalText").innerText = card.querySelector("p").innerText;

        cardModal.style.display = "flex";
      });
    });

    document.querySelector(".close-card-modal")?.addEventListener("click", () => {
      cardModal.style.display = "none";
    });
  }

});

// ================= SWIPER (ONLY IF EXISTS) =================
var swiper = new Swiper(".project-slider", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 1,
  grabCursor: true,
  loop: true,

  // ⭐ IMPORTANT FIX
  preventClicks: false,
  preventClicksPropagation: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  }
});
// ================= MOBILE NAV =================
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
}

// ================= VISUAL GALLERY MODAL =================
const vgModal = document.getElementById("vg-modal");
const vgModalImg = document.querySelector(".vg-modal-img");
const vgClose = document.querySelector(".vg-close");

if (vgModal && vgModalImg) {
  document.querySelectorAll(".vg-card img").forEach(img => {
    img.addEventListener("click", () => {
      vgModal.style.display = "flex";
      vgModalImg.src = img.src;
    });
  });
}

vgClose?.addEventListener("click", () => {
  vgModal.style.display = "none";
});

// ================= CERTIFICATE MODAL =================
const certModal = document.getElementById("cert-modal");
const certModalImg = document.querySelector(".cert-modal-img");
const certClose = document.querySelector(".cert-close");

if (certModal && certModalImg) {
  document.querySelectorAll(".cert-card img").forEach(img => {
    img.addEventListener("click", () => {
      certModal.style.display = "flex";
      certModalImg.src = img.src;
    });
  });
}

certClose?.addEventListener("click", () => {
  certModal.style.display = "none";
});


// Animate skills on scroll
const skillSection = document.querySelector(".skills");

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {

    // LEFT: Progress bars
    document.querySelectorAll(".progress").forEach(bar => {
      const percent = bar.dataset.percent;
      bar.style.width = percent + "%";

      // sync text
      const text = bar.parentElement.querySelector(".percent");
      if (text) text.textContent = percent + "%";
    });

    // RIGHT: Circle skills
    document.querySelectorAll(".circle-skill").forEach(skill => {
      const percent = skill.dataset.percent;
      const circle = skill.querySelector(".fg");
      const text = skill.querySelector("span");

      const radius = 65;
      const circumference = 2 * Math.PI * radius;

      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset =
        circumference - (percent / 100) * circumference;

      // sync text
      if (text) text.textContent = percent + "%";
    });

    observer.disconnect();
  }
}, { threshold: 0.4 });

observer.observe(skillSection);
