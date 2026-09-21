// Translations
// translation.js

const translations = {
  de: {
    // Home Section
    jobTitle: "CS Student | ROS2-entwickler",
    homeDesc: `Lernen!`,

    // Navigation
    about: "<span></span> ÜBER MICH",
    projects: "<span></span> PROJEKTE",
    contact: "<span></span> KONTAKT",

    // About Section
    aboutP1: ` Maple ist ein leidenschaftlicher Technik-Enthusiast und
          <b class="tak">Informatikstudent</b> an der
          <b class="tak">University of Nigeria, Nsukka (UNN)</b>, mit einem
          starken Drang, Software-Ingenieur für Robotik zu werden, mit einem
          Fokus auf die Schnittstelle zwischen Hardware und intelligenten
          Systemen. Wenn sie nicht gerade studieren, erkunden sie eingebettete
          Systeme, Regelungstechnik und Simulationsumgebungen und verfeinern
          weiterhin ihre Fähigkeiten in <b>C++</b> und <b>Python</b>, den
          beiden zentralen Sprachen der modernen Robotik-Entwicklung.`,

    aboutP2: `Ihr Stack stützt sich stark auf <b>C++</b> und <b>Python</b>, in
          Kombination mit Werkzeugen wie <b class="tak">ROS 2</b>,
          <b class="tak">Linux</b> und Versionskontrolle über GitHub, um
          Robotik-Software zu entwickeln und zu testen. Als
          <b class="tak">UNN-Informatikstudent</b> lernen sie ständig, wie man
          zuverlässigen, effizienten und gut strukturierten Code für reale
          Robotersysteme entwirft. In ihrer Freizeit haben sie es sich zur
          Aufgabe gemacht, Grundlagen der Mikroprozessortechnik und
          Elektromagnetismus zu studieren, um ein solides Fundament für
          zukünftige Arbeit an eingebetteten Systemen zu legen.`,

    aboutP3: `Sie vertiefen ihr Verständnis von Regelungssystemen, robotischer
          <b class="tak">Kinematik</b> und sogar Konzepten der Simulation und
          Modellierung, um ihre Fähigkeiten über die reine Software hinaus zu
          erweitern. <b class="tak">Ihr</b> aktueller Workflow umfasst
          Werkzeuge wie <b>Visual Studio Code</b> und andere
          Entwicklungsumgebungen, die für <b>C++</b> und <b>Python</b>
          geeignet sind, und als aufstrebendes
          <b class="tak">UNN-Technik-Talent</b> verfeinern sie kontinuierlich
          ihre Fähigkeiten in den Grundlagen der Robotik, um
          <b class="tak">globalen</b>
          Standards zu entsprechen—insbesondere in Vorbereitung auf
          internationale Möglichkeiten im fortgeschrittenen Ingenieurwesen,
          einschließlich innerhalb
          <b class="tak">Deutschlands</b> Robotik- und Ingenieurwesen-Ökosystem.`,

    aboutP4: `Ob beim Schreiben von <b class="tak">hardwarenahem eingebettetem
          Code</b>, beim Erkunden von Regelungssystemen oder beim Aufbau
          echter Robotikprojekte von Grund auf—sie bringen sowohl
          <b class="tak">Leidenschaft</b>
          als auch Disziplin in alles ein, was sie tun. Ihr Weg—geprägt durch
          ihre Erfahrungen als
          <b class="tak">Informatikstudent an der UNN</b> und angehende
          Software-Ingenieurin für Robotik—wird von mehr angetrieben als nur
          der <b class="tak">Liebe</b> zum Code; es geht darum, eine Zukunft
          aufzubauen, in der sie intelligente Maschinen entwerfen,
          entwickeln und dazu beitragen können, weltweit etwas zu bewirken
          <b class="tak">globally</b>.`,

    // Projects Section
    pythonTitle: "Lernen! <span>&#8599;</span>",
    pythonDesc: `Ich lerne Python zusammen mit Frameworks wie <b class="tak">Django</b> und <b class="tak">Flask</b> zur Unterstützung der Webentwicklung.`,
    repoView: "Alle Repositories ansehen...",

    cssIntroTitle: "CSS-Intro <span>&#8599;</span>",
    cssDesc: `Ein deutsch inspiriertes Projekt, basierend auf einem YouTube-Tutorial von <a href="https://youtube.com/@traversymedia?si=rlugzAA0gD6-DKwj" rel="noopener noreferrer" target="_blank">Brad Traversy</a>. Es behandelt HTML5-Syntax, VSCode-Setup, das CSS-Boxmodell und mehr.`,

    snowAnimationTitle: "Schneeanimation & Countdown <span>&#8599;</span>",
    snowDesc: `Eine einfache Website zur Visualisierung von Javascript, wie es verwendet wurde, um einen Effekt auf einer Webseite zu gestalten und einen <b class="snowButton">Schneefall-Effekt;</b> zu erzeugen. Es ist ein Neujahrs-Countdown mit Javascript-Animation. Der Schneefall stand im Fokus und das Projekt ist anfängerfreundlich.`,

    observerTitle: "Observer & Zähler <span>&#8599;</span>",
    observerDesc: `Observer- API mit JavaScript, die ein Zähleffekt beim Scrollen aktiviert.Verwendet in einem <a href="https://phlox-demo-en.netlify.app/" rel="noopener noreferrer" target="_blank">meiner</a> <a href="https://phlox.pro" rel="noopener noreferrer" target="_blank">Phlox-</a>inspirierten Projekte.`,

    // Contact Section
    contactWa: `verfügbar für Website-bezongene projekte, Fragen oder Interessen; nur ein <b class="tak">dm</b> entfernt`,
    contactSlack: `Ich bin verfügbar, um zu Open-Source-frontend-Designs <b class="tak">beizutragen</b>. Ich mochte an aufregenden Webprojekten <b class="tak">zusammenarbeiten</b>.`,

    // Footer
    bChiang: `Website von  <a href="https://brittanychiang.com/" rel="noopener noreferrer" target="_blank">Brittany Chiang</a> inspiriert`,
    techStack: "Diese Website wurde mit HTML, CSS und JavaScript erstellt.",
    footer: "Alle Rechte vorbehalten",
  },
};

