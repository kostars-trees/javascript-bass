const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
   // console.log(e.target.dataset.id);
   const id = e.target.dataset.id;
   if (id) {
       //remove class of active//
       btns.forEach(function (btn) {
btn.classList.remove("active");
e.target.classList.add("active");
       });
       //hide other articles//
       articles.forEach(function(article){
           article.classList.remove("active")
       })
       const elements = document.getElementById(id);
       elements.classList.add("active");
   }
});