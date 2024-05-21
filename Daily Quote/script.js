const api_url = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    //console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}

getquote(api_url);