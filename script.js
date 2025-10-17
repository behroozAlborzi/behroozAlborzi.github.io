// your code goes here
// Default language: English. A simple toggle switches between English and Persian paragraphs/headings.
(function(){
const toggle = document.getElementById('langToggle');
const enEls = document.querySelectorAll('[data-en]');
const faEls = document.querySelectorAll('[data-fa]');
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();


let lang = 'en'; // default


function setLang(l){
lang = l;
if(lang === 'en'){
enEls.forEach(e => e.style.display = '');
faEls.forEach(e => e.style.display = 'none');
} else {
enEls.forEach(e => e.style.display = 'none');
faEls.forEach(e => e.style.display = '');
}
}


toggle.addEventListener('click', ()=>{
setLang(lang === 'en' ? 'fa' : 'en');
});


// ensure default
setLang('en');
})();