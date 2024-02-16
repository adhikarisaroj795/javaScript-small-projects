const button = document.querySelector("button");

// button.onclick = function () {};

const buttonClickHandler = (event) => {
  //   event.target.disabled = true;
  console.log(event);
};

// const anotherButtonHandler = () => {
//   console.log("this was clicked");

const boundFn = buttonClickHandler.bind(this);
// };

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonHandler;

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// buttons.forEach((btn) => {
//   btn.addEventListener("click", buttonClickHandler);
// });

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  console.log("clicked div");
  console.log("event");
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log("clicked button");
  console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

list.addEventListener("click", (event) => {
  //     console.log(event.currentTarget);
  //   event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
  //   form.submit();
  button.click();
});