const switcher = document.getElementById("language-switcher");

// All your elements stay the same here...
const elements = {
  jobTitle: document.querySelector(".info-text h3"),
  homeDesc: document.querySelector(".info-text p"),
  aboutNav: document.querySelector('a[href="#aboutPage"]'),
  projectsNav: document.querySelector('a[href="#projectsPage"]'),
  contactNav: document.querySelector('a[href="#contactPage"]'),
  aboutP1: document.querySelector(".about .aboutP1"),
  aboutP2: document.querySelector(".about .aboutP2"),
  aboutP3: document.querySelector(".about .aboutP3"),
  aboutP4: document.querySelector(".about .aboutP4"),

  pythonTitle: document.querySelector(".projects .pro-card .pythonTitle"),
  pythonDesc: document.querySelector(".projects .pro-card .pythonDesc"),
  cssIntroTitle: document.querySelector(".projects .pro-card .cssIntroTitle"),
  cssDesc: document.querySelector(".projects .pro-card .cssDesc"),
  snowAnimationTitle: document.querySelector(
    ".projects .pro-card .snowAnimationTitle",
  ),
  snowDesc: document.querySelector(".projects .pro-card .snowDesc"),
  observerTitle: document.querySelector(".projects .pro-card .observerTitle"),
  observerDesc: document.querySelector(".projects .pro-card .observerDesc"),
  repoView: document.querySelector(".projects > p > a"),
  contactWa: document.querySelector(".contact .contactWa"),
  contactSlack: document.querySelector(".contact .contactSlack"),

  bChiang: document.querySelector("footer .bChiang"),
  techStack: document.querySelector("footer .techStack"),
  footer: document.querySelector("footer .footer"),
};

// 👇 Function to apply translations
function applyTranslations(lang) {
  const t = translations[lang];

  if (!t) return;

  elements.aboutNav.innerHTML = t.about;
  elements.projectsNav.innerHTML = t.projects;
  elements.contactNav.innerHTML = t.contact;
  elements.jobTitle.innerHTML = t.jobTitle;
  elements.homeDesc.innerHTML = t.homeDesc;

  elements.aboutP1.innerHTML = t.aboutP1;
  elements.aboutP2.innerHTML = t.aboutP2;
  elements.aboutP3.innerHTML = t.aboutP3;
  elements.aboutP4.innerHTML = t.aboutP4;

  elements.pythonTitle.innerHTML = t.pythonTitle;
  elements.pythonDesc.innerHTML = t.pythonDesc;
  elements.cssIntroTitle.innerHTML = t.cssIntroTitle;
  elements.cssDesc.innerHTML = t.cssDesc;
  elements.snowAnimationTitle.innerHTML = t.snowAnimationTitle;
  elements.snowDesc.innerHTML = t.snowDesc;
  elements.observerTitle.innerHTML = t.observerTitle;
  elements.observerDesc.innerHTML = t.observerDesc;
  elements.repoView.innerHTML = t.repoView;

  elements.contactWa.innerHTML = t.contactWa;
  elements.contactSlack.innerHTML = t.contactSlack;
  elements.bChiang.innerHTML = t.bChiang;
  elements.techStack.innerHTML = t.techStack;
  elements.footer.innerHTML = t.footer;
}

// ✅ On language select
switcher.addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("selectedLang", lang);

  if (lang === "de") {
    applyTranslations("de");
  } else {
    localStorage.removeItem("selectedLang");
    location.reload();
  }
});

// ✅ On page load
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang");

  if (savedLang === "de") {
    switcher.value = "de";
    applyTranslations("de");
  }
});
