const toggleBtn = document.getElementById("theme-btn");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});