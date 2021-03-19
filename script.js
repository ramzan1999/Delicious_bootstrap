var nav = document.querySelector('.scroll-nav')
console.log(nav);
window.addEventListener('scroll', ()=>
{
    nav.classList.toggle('sticknav', window.scrollY > 100)
    console.log(nav);
})