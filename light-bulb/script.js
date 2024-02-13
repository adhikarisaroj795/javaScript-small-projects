const bulb = document.getElementById("bulb");
const btn = document.querySelector("button");

const glow = () => {
  btn.addEventListener("click", () => {
    const bodyBackgroundColor = document.body.style.backgroundColor;
    const bulbBackground = document.body.style.backgroundColor;
    if (bodyBackgroundColor === "white") {
      bulb.style.backgroundColor = "gray";

      document.body.style.backgroundColor = "rgb(51, 51, 51)"; // Change to your desired color
    } else {
      document.body.style.backgroundColor = "white";
      bulb.style.backgroundColor = "yellow";
    }
  });
};

glow();
