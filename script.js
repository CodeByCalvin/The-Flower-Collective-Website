////////// SELECTING ELEMENTS //////////

const couponClose = document.querySelector(".coupon-close");
const couponContainer = document.querySelector(".coupon-container");
const specialBoxBtn = document.querySelector(".discount-code-img");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

const cartBtn = document.querySelector(".shopping-cart-btn");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cartTitle = document.querySelector(".cart-title");
const cartRemoveAllBtn = document.querySelector(".cart-remove-all-btn");
const cartRemoveBtn = document.querySelectorAll(".cart-remove");
const cartItemsContainer = document.querySelector(".cart-items");
const cartContainer = document.querySelector(".cart-container");

const addToCartBtn1 = document.querySelector(".btn--1");
const addToCartBtn2 = document.querySelector(".btn--2");
const addToCartBtn3 = document.querySelector(".btn--3");

////////// DISCOUNT MODAL POPUP //////////

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

////////// SHOPPING CART //////////

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

// Cart buttons
cartBtn.addEventListener("click", function () {
  cartContainer.classList.toggle("open");
});

cartCloseBtn.addEventListener("click", function () {
  cartContainer.classList.remove("open");
});
//

/// ADD ITEM TO CART
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

/// BESTSELLING ITEMS ADD TO CART
addToCartBtn1.addEventListener("click", function (event) {
  event.preventDefault(),
    addItemToCart(items[0].name, items[0].price),
    updateCart();
  cartContainer.classList.add("open");
});

addToCartBtn2.addEventListener("click", function (event) {
  event.preventDefault(),
    addItemToCart(items[1].name, items[1].price),
    updateCart();
  cartContainer.classList.add("open");
});

addToCartBtn3.addEventListener("click", function (event) {
  event.preventDefault(),
    addItemToCart(items[2].name, items[2].price),
    updateCart();
  cartContainer.classList.add("open");
});

/// REMOVE ALL ITEMS FROM CART
cartRemoveAllBtn.addEventListener("click", function () {
  cartItemsContainer.innerHTML = "";
});

/// UPDATE THE CART ITEMS
function updateCart() {
  // Clear the cart items container
  cartItemsContainer.innerHTML = "";

  // Loop through the cart items array and add them to the basket
  cartItems.forEach((item) => {
    const cartItemElem = document.createElement("div");
    cartItemElem.className = "cart-item";
    cartItemElem.innerHTML = `
      <div class="cart-img-container"><img class="cart-item-img" src="${
        item.image
      }"></div>
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-counter">
        <div class="cart-btn cart-counter-increment">+</div>
        <div class="cart-count">${item.quantity}</div>
        <div class="cart-btn cart-counter-decrement">-</div>
      </div>
      <div class="prices">
        <div class="cart-amount">${(item.price * item.quantity).toFixed(
          2
        )}</div>
        <div class="cart-save">Save</div>
        <div class="cart-remove"><u>Remove</u></div>
      </div>
    `;
    // Add the new item to the cart container
    cartItemsContainer.appendChild(cartItemElem);

    // Increment and decrement buttons
    const incrementButton = cartItemElem.querySelector(
      ".cart-counter-increment"
    );
    const decrementButton = cartItemElem.querySelector(
      ".cart-counter-decrement"
    );
    const parentItem = incrementButton.closest(".cart-item");
    const itemIndex = cartItems.findIndex(
      (item) =>
        item.name === parentItem.querySelector(".cart-item-name").textContent
    );

    incrementButton.addEventListener("click", function () {
      cartItems[itemIndex].quantity++;
      updateCart();
    });

    decrementButton.addEventListener("click", function () {
      if (cartItems[itemIndex].quantity > 0) {
        cartItems[itemIndex].quantity--;
      }
      if (cartItems[itemIndex].quantity === 0) {
        cartItems.splice(itemIndex, 1);
        parentItem.remove();
      }
      updateCart();
    });

    // Remove all btn
    cartRemoveAllBtn.addEventListener("click", function () {
      cartItems.splice(itemIndex, 1);
      parentItem.remove();
      updateCart();
    });
  });

  // Remove item btn on individual items
  const cartRemoveBtn = document.querySelectorAll(".cart-remove");
  cartRemoveBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      const parentItem = button.closest(".cart-item");
      const itemIndex = cartItems.findIndex(
        (item) =>
          item.name === parentItem.querySelector(".cart-item-name").textContent
      );
      cartItems.splice(itemIndex, 1);
      parentItem.remove();
      updateCart();
    });
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
  updateSubtotal();
}

// TEMP - to remove after fixing formatting of shopping cart
// document.addEventListener("DOMContentLoaded", function () {
//   addItemToCart(items[0].name, items[0].price), updateCart();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   addItemToCart(items[1].name, items[1].price), updateCart();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   addItemToCart(items[2].name, items[2].price), updateCart();
// });

console.log(cartItems);
