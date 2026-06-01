
async function fetchNews() {
    const API_KEY = '608ab60b73d5407fbe54009ccec610cc'; 
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

try{
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === 'ok') {
        localStorage.setItem('allArticles',JSON.stringify(data.articles));

        renderNews(data.articles);
        renderSidebarNews(data.articles);

    }
    else{
        console.error('API xetasi', data.message);
    }
   
}
 catch(error){
         console.error('Fetch xətası:', error);

    }
}

function renderNews(articles) {
    const container = document.querySelector('.card');
    container.innerHTML = '';
    const displayedArticles = articles.slice(0,4);
    displayedArticles.forEach((article,index)=>{
createCard(article, index, container);
    });
}


function createCard(article, index, container) {
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.innerHTML = `
    <img src="${article.urlToImage || 'default.jpg'}" alt="News Image">
    <div class="card_text">
    <h1>${article.title}</h1>
    <p>${article.description || ''}</p>
    </div>
    <button onclick="goToDetails(${index})">Daha cox</button>
    `;
    container.appendChild(cardBody);
}

document.addEventListener('DOMContentLoaded',()=>{
    fetchNews();
    const viewMoreBtn = document.querySelector('.btn button');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click',() =>{
            const container = document.querySelector('.card');
            const allArticles = JSON.parse(localStorage.getItem('allArticles'));

            allArticles.slice(4).forEach((article, index)=>{
                createCard(article, index + 4, container);
            });
            document.querySelector('.btn').style.display = 'none'

        });
    }
});

function goToDetails(index) {
    const allArticles = JSON.parse(localStorage.getItem('allArticles'));
    const selectedArticle = allArticles[index];
    localStorage.setItem('selectedArticle', JSON.stringify(selectedArticle));
    window.location.href = 'index4.html';
}

function renderSidebarNews(articles) {
    const liveImg =document.getElementById('live-img');
    const liveTitle = document.getElementById('live-title');
    if(articles.length > 0 && liveImg && liveTitle){
        liveImg.src = articles[0].urlToImage || 'assets/img/default.jpg';
        liveTitle.innerText = articles[0].title;

    }
}







// try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.status === 'ok') {
//             localStorage.setItem('allArticles', JSON.stringify(data.articles));
            
        
//             renderNews(data.articles);

//             renderSidebarNews(data.articles); 
            
//         } else {
//             console.error('API xətası:', data.message);
//         }
//     } catch (error) {
//         console.error('Fetch xətası:', error);
//     }
// }
// function renderNews(articles) {
    
//     const container = document.querySelector('.card');
//     container.innerHTML = ''; 

//     const displayedArticles = articles.slice(0, 4); 

//     displayedArticles.forEach((article, index) => {
//         createCard(article, index, container);
//     });
// }
// function createCard(article, index, container) {
//     const cardBody = document.createElement('div');
//     cardBody.className = 'card-body';
    
//     cardBody.innerHTML = `
//         <img src="${article.urlToImage || 'default.jpg'}" alt="News Image">
//         <div class="card_text">
//             <h1>${article.title}</h1>
//             <p>${article.description || ''}</p>
//         </div>
//         <button onclick="goToDetails(${index})">Daha çox oxu</button>
//     `;
//     container.appendChild(cardBody);
// }
// document.addEventListener('DOMContentLoaded', () => {
//     fetchNews();

//     const viewMoreBtn = document.querySelector('.btn button');
//     if (viewMoreBtn) {
//         viewMoreBtn.addEventListener('click', () => {
//             const container = document.querySelector('.card');
//             const allArticles = JSON.parse(localStorage.getItem('allArticles'));
            
           
//             allArticles.slice(4).forEach((article, index) => {
//                 createCard(article, index + 4, container);
//             });
            
            
//             document.querySelector('.btn').style.display = 'none';
//         });
//     }
// });


// function goToDetails(index) {
//     const allArticles = JSON.parse(localStorage.getItem('allArticles'));
//     const selectedArticle = allArticles[index];
//     localStorage.setItem('selectedArticle', JSON.stringify(selectedArticle));
//     window.location.href = 'index4.html';
// }


// function renderSidebarNews(articles) {
//     const liveImg = document.getElementById('live-img');
//     const liveTitle = document.getElementById('live-title');

//     if (articles.length > 0 && liveImg && liveTitle) {
//         liveImg.src = articles[0].urlToImage || 'assets/img/default.jpg';
//         liveTitle.innerText = articles[0].title;
//     }
// }