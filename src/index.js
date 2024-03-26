import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import "./styles.css";

document.querySelector(".home").addEventListener("click", home);
document.querySelector(".menu").addEventListener("click", menu);
document.querySelector(".about").addEventListener("click", about);

home();
