// Smooth welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Freza Kenyi's Portfolio!");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact form message
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    form.reset();
});