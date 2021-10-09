let nav_mobile = document.querySelector(".nav__mobile");
let barre = document.getElementsByClassName("barra");
for (let index = 0; index < barre.length; index++) {
  const element = barre[index];
  nav_mobile.addEventListener("click", function () {
    element.classList.toggle("aperto");
  });
}



