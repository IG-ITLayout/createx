//Tabs
let tab = function () {
  let tabNav = document.querySelectorAll(".main__item-menu"),
    tabContent = document.querySelectorAll(".main__previev-card"),
    tabName;
  tabNav.forEach((item) => {
    item.addEventListener("mouseenter", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
    tabName = this.getAttribute("data-tab-name");
    selectTabName(tabName);
  }

  function selectTabName(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
};

tab();
