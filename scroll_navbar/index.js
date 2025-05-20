// const nav = document.querySelector("nav");
const circles = document.querySelectorAll(".circles")

// let lastScroll = 0;
//
// window.addEventListener("scroll", () => {
//     if (window.scrollY < lastScroll) {
//         nav.style.top = 0;
//     } else {
//         nav.style.top = "-60px";
//     }
//     lastScroll = window.scrollY;
// });

window.addEventListener('mousemove', (e) => {
    circles.forEach((circle) => {
        circle.style.left = e.x + "px";
        circle.style.top = e.y + "px";
    })
})
