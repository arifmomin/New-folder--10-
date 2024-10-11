const menuBar = document.querySelector('.menu-bar');
const backToTop = document.querySelector('.backToTop');
window.addEventListener('scroll' ,function(){
    let scrolling = this.scrollY;
    if(scrolling > 100){
        menuBar.classList.add('menuFixed');
    }else{
        menuBar.classList.remove('menuFixed');
    }
});
window.addEventListener('scroll',function(){
    let backbutton = this.scrollY;
    if(backbutton > 100){
        backToTop.classList.add('back')
    }else{
        backToTop.classList.remove('back');
    }
    });
    backToTop.addEventListener( 'click', function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
});

/**
 * todo: dark mode button
 */
const btn = document.querySelector('.btn');
const solid = document.querySelector('.fa-solid');
const lightmode = document.querySelectorAll('.light-bg');

if(localStorage.getItem('theme') === 'dark'){
    enableDarkMode();
}else{
    enableLightMode();
}

function enableDarkMode (){
    btn.classList.add('darkbtn');
    solid.classList.add('fa-moon');
    solid.classList.remove('fa-sun');
    lightmode.forEach((Element) =>{
    Element.classList.add('darkmode');
    });
    solid.style.animation = '';
}
function enableLightMode (){
    solid.classList.remove('fa-moon');
    btn.classList.remove('darkbtn');
    solid.classList.add('fa-sun');
    solid.classList.remove('fa-moon');
    solid.style.animation = '.5s linear moon'
    lightmode.forEach((Element) =>{
    Element.classList.remove('darkmode');
    });
}
btn.addEventListener('click',() =>{
    if(solid.classList.value === 'fa-solid fa-sun'){
        enableDarkMode();
        localStorage.setItem('theme', 'dark');
    }else{
        enableLightMode();
        localStorage.setItem('theme', 'light');
    }
});