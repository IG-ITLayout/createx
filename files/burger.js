// burger menu
let menuBtn = document.querySelector(".burger__inner");
let menuList = document.querySelector(".header__menu");
export const activeMenu = function() {
    menuBtn.classList.toggle("show");
    if (menuBtn.classList.contains("show")) {
        menuList.classList.add("showMenu");
    } else {
        menuList.classList.remove("showMenu");
        menuBtn.classList.remove("show");
    }
};
menuBtn.addEventListener("click", activeMenu);