const hamBar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (hamBar) {
  hamBar.addEventListener("click", () => {
    nav.classList.add("active");
  });
  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
}
