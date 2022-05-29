// Попап
let popup = document.querySelector(".popup");
let btn = document.querySelectorAll(".btn");
let close = document.querySelectorAll(".popup__close");
const body = document.querySelector("body");
for (let i = 0; i < btn.length; i++) {
  let cardBtn = btn[i];
  cardBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const curentTarget = e.currentTarget;
    curentTarget.classList.add("card-active");
    if (curentTarget.classList.contains("card-active")) {
      popup.classList.add("open");
      body.classList.add("lock");
    }
  });
  for (let i = 0; i < close.length; i++) {
    let closeBtn = close[i];
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      popup.classList.remove("open");
      cardBtn.classList.remove("card-active");
      popupAlert.classList.remove("popup__alert-active");
      body.classList.remove("lock");
    });
    popup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popup.classList.remove("open");
        cardBtn.classList.remove("card-active");
        popupAlert.classList.remove("popup__alert-active");
        body.classList.remove("lock");
      }
    });
  }
}
