const mobileNav = document.querySelector(".mobile-nav");
const navWrapper = document.getElementById("navigation-wrapper");
const features = document.querySelector(".features");
const company = document.querySelector(".company");
const featuresCont = document.getElementById("features-content");
const compCont = document.getElementById("company-content");

mobileNav.addEventListener("click", function () {
  navWrapper.hasAttribute("data-visible")
    ? mobileNav.setAttribute("aria-expanded", false)
    : mobileNav.setAttribute("aria-expanded", true);
  navWrapper.toggleAttribute("data-visible");
});

features.addEventListener("click", function () {
  featuresCont.hasAttribute("data-visible")
    ? features.setAttribute("aria-expanded", false)
    : features.setAttribute("aria-expanded", true);
  featuresCont.toggleAttribute("data-visible");
});

company.addEventListener("click", function () {
  compCont.hasAttribute("data-visible")
    ? company.setAttribute("aria-expanded", false)
    : company.setAttribute("aria-expanded", true);
  compCont.toggleAttribute("data-visible");
});
