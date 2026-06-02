const cartContainer = document.querySelector(".cart-container");
const cartContent = document.querySelector(".content");
console.log(cartContainer);
const counter = document.querySelector(".cart-counter");
const addToCartButtons = document.querySelectorAll(".cart");
let cartItems = [];
const cartIcon = document.querySelector(".cart-icon");
cartIcon.addEventListener("click", function () {
  cartContainer.classList.toggle("show-cart");
});
for (let button of addToCartButtons) {
  button.addEventListener("click", function (event) {
    const pizzaName = event.target.parentElement.children[0].textContent;

    const pizzaPrice =
      event.target.parentElement.children[2].textContent.replace("Ksh.", "");

    const pizzaImage = event.target.parentElement.previousElementSibling.src;

    const pizzaTotalPrice =
      event.target.parentElement.children[3].textContent.replace("Ksh.", "");

    if (button.textContent.toLowerCase() === "add to cart") {
      button.textContent = "Remove from Cart";
      button.style.backgroundColor = "red";
      const pizzaItem = {
        name: pizzaName,
        price: pizzaPrice,
        image: pizzaImage,
        subtotal: pizzaTotalPrice,
      };
      cartItems.push(pizzaItem);

      counter.textContent = cartItems.length;

      updateCartContainer();
    } else {
      button.textContent = "Add to Cart";
      button.style.backgroundColor = "black";

      const indexToRemove = cartItems.findIndex(
        (item) => item.name === pizzaName,
      );
      cartItems.splice(indexToRemove, 1);
      counter.textContent = cartItems.length;
      updateCartContainer();
    }
  });
}

function updateCartContainer() {
  cartContainer.innerHTML = "";

  cartItems.map((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("content");
    cartItem.innerHTML = `
            <img
          src=${item.image}
          alt=""
          width="50px"
          height="50px"
        />
        <p>${item.name}</p>
        <p>ksh.${item.price}</p>
        <div class="quantity">
          <p class="decrement">-</p>
          <p class="quantitynum">1</p>
          <p class="increment">+</p>
        </div>
        <p>ksh.${item.totalPrice}</p>`;

    console.log(cartItem);
    cartContainer.append(cartItem);
  });
}

cartContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("increment")) {
    let itemQuantity = parseInt(
      event.target.parentElement.children[3].children[2].textContent,
    );
    event.target.parentElement.children[3].children[2].textContent =
      itemQuantity++;
  } else if (event.target.classList.contains("decrement")) {
    let itemQuantity = parseInt(
      event.target.parentElement.children[1].children[3].children[0]
        .textContent,
    );
    if (itemQuantity > 1) {
      event.target.parentElement.children[1].children[3].children[0].textContent =
        itemQuantity--;
    }
  }
});
