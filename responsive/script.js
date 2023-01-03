
let berger =  document.querySelector(".berger");
var nav_list=document.querySelector(".nav-list")
var navbar = document.querySelector(".navbar");
var rightNav=document.querySelector(".rightNav");

berger.addEventListener('click',()=>{

nav_list.classList.toggle("v-class-resp");
navbar.classList.toggle("h-nav-resp");
rightNav.classList.toggle("v-class-resp");
});
