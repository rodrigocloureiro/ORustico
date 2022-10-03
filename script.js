// alert("Hello World!");

var btnMenu = document.querySelector(".btn-menu");
var menu = document.querySelector(".menu");

// console.log(btnMenu);

btnMenu.addEventListener("click", function() {
    // alert("Você clicou no menu!");
    // menu.classList.add("menu-open");
    // menu.classList.remove("menu-open");
    menu.classList.toggle("menu-open");
    this.classList.toggle("clicado"); // ou btnMenu.classList.toggle("clicado");
});