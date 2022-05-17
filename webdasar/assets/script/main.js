const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navLink = document.querySelectorAll(".navigation a");
const about = document.getElementById("about");
const toAbout = document.querySelector(".toAbout");
const projects = document.getElementById("project");
const toProject = document.querySelector(".toProject");
const contact = document.getElementById("contact");
const toContact = document.querySelector(".toContact");

function toggle(e) {
  e.preventDefault();
  navigation.classList.toggle("active");
  hamburger.classList.toggle("inactive");
  close.classList.toggle("active");
}

function reset() {
  navigation.classList.remove("active");
  hamburger.classList.remove("inactive");
  close.classList.remove("active");
}

toAbout.addEventListener("click", () => {
  about.scrollIntoView(true);
  document.documentElement.scrollBy(0, -100);
});

toProject.addEventListener("click", () => {
  projects.scrollIntoView(true);
  document.documentElement.scrollBy(0, -100);
});

toContact.addEventListener("click", () => {
  contact.scrollIntoView(true);
  document.documentElement.scrollBy(0, 100);
});

hamburger.addEventListener("click", (e) => {
  toggle(e);
});

close.addEventListener("click", (e) => {
  toggle(e);
});

navLink.forEach((nav) =>
  nav.addEventListener("click", () => {
    navigation.classList.remove("active");
    hamburger.classList.remove("inactive");
    close.classList.remove("active");
  })
);

window.addEventListener("resize", () => {
  reset();
});

window.addEventListener("scroll", () => {
  reset();
});

const project = [
  {
    img: "project1.png",
    title: "Tenzies Game",
    tech: ["VITE", "REACT", "TAILWIND"],
    url: "https://tenzies-game-al.netlify.app/",
  },
  {
    img: "project2.png",
    title: "Meme Generator",
    tech: ["REACT", "TAILWIND", "3rd API"],
    url: "https://ari-meme-generator.netlify.app/",
  },
  {
    img: "project3.png",
    title: "Digital Business Card",
    tech: ["REACT", "TAILWIND"],
    url: "https://ari-digital-business-card.netlify.app/",
  },
  {
    img: "project4.png",
    title: "Weather App",
    tech: ["NODEJS", "3rd API"],
    url: "https://ari-weather-apps.herokuapp.com/",
  },
];

const sliderImg = document.querySelector(".slider img.main");
const caption = document.querySelector(".caption");
const next = document.querySelector(".next-arrow");
const prev = document.querySelector(".prev-arrow");
let current = 0;

next.addEventListener("click", () => {
  current++;

  if (current >= project.length) {
    current = 0;
  }

  setProject(current);
});

prev.addEventListener("click", () => {
  current--;

  if (current < 0) {
    current = project.length - 1;
  }

  setProject(current);
});

function setProject(current) {
  sliderImg.setAttribute("src", `./assets/images/${project[current].img}`);

  caption.innerHTML = `
    <p>${project[current].title}</p>
    <div class="tech-stack">
      ${project[current].tech.map((x) => `<span>${x}</span>`).join("")}
    </div>
    <a href="${project[current].url}" target="_blank">live demo</a>
  `;
}

window.addEventListener("load", (element) => {
  window.scrollY;
});
