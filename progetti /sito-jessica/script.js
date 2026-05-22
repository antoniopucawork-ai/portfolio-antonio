// ====================s========================================
// SCRIPT.JS — VERSIONE PULITA E CORRETTA
// ============================================================

// ============================================================
// MENU HAMBURGER MOBILE
// ============================================================

const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector("nav ul");

if (hamburger && navUl) {
  hamburger.addEventListener("click", function () {
    navUl.classList.toggle("aperto");
  });

  // Chiude il menu quando clicchi un link
  const navLinks = navUl.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navUl.classList.remove("aperto");
    });
  });
}

// ============================================================
// LINK ATTIVO NELLA NAVBAR
// ============================================================

const paginaCorrente = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(function (link) {
  const hrefLink = link.getAttribute("href");

  if (hrefLink === paginaCorrente) {
    link.classList.add("attivo");
  }
});

// ============================================================
// FADE IN ALLO SCROLL
// ============================================================

const elementiFade = document.querySelectorAll(".fade-in");

const osservatoreFade = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visibile");

        // Animazione una sola volta
        osservatoreFade.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);
elementiFade.forEach(function (elemento, index) {
  elemento.style.transitionDelay = `${index * 120}ms`;

  osservatoreFade.observe(elemento);
});
// ============================================================
// SCROLL CINEMATICO
// ============================================================

const sezioniScroll = document.querySelectorAll(".scroll-section");

if (sezioniScroll.length > 0) {
  const cinematicObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sezioniScroll.forEach(function (sezione) {
            sezione.classList.add("inactive");
            sezione.classList.remove("active");
          });

          entry.target.classList.remove("inactive");
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.35,
    }
  );

  sezioniScroll.forEach(function (sezione) {
    sezione.classList.add("inactive");

    cinematicObserver.observe(sezione);
  });
}