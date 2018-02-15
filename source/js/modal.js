var link = document.querySelector(".product-week__btn");
var overlay = document.querySelector(".modal__overlay");
var writeus = document.querySelector(".modal");
var form = writeus.querySelector("form");
var close = document.querySelector(".modal__overlay")

var size = writeus.querySelector("[name=radio-size]");

var storage_name = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal__overlay--show");
  writeus.classList.add("modal__show");

  if(storage_name) {
  name.value = storage_name;
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  writeus.classList.remove("modal__show");
  overlay.classList.remove("modal__overlay--show");
});
