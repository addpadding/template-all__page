const header = document.querySelector("header");

// nav__menu
const nav__burger = document.querySelector("header .nav__menu");

const nav__toggle = document.querySelector("header .nav__btns .nav__toggle");

const nav__close = document.querySelector("header .nav__menu .nav__close");

const nav__link = document.querySelectorAll(
    "header .nav__menu .nav__list .nav__link"
);

// ==================================================================

//===============(nav__toggle برجر = (Add("nav__menu")))==============
if (nav__toggle) {
    nav__toggle.addEventListener("click", () => {
        // (nav__menu(add("active")))
        nav__burger.classList.add("show_menu");
    });
}

// =========================================================================

//===============(nav__close(x) => (remove => ("nav__menu")))===============
if (nav__close) {
    nav__close.addEventListener("click", () => {
        // (nav__menu(remove("active")))
        nav__burger.classList.remove("show_menu");
    });
}

// =================================================================
//===============(nav__link(remove => ("show_menu")))===============
function linkAction() {
    nav__burger.classList.remove("show_menu");
}

nav__link.forEach((item) => item.addEventListener("click", linkAction));

// ================================================================
// ===============(header (active("scroll_header")))===============
const scrollHeader = () => {
    if (this.scrollY >= 50) {
        header.classList.add("scroll_header");
    } else {
        header.classList.remove("scroll_header");
    }
};
window.addEventListener("scroll", scrollHeader);

// ====================================================
/*=============== TESTIMONIAL SWIPER ===============*/
let testimonial__swiper = new Swiper(".testimonial__swiper", {
    spaceBetween: 30,
    loop: "true",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ==============================================

let new_swiper = new Swiper(".new_swiper", {
    spaceBetween: 24,
    loop: "true",

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// ==========================================================================
// =============== (section Scroll (active => ("nav__link"))) ===============
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active_link')
        } else {
            sectionsClass.classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ===============================================================
// =============== (scroll_up (active=> ("show_scroll"))) ========
const scroll_Up = () => {
    const scroll__Up = document.getElementById("scroll-up");

    if (this.scrollY >= 350) {
        scroll__Up.classList.add('show_scroll')
    } else {
        scroll__Up.classList.remove('show_scroll')
    }

};
window.addEventListener("scroll", scroll_Up);

// ===============================================================
// =============== (cart (add => ("show_cart"))) =================
const cart_00 = document.querySelector("#cart");
const nav__shop = document.querySelector("header .nav__btns .nav__shop");
const cart__close = document.querySelector("#cart .cart__close");

// SHOW
if (nav__shop) {
    nav__shop.addEventListener("click", () => {
        cart_00.classList.add("show_cart");
    });
}

// HIDDEN
if (cart__close) {
    cart__close.addEventListener("click", () => {
        cart_00.classList.remove("show_cart");
    });
}

// =====================================================================


const themeButton = document.getElementById('change_moon_theme')
const dark_theme_00 = 'dark_theme'
const icon_Theme_00 = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(dark_theme_00) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(icon_Theme_00) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](dark_theme_00)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](icon_Theme_00)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(dark_theme_00)
    themeButton.classList.toggle(icon_Theme_00)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})