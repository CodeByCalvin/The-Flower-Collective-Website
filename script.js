////////// SELECTING ELEMENTS

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

////////// DISCOUNT MODAL POPUP

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

////////// SHOPPING CART

const items = [
  {
    name: "The Collective Box",
    price: 29.99,
    quantity: 0,
    image: "imgs/flower-box.jpg",
  },
  {
    name: "Dried flowers",
    price: 34.99,
    quantity: 0,
    image: "imgs/dried flowers.jpg",
  },
  {
    name: "Hamper Box",
    price: 39.99,
    quantity: 0,
    image: "imgs/flower hamper box.jpg",
  },
];

const cartItems = [];
const cartTotal = [];

// Add item to cart
function addItemToCart(name, price) {
  const item = items.find((item) => item.name === name && item.price === price);
  if (item) {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.name === name && cartItem.price === price
    );
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }
    console.log(`${name} added to cart.`);
  }
}

// Bestselling items add to cart buttons
addToCartBtn1.addEventListener("click", function (event) {
  event.preventDefault(),
    addItemToCart(items[0].name, items[0].price),
    updateCart();
});

addToCartBtn2.addEventListener("click", function (event) {
  event.preventDefault(),
    addItemToCart(items[1].name, items[1].price),
    updateCart();
});

addToCartBtn3.addEventListener("click", function (event) {
  event.preventDefault(),
    addItemToCart(items[2].name, items[2].price),
    updateCart();
});

// Remove all items from cart
cartRemoveAllBtn.addEventListener("click", function () {
  cartItemsContainer.innerHTML = "";
});

// Update the cart
function updateCart() {
  // Clear the cart items container
  cartItemsContainer.innerHTML = "";
  // Loop through the cart items array and add them to the basket
  cartItems.forEach((item) => {
    const cartItemElem = document.createElement("div");
    cartItemElem.className = "cart-item";
    cartItemElem.innerHTML = `
      <div class="cart-img-container"><img class="cart-item-img" src="${item.image}"></div>
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-counter">
        <div class="cart-btn cart-counter-increment">+</div>
        <div class="cart-count">${item.quantity}</div>
        <div class="cart-btn cart-counter-decrement">-</div>
      </div>
      <div class="prices">
        <div class="cart-amount">${item.price}</div>
        <div class="cart-save">Save</div>
        <div class="cart-remove"><u>Remove</u></div>
      </div>
    `;
    // Add the new item to the cart container
    cartItemsContainer.appendChild(cartItemElem);
  });
  updateSubtotal();
}

// updateCart();
console.log(cartItems);

// TEMP - to remove after fixing formatting of shopping cart
document.addEventListener("DOMContentLoaded", function () {
  addItemToCart(items[0].name, items[0].price), updateCart();
});

document.addEventListener("DOMContentLoaded", function () {
  addItemToCart(items[1].name, items[1].price), updateCart();
});

document.addEventListener("DOMContentLoaded", function () {
  addItemToCart(items[2].name, items[2].price), updateCart();
});

// Subtotal function
function updateSubtotal() {
  const subtotalElem = document.querySelector(".subtotal-amount");

  let subTotal = 0;
  cartItems.forEach(function (item) {
    subTotal += item.price * item.quantity;
  });
  subtotalElem.textContent = "£" + subTotal.toFixed(2);
}

// Counter increment/decrement buttons
// TEMP - coudln't get element to initialise, had to put inside DOMContentLoader
document.addEventListener("DOMContentLoaded", function () {
  const cartCounterIncrement = document.querySelectorAll(
    ".cart-counter-increment"
  );
  const cartCounterDecrement = document.querySelectorAll(
    ".cart-counter-decrement"
  );

  //FIXME
  cartCounterIncrement.forEach((button) => {
    button.addEventListener("click", function () {
      const parentItem = button.parentNode.parentNode;
    });
  });
});
