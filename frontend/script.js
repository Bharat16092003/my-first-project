async function displayProducts() {
  try {
    // Use EC2 Public IP instead of localhost
    const response = await fetch("http://54.87.4.5:5000/api/products");
    const products = await response.json();

    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

let cartCount = 0;
function addToCart(id) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(`Product added to cart! Total items: ${cartCount}`);
}

displayProducts();

