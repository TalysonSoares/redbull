const API_URL = "https://example.com/api/products"; // Replace with your real API endpoint

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json(); // Assuming API returns an array of products
    renderProducts(products);

  } catch (error) {
    console.error("Error fetching products:", error);
    document.getElementById("product-list").innerHTML = `<p style="color:red;">Failed to load products</p>`;
  }
}

function renderProducts(items) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  if (!items || items.length === 0) {
    container.innerHTML = "<p>No products in stock</p>";
    return;
  }

  const table = document.createElement("table");
  table.border = "1";
  table.style.borderCollapse = "collapse";
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  `;

  items.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.name}</td>
      <td>$${Number(product.price).toFixed(2)}</td>
      <td>${product.quantity}</td>
    `;
    table.appendChild(row);
  });

  container.appendChild(table);
}

// Fetch on page load
fetchProducts();