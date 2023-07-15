const header = document.querySelector("header");

window.addEventListiner("Scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Let menu = document.querySelector('#menu-icon');
// Let navbar = document.querySelector('navbar')