const couponClose = document.querySelector(".coupon-close");
const couponContainer = document.querySelector(".coupon-container");
const specialBoxBtn = document.querySelector(".discount-code-img");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

specialBoxBtn.addEventListener("click", function () {
  couponContainer.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("stop-scrolling");
  specialBoxBtn.classList.remove("btn-moving");
  specialBoxBtn.classList.add("btn-greyscale");
});

couponClose.addEventListener("click", function () {
  couponContainer.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("stop-scrolling");
});
