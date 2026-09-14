const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");

const header =
  document.getElementById("mainHeader");


/* MOBILE MENU */

menuToggle.addEventListener("click", function () {

  navLinks.classList.toggle("active");

});


document
  .querySelectorAll(".nav-links a")
  .forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.classList.remove("active");

    });

  });



/* TYPING ANIMATION */

const typingText =
  document.getElementById("typingText");


const roles = [

  "Aspiring Data Scientist",

  "Web Developer",

  "Flutter Developer",

  "BCA Student"

];


let roleIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typeText() {

  const currentRole =
    roles[roleIndex];


  if (!isDeleting) {

    typingText.textContent =
      currentRole.substring(
        0,
        characterIndex + 1
      );


    characterIndex++;


    if (
      characterIndex ===
      currentRole.length
    ) {

      isDeleting = true;

      setTimeout(
        typeText,
        1300
      );

      return;

    }

  } else {

    typingText.textContent =
      currentRole.substring(
        0,
        characterIndex - 1
      );


    characterIndex--;


    if (characterIndex === 0) {

      isDeleting = false;

      roleIndex++;


      if (
        roleIndex ===
        roles.length
      ) {

        roleIndex = 0;

      }

    }

  }


  const typingSpeed =
    isDeleting
      ? 50
      : 90;


  setTimeout(
    typeText,
    typingSpeed
  );

}


typeText();



/* SCROLL REVEAL */

const revealElements =
  document.querySelectorAll(".reveal");


function revealSections() {

  revealElements.forEach(function (element) {

    const windowHeight =
      window.innerHeight;


    const elementTop =
      element
        .getBoundingClientRect()
        .top;


    const revealPoint =
      100;


    if (
      elementTop <
      windowHeight - revealPoint
    ) {

      element.classList.add(
        "active"
      );

    }

  });

}


window.addEventListener(
  "scroll",
  revealSections
);


revealSections();



/* NAVBAR GLASS EFFECT */

function navbarScrollEffect() {

  if (window.scrollY > 50) {

    header.classList.add(
      "scrolled"
    );

  } else {

    header.classList.remove(
      "scrolled"
    );

  }

}


window.addEventListener(
  "scroll",
  navbarScrollEffect
);


navbarScrollEffect();



/* ACTIVE NAVIGATION */

const sections =
  document.querySelectorAll("section[id]");

const navItems =
  document.querySelectorAll(".nav-link");


function updateActiveNav() {

  let currentSection =
    "hero";


  sections.forEach(function (section) {

    const sectionTop =
      section.offsetTop - 150;


    const sectionHeight =
      section.offsetHeight;


    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
      sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navItems.forEach(function (link) {

    link.classList.remove(
      "active"
    );


    if (
      link.getAttribute("href") ===
      "#" + currentSection
    ) {

      link.classList.add(
        "active"
      );

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNav
);


updateActiveNav();