
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
    // ===============================
// Portfolio JavaScript
// Part 2
// ===============================

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// Scroll to Top Button

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        scrollBtn.style.display = "flex";

    }else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Reveal Animation

const revealElements = document.querySelectorAll(

".hero, .about, .education, .skills, .projects, .contact"

);

const revealOnScroll = () => {

    revealElements.forEach(element=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
    // ===============================
// Portfolio JavaScript
// Part 3
// ===============================

// Dark / Light Theme

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light-mode");

        const icon=themeBtn.querySelector("i");

        if(icon){

            if(document.body.classList.contains("light-mode")){

                icon.classList.remove("fa-moon");

                icon.classList.add("fa-sun");

            }else{

                icon.classList.remove("fa-sun");

                icon.classList.add("fa-moon");

            }

        }

    });

}

// Mobile Menu

const menuBtn=document.getElementById("menu-btn");

const navbar=document.querySelector(".navbar");

if(menuBtn && navbar){

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}

// Close mobile menu after click

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(navbar){

            navbar.classList.remove("active");

        }

    });

});

// Loader

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});

console.log("Portfolio Loaded Successfully");

});
