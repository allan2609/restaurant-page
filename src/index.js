import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

document.querySelector(".home").addEventListener("click", home);
document.querySelector(".menu").addEventListener("click", menu);
document.querySelector(".about").addEventListener("click", about);

//document.body.style.backgroundImage = "url('../src/image0.jpeg')"; 

home();
