 document.addEventListener("DOMContentLoaded", function () {
        const hamburgerBtn = document.querySelector(".hamburger");
        const phoneMenu = document.querySelectorAll("nav ul.on-phone")[0];
        const closeBtn = phoneMenu.querySelector("li img");

        hamburgerBtn.addEventListener("click", () => {
            phoneMenu.style.display = "flex";
            hamburgerBtn.style.display = "none";
        });

        closeBtn.addEventListener("click", () => {
            phoneMenu.style.display = "none";
            hamburgerBtn.style.display = "block";
        });
    });