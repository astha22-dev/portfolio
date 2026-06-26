// Hide Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    setTimeout(() => {

        loader.remove();

    }, 500);

});
