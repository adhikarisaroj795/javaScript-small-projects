document.addEventListener("DOMContentLoaded", function () {
  const btnYes = document.querySelector(".btnYes");
  const btnNo = document.querySelector(".btnNo");
  const text = document.getElementById("text");
  const container = document.querySelector(".container");

  btnNo.addEventListener("mouseover", () => {
    const randomLeft = Math.random() * (window.innerWidth - 50); // Random left position
    const randomTop = Math.random() * (window.innerHeight - 50); // Random top position
    btnNo.style.left = `${randomLeft}px`;
    btnNo.style.top = `${randomTop}px`;
  });

  let isFirstTimeClicked = true;

  const yesHandler = () => {
    text.innerHTML = `Do you <br> love me ??`;
    resetButtonPosition();
    isFirstTimeClicked = false;
  };
  const yes2Handler = () => {
    text.innerHTML = `I love you more ❤️❤️`;
    hideButtons();
  };

  function resetButtonPosition() {
    btnNo.style.left = ""; // Clear the left style
    btnNo.style.top = ""; // Clear the top style
  }
  function hideButtons() {
    btnYes.style.display = "none";
    btnNo.style.display = "none";
  }

  btnYes.addEventListener("click", function () {
    if (isFirstTimeClicked) {
      yesHandler();
    } else {
      yes2Handler();
    }
  });
});
