/**
 * Color change for the navbar
 * 
 * Change the color of the navbar whe you scroll down
 */
window.addEventListener("scroll", function(){
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});