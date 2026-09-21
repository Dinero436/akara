const bagButton = document.getElementById("bagButton");
const bag = document.getElementById("bag");
const closeBag = document.getElementById("closeBag");
const bagItems = document.getElementById("bagItems");
const bagCount = document.getElementById("bagCount");
const total = document.getElementById("total");
const checkoutButton = document.getElementById("checkout");

let items = [];

function updateBag() {
  if (!bagItems || !bagCount || !total) return;

  bagItems.innerHTML = "";

  if (items.length === 0) {
    bagItems.innerHTML = "<p class=\"empty\">Your bag is looking a little hungry.</p>";
  }

  items.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "bag-item";

    const text = document.createElement("p");
    text.textContent = `${item.name} - ₦${item.price}`;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeItem(index);
    });

    row.appendChild(text);
    row.appendChild(removeButton);
    bagItems.appendChild(row);
  });

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  bagCount.textContent = String(items.length);
  total.textContent = `₦${totalPrice}`;
}

function removeItem(index) {
  items.splice(index, 1);
  updateBag();
}

if (bagButton && bag) {
  bagButton.addEventListener("click", () => {
    bag.classList.add("open");
  });
}

if (closeBag && bag) {
  closeBag.addEventListener("click", () => {
    bag.classList.remove("open");
  });
}

document.querySelectorAll(".add").forEach((button) => {
  button.addEventListener("click", () => {
    items.push({
      name: button.dataset.name,
      price: Number(button.dataset.price)
    });

    updateBag();
  });
});

if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    if (items.length === 0) {
      alert("Your bag is empty.");
      return;
    }

    alert("Thank you for your order!");
    items = [];
    updateBag();

    if (bag) {
      bag.classList.remove("open");
    }
  });
}

updateBag();