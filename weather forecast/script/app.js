const apiKey = "b0904fa397c2fb7030f60677b8314f57";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkweather(city){
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');
if(response.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "non"
}else{
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "imags/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "imags/rain.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "imags/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "imags/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "imags/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}

    



    
}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})
