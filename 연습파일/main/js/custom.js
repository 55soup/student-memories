const btn_menu = document.querySelector(".btn_menu");
const main_navbar = document.querySelector(".main_navbar");
// const close_menu = document.querySelector("#close_menu");

btn_menu.addEventListener("click", showMenuBar);

function showMenuBar(event) {
  //클릭했을 때 이벤트
  event.preventDefault();
  main_navbar.classList.toggle("active");
  // close_menu.innerHTML = feather.icons["x"].toSvg();
}
