

//  SHOW MENU       in medium and small devices

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// menu show 
// validate if constant exists

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
    })
}



/*========= CART HIDDEN =========== */
// validate if constant exists


if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })
}



// HOME SWIPER

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    Loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// change background header


function scrollHeader() {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// new swiper

var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 15,
    // centeredSlides: true,
    slidesPerView: "auto",
    Loop: 'true',

});



/*================ SHOW CART ==================*/

const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close');


if (cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show__cart')
    })
}



/*========= CART HIDDEN =========== */
// validate if constant exists


if (cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show__cart')
    })
}



/* ============== SHOW LOGIN ============== */
const login = document.getElementById('login'),
    loginButton = document.getElementById('loginButton'),
    formClose = document.getElementById('formClose'),
    register = document.getElementById('register'),
    registerButton = document.getElementById('registerButton');

const icon = document.createElement('i');
const logged = localStorage.getItem('loggedIn')

if (logged) {
    icon.className = 'bx bx-log-out-circle';
    loginButton.appendChild(icon);
    loginButton.addEventListener("click", () => {
        localStorage.removeItem('loggedIn');
        icon.className = 'bx bx-user';
        loginButton.appendChild(icon);
    })

    loginButton = document.getElementById('loginButton');
} else {
    icon.className = 'bx bx-user';
    loginButton.appendChild(icon);
}


// login and register show
// validate if constant exists

if (loginButton) {
    loginButton.addEventListener("click", () => {
        register.classList.remove('show-register');
        login.classList.add('show-login');
    })
}

if (registerButton) {
    registerButton.addEventListener("click", () => {
        login.classList.remove('show-login');
        register.classList.add('show-register');
    })
}

// login and register hidden
// validate if constant exists


if (formClose) {
    formClose.addEventListener("click", () => {
        login.classList.remove('show-login')
        register.classList.remove('show-register')  
    })
}





/*============= SHOW SCROLL UP ============== */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height, add the show-scroll class to tag with the scroll-top
    // class

    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)