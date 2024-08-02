let category = 'entertainment';
let apiKey = '5e0ad9b059f3425c95498b0ee586d5dd';

//grab the news
let newsAccordion = document.getElementById('newsAccordion');

//creating an AJAX get request
const xhttp = new XMLHttpRequest();
xhttp.open('GET', `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`, true);

xhttp.onload = function () {
    if(this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;   
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            let news = `<div class="media position-relative bg-light mb-4 py-4 px-4">
                    <img src="${element['urlToImage']}"
                        class="w-25 p-2" alt="..."> 
                    <div class="media-body">
                        <h5 class="mt-2">${element['title']}</h5>
                        <p>${element['description']}</p>
                        <a href="${element['url']}" class="badge badge-success py-2 px-2">Read more</a>
                    </div>
                </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } 
    else {
        console.log('Some error occured');
    }
    
}
xhttp.send();

