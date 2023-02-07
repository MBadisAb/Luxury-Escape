"use strict";

function toggleMobileMenu() {
  let mobileMenu = document.querySelector("#mobile-navigation");
  mobileMenu.classList.toggle("active-mobile-menu");
}

function hideMobileMenu() {
  let mobileMenu = document.querySelector("#mobile-navigation");
  mobileMenu.classList.remove("active-mobile-menu");
}

AOS.init({
  once: true,
});