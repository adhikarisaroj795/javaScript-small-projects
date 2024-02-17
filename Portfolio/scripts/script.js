const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
});
cancelBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
});

window.addEventListener("scroll", () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
});

const aboutbtn = document.getElementById("aboutBtn");
const projectBtn = document.getElementById("projectBtn");
const contacBtn = document.getElementById("contact-menu");
const skillBtn = document.getElementById("skillBtn");

moveToHome = (event) => {
  event.preventDefault();
  const offset = 10;
  const aboutMeHeading = document.getElementById("about-me");
  const navbarHeight = navbar.offsetHeight; // Get the height of the navbar
  const targetPosition = aboutMeHeading.offsetTop - navbarHeight - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
};

const moveToContactMe = (event) => {
  event.preventDefault();
  const contactHeading = document.getElementById("contact");
  const navbarHeight = navbar.offsetHeight;
  const offset = 10;
  const targetPosition = contactHeading.offsetTop - navbarHeight - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
};

const moveToSkill = (event) => {
  event.preventDefault();
  const skillHeading = document.getElementById("my-skill");
  const navbarHeight = navbar.offsetHeight;
  const offset = 10;
  const targetPosition = skillHeading.offsetTop - navbarHeight - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
};

const moveToProjects = (event) => {
  event.preventDefault();
  const projectHeading = document.getElementById("my-project");
  const navbarHeight = navbar.offsetHeight;
  const offset = 10;
  const targetPosition = projectHeading.offsetTop - navbarHeight - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
};

aboutbtn.addEventListener("click", moveToHome);
contacBtn.addEventListener("click", moveToContactMe);
skillBtn.addEventListener("click", moveToSkill);
projectBtn.addEventListener("click", moveToProjects);

const instaBtn = document.getElementById("insta-btn");
const fbBtn = document.getElementById("fb-btn");
const linkDen = document.getElementById("linkden-btn");
const gitHub = document.getElementById("git-btn");
const callMe = document.getElementById("call-me");
const emailMe = document.getElementById("email-me");

instaBtn.addEventListener("click", () => {
  const newUrl = "https://www.instagram.com/adk_saroz/";

  window.location.href = newUrl;
});

fbBtn.addEventListener("click", () => {
  const newUrl = "https://www.facebook.com/beingsaroj.adk/";

  window.location.href = newUrl;
});
linkDen.addEventListener("click", () => {
  const newUrl = "https://www.linkedin.com/in/saroj-adhikari-ba123b207/";

  window.location.href = newUrl;
});
gitHub.addEventListener("click", () => {
  const newUrl = "https://github.com/adhikarisaroj795";

  window.location.href = newUrl;
});

callMe.addEventListener("click", () => {
  const phoneNumber = "9825893356";

  const telUrl = `tel:${phoneNumber}`;

  window.location.href = telUrl;
});
emailMe.addEventListener("click", () => {
  const emailAddress = "adhikarisaroj291@gmail.com";

  const mailtoUrl = `mailto:${emailAddress}`;

  window.location.href = mailtoUrl;
});
