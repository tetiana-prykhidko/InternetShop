function showHamburgerMenu() {
   let menu = document.getElementById("hamburger__icon");
   menu.classList.toggle("active");

   let navigation = document.getElementById("navigation");
   navigation.classList.toggle("open");
}