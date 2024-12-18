/*********** Slider **************/
let interval;
const imageSources = ["./Images/1.png", "./Images/1.avif", "./Images/4.png"];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const sliderImageElement = document.getElementById("sliderImg");
  function showImage(index) {
    sliderImageElement.src = imageSources[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex =
      (currentIndex - 1 + imageSources.length) % imageSources.length;
    showImage(currentIndex);
  }

  document.getElementById("next").addEventListener("click", nextImage);
  document.getElementById("prev").addEventListener("click", prevImage);
  showImage(currentIndex);
});

/**************Login button or picture */
document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("Token");
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");
  const Icon = document.getElementById("Icon");

  function updateUI() {
    if (token) {
      loginButton.style.display = "none";
      logoutButton.style.display = "block";
      Icon.style.display = "block";
    } else {
      loginButton.style.display = "block";
      logoutButton.style.display = "none";
      Icon.style.display = "none";
    }
  }

  loginButton.addEventListener("click", () => {
    const fakeToken = "user123-token";
    localStorage.setItem("Token", fakeToken);
    window.href = "login.html";
  });

  logoutButton.addEventListener("click", () => {
    localStorage.clear(0);
    window.href = "login.html";
  });

  updateUI();
});

/************ Nav Bar ******/
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});
logoutButton.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "login.html";
});
/************** ALL CARDS *******************/
const cardContainer = document.querySelector(".cardContainer");
let allProducts = [];
const apiUrl = "https://fakestoreapi.in/api/products";

async function fetchCards() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    allProducts = data.products;
    renderCards(allProducts);
  } catch (error) {
    console.error("Error fetching cards:", error);
    cardContainer.innerHTML =
      "<p>Failed to load products. Please try again later.</p>";
  }
}

function renderCards(products) {
  cardContainer.innerHTML = "";
  products.forEach((item) => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.model} (${item.brand})</h3>
      <p>${item.title.slice(0, 70)}${item.title.length > 70 ? "..." : ""}</p>
      <p>Color: ${item.color}</p>
      <p>Price:<span> ${item.price} </span> USD</p>
      <button onclick="showDetails(${item.id})">Details</button>
    `;
    cardContainer.appendChild(card);
  });
}

function filterProducts(category) {
  const filterButtons = document.querySelectorAll(".filter");
  filterButtons.forEach((btn) => btn.classList.remove("act"));
  event.target.classList.add("act");

  if (category === "all") {
    renderCards(allProducts);
  } else {
    const filteredProducts = allProducts.filter(
      (product) => product.category.toLowerCase() === category
    );
    renderCards(filteredProducts);
  }
}

function showDetails(productId) {
  const product = allProducts.find((item) => item.id === productId);
  if (product) {
    alert(`
      Model: ${product.model}
      Brand: ${product.brand}
      Price: $${product.price} (Discount: ${product.discount}%)
      Description: ${product.description}
    `);
  }
}

fetchCards();

/************************ back function in error page **********************************/
function back() {
  history.back();
}
/************* Filter ***********/
function filt(e) {}
