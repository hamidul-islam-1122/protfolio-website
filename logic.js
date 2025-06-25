document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.querySelector(".hamburger");
    const phoneMenu = document.querySelector("nav ul.on-phone");
    const closeBtn = phoneMenu.querySelector("li img");

    // Open menu
    hamburgerBtn.addEventListener("click", () => {
        phoneMenu.style.display = "flex";
        hamburgerBtn.style.display = "none";
    });

    // Close menu with close button
    closeBtn.addEventListener("click", () => {
        phoneMenu.style.display = "none";
        hamburgerBtn.style.display = "block";
    });

    // Hide menu when clicking outside
    document.addEventListener("click", (event) => {
        const isClickInside = phoneMenu.contains(event.target) || hamburgerBtn.contains(event.target);
        if (!isClickInside && phoneMenu.style.display === "flex") {
            phoneMenu.style.display = "none";
            hamburgerBtn.style.display = "block";
        }
    });

    // Hide menu when clicking on links that open in a new tab
    const navLinks = phoneMenu.querySelectorAll("a[target='_blank']");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            phoneMenu.style.display = "none";
            hamburgerBtn.style.display = "block";
        });
    });
});
