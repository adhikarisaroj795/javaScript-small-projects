const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click',() =>
{
    hamburger.classList.toggle('activate');
    navMenu.classList.toggle('activate');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click',() => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

var icon = document.getElementById("micon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png";
    }else{
        icon.src = "img/moon.png";
    }
}