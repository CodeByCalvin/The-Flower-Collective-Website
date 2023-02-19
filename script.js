const couponClose = document.querySelector(".coupon-close");
const couponContainer = document.querySelector(".coupon-container");
const specialBoxBtn = document.querySelector(".discount-code-img");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

const cartTitle = document.querySelector(".cart-title");
const cartRemoveAllBtn = document.querySelector(".cart-remove-all-btn");
const cartItemsContainer = document.querySelector(".cart-items");
const cartContainer = document.querySelector(".cart-container");

const addToCartBtn1 = document.querySelector(".btn--1");
const addToCartBtn2 = document.querySelector(".btn--2");
const addToCartBtn3 = document.querySelector(".btn--3");

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

///////// Shopping cart /////////

addToCartBtn1.addEventListener("click", function () {
  console.log("Add to cart clicked 1");
});

addToCartBtn2.addEventListener("click", function () {
  console.log("Add to cart clicked 2");
});

addToCartBtn3.addEventListener("click", function () {
  console.log("Add to cart clicked 3");
});

const items = [
  {
    name: "The Collective Box",
    price: 29.99,
    quantity: 0,
    image: "imgs/flower-box.jpg",
  },
  { name: "Dried flowers", price: 34.99, quantity: 0 },
  { name: "Hamper Box", price: 39.99, quantity: 0 },
];

const cartItems = [];
const cartTotal = [];

///////// Add item to cart

function addItemToCart(name, price) {
  const item = items.find((item) => item.name === name && item.price === price);
  if (item) {
    cartItems.push(item);
    console.log(`${name} added to cart.`);
  } else {
    console.log(`Could not find item with name ${name} and price ${price}.`);
  }
}

const addTheCollectiveBox = addItemToCart(items[0].name, items[0].price);
const addDriedFlowers = addItemToCart(items[1].name, items[1].price);

///////// Function to update the cart UI

function updateCart() {
  // Clear the cart items container
  cartItemsContainer.innerHTML = "";

  // Loop through the cart items and add them to the UI
  cartItems.forEach((item) => {
    const cartItemElem = document.createElement("div");
    cartItemElem.className = "cart-item";
    cartItemElem.innerHTML = `
      <div class="cart-img-container"><img class="cart-item-img" src="${item.image}"></div>
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-counter">
        <div class="cart-btn cart-increment-btn">+</div>
        <div class="cart-count">${item.quantity}</div>
        <div class="cart-btn cart-decrement-btn">-</div>
      </div>
      <div class="prices">
        <div class="cart-amount">${item.price}</div>
        <div class="cart-save">Save for later</div>
        <div class="cart-remove"><u>Remove</u></div>
      </div>
    `;
    // Add the new item to the cart container
    cartItemsContainer.appendChild(cartItemElem);
  });
}

updateCart();
console.log(cartItems);
