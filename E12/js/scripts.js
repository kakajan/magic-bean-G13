/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
const list = document.querySelector(".products");
const cartMenu = document.querySelector(".cartMenu");
const products = {
  data: [],
};
let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}
function showCartMenu () {
    let cartList = "";
    cart.forEach((val, index) => {
      cartList += `<li><a class="dropdown-item" href="#!"><img height="80" src="${val.images.main.url[0]}" >${val.title_fa}</a> <button onclick="removeItem(${index})">Remove</button></li>
              <li><hr class="dropdown-divider" /></li> `;
    });
    cartMenu.innerHTML = cartList
}
if (cart.length > 0) {
  showCartMenu();
} else {
  cartMenu.innerHTML = "<li>Cart is Empty!</li>";
}
fetch("assets/products.json")
  .then((response) => response.json())
  .then((data) => {
    products.data = data.data.products;
    let productList = "";

    products.data.forEach((val, index) => {
      productList += ` <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Sale badge-->
                            ${
                              val.default_variant.price.badge
                                ? '<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">' +
                                  val.default_variant.price.badge.title +
                                  "</div>"
                                : ""
                            }
                            <!-- Product image-->
                            <img class="card-img-top" src="${
                              val.images.main.url[0]
                            }" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <a target="_blank" href="https://digikala.com${
                                      val.url.uri
                                    }">
                                    <h5 class="fw-bolder">${val.title_fa}</h5>
                                    </a>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    <!-- Product price-->
                                    ${val.default_variant.price.selling_price}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onclick="addToCart(${index})" class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>`;
    });

    list.innerHTML = productList;
  });
function addToCart(index) {
    cart.push(products.data[index]);
    showCartMenu()
    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Successfully added to cart')
}
