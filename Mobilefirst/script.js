const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-menu");
    const infoBox = document.getElementById("info-box");

    toggleButton.addEventListener("click", function () {
        if (infoBox.style.display === "none" || infoBox.style.display === "") {
            infoBox.style.display = "block";
        } else {
            infoBox.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const categorySelect = document.getElementById("category");
    const productCards = document.querySelectorAll(".product-card");

    categorySelect.addEventListener("change", function() {
        const selectedCategory = this.value;
        productCards.forEach(card => {
            if (selectedCategory === "all" || card.dataset.category === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});