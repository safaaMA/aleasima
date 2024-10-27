function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}
window?.addEventListener("scroll", reveal);

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const progressValue = circle.getAttribute('data-progress');
        if (progressValue) {
            console.log(`Setting --progress to ${progressValue}%`); // Print to console for debugging
            circle.style.setProperty('--progress', `${progressValue}%`);
        }
    });
});

const boxes = document.querySelectorAll(".box-serv");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupContent = document.querySelector(".popup-content");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        popupText.innerHTML = box.getAttribute("data-info"); 
        popup.style.display = "flex";
    });
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

popupContent.addEventListener("click", (event) => {
    event.stopPropagation();
});
const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");

toggleMenu.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});


