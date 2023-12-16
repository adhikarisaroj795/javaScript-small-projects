const api_Url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
async function getQuots(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    
}
getQuots(api_Url);