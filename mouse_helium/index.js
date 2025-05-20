const circles = document.querySelectorAll(".circles");
// const nav = document.querySelector("nav")


window.addEventListener('mousemove', (e) => {
    circles.forEach((circle) => {
        circle.style.left = e.x + "px";
        circle.style.top = e.y + "px";
    })
})

// let lastScroll = 0;
// window.addEventListener('scroll', () => {
//
//     if (window.scrollY < lastScroll) {
//         nav.style.top = 0;
//     } else {
//         nav.style.top = "-60px"
//     }
//     lastScroll = window.scrollY
// })