const products = [
    { id: 1, name: "Ürün 1", price: 50, image: "product1.jpg" },
    { id: 2, name: "Ürün 2", price: 75, image: "product2.jpg" },
    { id: 3, name: "Ürün 3", price: 30, image: "product3.jpg" },
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");


function displayProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.className = "product";
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Fiyat: ${product.price} TL</p>
            <button onclick="addToCart(${product.id})">Sepete Ekle</button>
        `;
        productList.appendChild(productItem);
    });
}


function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
        const cartItem = document.createElement("li");
        cartItem.innerText = `${selectedProduct.name} - ${selectedProduct.price} TL`;
        cartItems.appendChild(cartItem);
        updateTotal(selectedProduct.price);
    }
}


let total = 0;
function updateTotal(price) {
    total += price;
    totalElement.textContent = `Toplam: ${total} TL`;
}


displayProducts();
