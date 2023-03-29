const active = document.querySelector(".tweet__pagination-item");
active.addEventListener("click", function (e) {
  if (e.target === ".tweet__pagination-item") {
    e.classList.add(".is-active");
  } else {
    e.classList.remove("is-active");
  }
});
