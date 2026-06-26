
// ===============================
// Portfolio JavaScript
// Part 1
// ===============================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Smooth Scrolling
    // ==========================

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ==========================
    // Active Navigation Link
    // ==========================

    const sections = document.querySelectorAll("section");

    const menuItems = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        menuItems.forEach(link => {

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

});
