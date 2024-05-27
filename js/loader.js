// loader fade in-out
window.addEventListener("load", () => {
    const loader = document.querySelector(".container")

    loader.classList.add("container--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});