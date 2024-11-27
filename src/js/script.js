import { mediaSocial } from "./data.js";

const XLines = document.querySelectorAll(".xline");
const navIconSosmeds = document.querySelectorAll(".sosmed-nav");
const btnToTop = document.getElementById("btn-to-top");

let lineIcons = '';
let socialIcons = '';

for (let i = 0; i <= 10; i++) {
    i === 0 ? lineIcons += "<i class='uil uil-minus'></i>" : lineIcons += "<i class='uil uil-minus ms-[-15px]'></i>";
}

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.getElementById("nav");

    window.addEventListener("scroll", function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            navbar.style.transform = "translateY(-150%)";
            navbar.style.transition = "transform 0.45s ease";
        } else {
            navbar.style.transform = "translateY(0)";
            navbar.style.transition = "transform 0.45s ease";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});

mediaSocial.forEach((medsos, i) => {
    socialIcons += `
        <a href="${medsos.url}" key="${i}" class="tooltip tooltip-left" data-tip="${medsos.name}" aria-label="Links to connect my social media">
            <i class="${medsos.icon} cursor-pointer max-sm:text-[19px] md:text-[17px] lg:text-[19px] nionotebook:text-[21px]" data-id="${medsos.id}"></i>
        </a>
    `;
});

document.addEventListener('click', function (event) {
    const navMenuBtn = document.getElementById('nav-menu-btn');
    const navContentModal = navMenuBtn.querySelector('.nav-content-modal');
    const isClickInside = navMenuBtn.contains(event.target);

    if (!isClickInside) {
        navMenuBtn.removeAttribute('open');
    }
});

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        const navMenuBtn = document.getElementById('nav-menu-btn');
        navMenuBtn.removeAttribute('open');
        setTimeout(() => {
            navMenuBtn.removeAttribute('open');
        }, 0);
    });
});

const bottomNavBtn = document.getElementById('bottom-nav-btn');
const bottomNav = document.getElementById('bottom-nav');
const menuLinks = document.querySelectorAll('.bottom-menu-item');
const backdrop = document.getElementById("backdrop-blur")

bottomNavBtn.addEventListener('click', function () {
    bottomNav.classList.toggle('translate-y-full');
    bottomNav.classList.toggle('translate-y-0');
    backdrop.classList.toggle('hidden');
    backdrop.classList.toggle('visible');
});

menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        bottomNav.classList.add('translate-y-full');
        bottomNav.classList.remove('translate-y-0');
        backdrop.classList.add('hidden');
        backdrop.classList.remove('visible');
    });
});

document.addEventListener('click', function (event) {
    if (!bottomNav.contains(event.target) && !bottomNavBtn.contains(event.target)) {
        bottomNav.classList.add('translate-y-full');
        bottomNav.classList.remove('translate-y-0');
        backdrop.classList.add('hidden');
        backdrop.classList.remove('visible');
    }
});

XLines.forEach(e => {
    e.innerHTML = lineIcons;
});

navIconSosmeds.forEach(e => {
    e.innerHTML = socialIcons;
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        btnToTop.classList.remove("hidden");
    } else {
        btnToTop.classList.add("hidden");
    }
})

btnToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// skill section

