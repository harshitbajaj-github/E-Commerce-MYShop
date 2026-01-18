let cart = JSON.parse(localStorage.getItem("cart")) || [];

function update(){
  if(document.getElementById("count"))
    count.innerText = cart.length;
}
update();

function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🛒 Product added to cart");
}
