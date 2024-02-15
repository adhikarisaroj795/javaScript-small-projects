const endDate = "16 feburary 2024 12:00 AM";

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; // differenc on seconds
  console.log(diff);
  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24); //convrting to days
  inputs[1].value = Math.floor(diff / 3600) % 24; //converting to hours
  inputs[2].value = Math.floor(diff / 60) % 60; //converrting into minutes
  inputs[3].value = Math.floor(diff) % 60;
};

clock();

/*
 * 1 day = 24 hrs;
 * 1 hrs = 60 min;
 * 60 min = 3600 sec;
 */
setInterval(() => {
  clock();
}, 1000);
