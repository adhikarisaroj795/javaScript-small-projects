const scriptURL =
  "https://script.google.com/macros/s/AKfycbz7NlGzIhIf7-0yleIEJuug1ZnZvLlIefcBQZ989wutdRfiWigZdS09XM8idTjpAWvl0Q/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you for Subscribing";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
