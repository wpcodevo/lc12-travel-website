// Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Discount Media
const video = document.querySelector(".video");
const button = document.querySelector(".video-control");

button.addEventListener("click", playpausevideo);

function playpausevideo() {
  if (video.paused) {
    button.innerHTML = "<i class='bx bx-pause' ></i>";
    video.play();
  } else {
    button.innerHTML = "<i class='bx bx-play' ></i>";
    video.pause();
  }
}

// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

// Fix Nav
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 200) {
    navigation.classList.add("fix");
    header.style.zIndex = "1000";
  } else {
    navigation.classList.remove("fix");
  }
});

// Scroll
const links = document.querySelectorAll(".nav-link");

Array.from(links).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navigation.getBoundingClientRect().height;
    const fix = navigation.classList.contains("fix");
    let position = element.offsetTop - navHeight;

    // if (!fix) {
    //   position = position - navHeight;
    // }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navList.classList.remove("open");
  });
});

// Scroll Reveal

const scroll = ScrollReveal({
  distance: "100px",
  duration: 2500,
  reset: true,
});

scroll.reveal(`.content h1, .content .btn`, {
  origin: "top",
  interval: 100,
});

scroll.reveal(`.about .col h1, .about .col p, .about .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.about .col:last-child,.contact .location,.more .col:last-child,.newsletter .form`,
  {
    origin: "right",
  }
);

scroll.reveal(`.service img,.contact .title`, {
  origin: "top",
});

scroll.reveal(`.service .col,.trip .row`, {
  origin: "bottom",
});

scroll.reveal(`.trip .title,.more .col:first-child,.newsletter .col`, {
  origin: "left",
});
