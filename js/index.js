const mobileBtn = document.getElementById("mobile-btn");
const mainHeader = document.querySelector(".main-header");
mobileBtn.addEventListener("click", () => {
  mainHeader.classList.toggle("nav-open");
});
