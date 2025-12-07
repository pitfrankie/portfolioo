var typed=new Typed(".text", {

    strings:["Student","Gamer","planner"],
    typeSpeed:100,
    backSpeed:100,
    backdelay:1000,
    loop:true
});
// FULLSCREEN IMAGE VIEWER
document.addEventListener("DOMContentLoaded", function () {

    // IMAGE MODAL (existing)
    document.querySelectorAll('.eductour-card img').forEach(img => {
        img.addEventListener('click', function () {
            document.getElementById('imgModal').style.display = "block";
            document.getElementById('fullImage').src = this.src;
        });
    });

    document.querySelector('.close-modal').addEventListener('click', function () {
        document.getElementById('imgModal').style.display = "none";
    });



    // FULL CARD MODAL (NEW)
    document.querySelectorAll('.eductour-card .btn').forEach((btn, index) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            const card = this.closest('.eductour-card');

            // Get card content
            const imgSrc = card.querySelector("img").src;
            const title = card.querySelector("h3").innerText;
            const text = card.querySelector("p").innerText;

            // Set modal content
            document.getElementById("modalImage").src = imgSrc;
            document.getElementById("modalTitle").innerText = title;
            document.getElementById("modalText").innerText = text;

            // Show modal
            document.getElementById("cardModal").style.display = "flex";
        });
    });

    // Close Full Card Modal
    document.querySelector('.close-card-modal').addEventListener('click', function () {
        document.getElementById("cardModal").style.display = "none";
    });

});
var swiper = new Swiper(".project-slider", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 1,           // ⭐ IMPORTANT — slide one at a time
  grabCursor: true,
  loop: true,
  centeredSlides: false,

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
      slidesPerGroup: 1,      // ⭐ Important for mobile
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
      slidesPerGroup: 1,
    },
  }
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById("imgModal").style.display = "block";
        document.getElementById("fullImage").src = this.src;
    });
});

const modal = document.getElementById("vg-modal");
const modalImg = document.querySelector(".vg-modal-img");
const closeBtn = document.querySelector(".vg-close");

document.querySelectorAll(".vg-card img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});



// CERTIFICATE MODAL
const certModal = document.getElementById("cert-modal");
const certModalImg = document.querySelector(".cert-modal-img");
const certClose = document.querySelector(".cert-close");

document.querySelectorAll(".cert-card img").forEach(img => {
    img.addEventListener("click", () => {
        certModal.style.display = "flex";
        certModalImg.src = img.src;
    });
});

certClose.addEventListener("click", () => {
    certModal.style.display = "none";
});


