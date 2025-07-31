document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector("#addToCart");

  if (!addToCartBtn) return;

  addToCartBtn.addEventListener("click", () => {
    // Datos del producto extraídos desde el DOM
    const id = addToCartBtn.dataset.id;
    const name = document.querySelector("h2.divider")?.textContent.trim();
    const brand = document.querySelector("h3")?.textContent.trim();
    const priceText = document.querySelector(".product-card__price")?.textContent.trim();
    const price = parseFloat(priceText.replace("$", ""));
    const color = document.querySelector(".product__color")?.textContent.trim();
    const image = document.querySelector(".product-detail img")?.getAttribute("src");

    if (!id || !name || !price || !image) {
      alert("Error al obtener los datos del producto.");
      return;
    }

    // Producto a agregar
    const product = {
      id,
      name,
      brand,
      price,
      color,
      image,
      quantity: 1,
    };

    // Leer carrito actual
    let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

    // Revisar si ya existe
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(product);
    }

    // Guardar nuevamente en localStorage
    localStorage.setItem("so-cart", JSON.stringify(cart));

    alert("Producto agregado al carrito.");
    // Opcional: redirigir
    // window.location.href = "../cart/";
  });
});
