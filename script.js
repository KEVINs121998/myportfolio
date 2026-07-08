const toggle = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
}

toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});