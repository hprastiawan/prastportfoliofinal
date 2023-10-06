import Typed from "./typed.js";

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let targetLink = document.querySelector(
          "header nav a[href*=" + id + "]"
        );
        if (targetLink) {
          targetLink.classList.add("active");
        }
      });
    }
  });
};
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // jumlah item yang ingin ditampilkan
    loop: true, // biarkan carousel melooping
    autoplay: true, // aktifkan autoplay
    autoplayTimeout: 5000, // menambahkan lebih banyak waktu
    smartSpeed: 1000,
    autoplayHoverPause: true, // pause pada hover
    nav: true, // menambahkan navigasi
  });
});

/*==================== sticky navbar ====================*/
let header = document.querySelector("header");
{
  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}

/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "YouTuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});

function toggleContent(elementId) {
  var content = document.getElementById(elementId);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#techlearning-header")
    .addEventListener("click", function () {
      toggleContent("techlearning-content");
    });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#otto-header").addEventListener("click", function () {
    toggleContent("otto-content");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#atic-header").addEventListener("click", function () {
    toggleContent("atic-content");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#dwidasa-header")
    .addEventListener("click", function () {
      toggleContent("dwidasa-content");
    });
});
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#mercu-header")
    .addEventListener("click", function () {
      toggleContent("mercu-content");
    });
});
