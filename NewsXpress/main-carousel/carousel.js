let category = 'sports';
let source = 'bbc-news';
let apiKey = '5e0ad9b059f3425c95498b0ee586d5dd';

//grab the news
let newsCarousel = document.getElementById('newsCar');

//creating an AJAX get request
const xhttp = new XMLHttpRequest();
xhttp.open('GET', `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`, true);

xhttp.onload = function () {
    if(this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;   
        console.log(articles);
        let newsHTML = "";
        articles.forEach(function(element) {
            let news = `<div class="container">
            <img src="${element['urlToImage']}"
                alt="" class="">
            <h2 style="font-weight: bold;" class="my-4">${element['title']}</h2>
            <p>${element['description']}</p>
        </div>`;
            newsHTML += news;
        });
        newsCarousel.innerHTML = newsHTML;
    } 
    else {
        console.log('Some error occured');
    }
    
}
xhttp.send();

