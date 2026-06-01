
document.addEventListener('DOMContentLoaded',()=>{

const selectedArticle = JSON.parse(localStorage.getItem('selectedArticle'));
const contentDiv = document.querySelector('.text_content');

if (contentDiv) {
    const text = selectedArticle.content || selectedArticle.description || 'Xeberin etrafli mezmunu movcud deyil.';
    contentDiv.innerHTML =`<p>${text}</p>`;
}

if (selectedArticle) {
    const headerTitle = document.querySelector('.detay_header h1');

    if (headerTitle) headerTitle.innerText = selectedArticle.title;

    const maninImage = document.querySelector('.detayUI img');
    if(maninImage) maninImage.src = selectedArticle.urlToImage || '/assets/img/default.jpg';

       const contentDiv = document.querySelector('.text_content') ;

       if (contentDiv) {
        contentDiv.innerHTML =`<p>${selectedArticle.content || selectedArticle.description || 'Melumat yoxdur'}</p>`
       }
    const dateSpan = document.querySelector('.text span');
    if(dateSpan) dateSpan.innerText = new Date(selectedArticle.publishedAt).toLocaleDateString();
}
});



