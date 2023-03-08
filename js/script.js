let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

var form1 =document.getElementById("form1");
var form2 =document.getElementById("form2");
var form3 =document.getElementById("form3");

var next1 =document.getElementById("next1");
var next2 =document.getElementById("next2");
var back1 =document.getElementById("back1");
var back2 =document.getElementById("back2");

var progress = document.getElementById("progress");











var typed = new Typed(".auto-type",{
    strings : ["FITTNES"],
    typeSpeed:150,
    backSpeed:150,
    loop:true

})














menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});





next1.onclick=function(){
    form1.style.left="-450px";
    form2.style.left="40px";
    progress.style.width ="240px";
}
back1.onclick=function(){
    form1.style.left="40px";
    form2.style.left="-450px";
    progress.style.width ="120px";

}
next2.onclick=function(){
    form2.style.left="-450px";
    form3.style.left="40px";
    progress.style.width ="3600px";

}
back2.onclick=function(){
    form2.style.left="40px";
    form3.style.left="450px";
    progress.style.width ="240px";

}





// var typed = new Typed(".auto-type",{
//     strings : ["FITTNES"],
//     typeSpeed:150,
//     backSpeed:150,
//     loop:true

// })
// var typed=new Typed(".input",{
//     strings:["Strong Independent Woman"],
//     typeSpeed:150,
//     backSpeed:150,
//     loop:true

// })
