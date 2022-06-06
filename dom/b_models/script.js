let modal = document.querySelector(".modal");
let closemodal = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");
let modalopenbtn = document.querySelectorAll(".show-modal");
console.log(modalopenbtn);

const modalfun = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeFunction = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closemodal.addEventListener("click", closeFunction);
for (let i = 0; i < modalopenbtn.length; i++) {
  modalopenbtn[i].addEventListener("click", modalfun);
  overlay.addEventListener("click", closeFunction);
  document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === "Escape" && !modal.classList.contains("hidden"))
      closeFunction();
  });
}
