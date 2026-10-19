const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 899,
        rating: 4.8
    },
    {
        id: 2,
        name: "Headphones",
        category: "Electronics",
        price: 99,
        rating: 4.5
    },
    {
        id: 3,
        name: "T-Shirt",
        category: "Clothing",
        price: 25,
        rating: 4.2
    },
    {
        id: 4,
        name: "Desk Lamp",
        category: "Home",
        price: 45,
        rating: 4.6
    },
    {
        id: 5,
        name: "Coffee Maker",
        category: "Home",
        price: 80,
        rating: 4.4
    }
];

const productContainer = document.getElementById("productContainer");
const productNames = document.getElementById("productNames");

function displayProducts(productList) {
    /*Todo: 
        - Below is an example of adding a single product card to the page.
        - Complete this function so that it adds all of the products from the 
          given productList to the page as product cards.
    */
    productContainer.innerHTML = '';

    let card =  '<div class="card">' +
                    '<h3>' + product.name + '</h3>' +
                    '<p><strong>Category:</strong> ' + product.category + '</p>' +
                    '<p><strong>Price:</strong> ' + product.price + '</p>' +
                    '<p><strong>Rating:</strong> ' + product.rating + '</p>' +
                '</div>';

    productContainer.innerHTML += card;
}

document.getElementById("electronicsBtn")
    .addEventListener("click", () => {
        /*Todo: 
            - Display only the electronics on the page. 
            - Be sure to utilize the displayProducts() function to help.
        */
    });

// COMPLETE THIS EVENT
document.getElementById("under100Btn")
    .addEventListener("click", () => {
        /*Todo: 
            - Display only products that cost less than $100
            - Be sure to utilize the displayProducts() function to help.
        */
    });

document
    .getElementById("showAll")
    .addEventListener("click", () => {
        /*Todo: 
            - Display all products on the page
            - Be sure to utilize the displayProducts() function to help.
        */
    });

displayProducts(products);