const toggleBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
       toggleBtn.textContent="Light Mode"
    } else {
        toggleBtn.textContent="Dark Mode"
    }
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});