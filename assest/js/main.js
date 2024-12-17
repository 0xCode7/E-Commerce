

//  SHOW MENU       in medium and small devices

const navMenu  = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

    // menu show 
    // validate if constant exists

    if(navToggle){
        navToggle.addEventListener("click",()=>{
            navMenu.classList.add('show-menu')
        })
    }
    
    
    
    /*========= CART HIDDEN =========== */
    // validate if constant exists
    
    
    if(navClose){
        navClose.addEventListener("click",()=>{
            navMenu.classList.remove('show-menu')
        })
    }
    


// HOME SWIPER

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    Loop: 'true',

    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
});



// change background header


function scrollHeader() {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)


// new swiper

var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 15,
    // centeredSlides: true,
    slidesPerView: "auto",
    Loop: 'true',
    
});



/*================ SHOW CART ==================*/

const cart  = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close');


if(cartShop){
    cartShop.addEventListener("click",()=>{
        cart.classList.add('show__cart')
    })
}



/*========= CART HIDDEN =========== */
// validate if constant exists


if(cartClose){
    cartClose.addEventListener("click",()=>{
        cart.classList.remove('show__cart')
    })
}



/* ============== SHOW LOGIN ============== */
const login  = document.getElementById('login'),
    loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close');


    // login show
    // validate if constant exists
    
    if(loginButton){
        loginButton.addEventListener("click",()=>{
            login.classList.add('show-login')
        })
    }
    
    // login hidden
    // validate if constant exists


    if(loginClose){
    loginClose.addEventListener("click",()=>{
        login.classList.remove('show-login')
    })
}



/*============= SHOW SCROLL UP ============== */

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height, add the show-scroll class to tag with the scroll-top
    // class

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname; // Get the current page path

    // Shop Page Logic
    if (currentPage.includes('shop.html')) {
        const shopContainer = document.querySelector('.shop');

        const fetchCategory = (category) => {
            return fetch(`https://fakestoreapi.com/products/category/${category}`)
                .then(response => response.json());
        };

        // Fetch products for two categories: "men's clothing" and "women's clothing"
        Promise.all([
            fetchCategory("men's clothing"),
            fetchCategory("women's clothing")
        ])
        .then(results => {
            const products = results.flat(); // Merge both category results into one array
            let row;
            products.forEach((product, index) => {
                if (index % 3 === 0) {
                    row = document.createElement('div');
                    row.classList.add('product-row');
                    shopContainer.appendChild(row);
                }

                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.dataset.productId = product.id; // Store product ID in a data attribute

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">Price: $${product.price}</p>
                `;

                // Add event listener to each product card
                productCard.addEventListener('click', () => {
                    const productId = productCard.dataset.productId;
                    window.location.href = `details.html?productId=${productId}`; // Redirect to details page with productId
                });

                row.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
    }

    // Product Details Page Logic
    else if (currentPage.includes('details.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('productId'); // Get productId from URL query string

        if (productId) {
            // Fetch product details based on productId
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(response => response.json())
                .then(product => {
                    const productContainer = document.querySelector('.product-details'); // Ensure this exists in HTML

                    // Display product details
                    productContainer.innerHTML = `
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                        <h1 class="product-title">${product.title}</h1>
                        <p class="product-description">${product.description}</p>
                        <p class="product-price">Price: ${product.price}$</p>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    `;
                })
                .catch(error => console.error('Error fetching product details:', error));
        } else {
            console.log('Product ID not found in the URL');
        }
    }
});
