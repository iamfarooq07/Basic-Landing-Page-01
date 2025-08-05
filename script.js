
gsap.from(".item", {
    x: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
});
gsap.from(".name", {
    x: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
});
gsap.from(".img", {
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.5,
});
gsap.from(".btn", {
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.5,
});

// const btn = document.querySelector(".btn-1");
// const from = document.querySelector(".form");
// const main = document.querySelector(".main");

// btn.addEventListener("click", () => {

//     main.style.display = "none";
//     from.style.display = "block";
// })
const btn = document.querySelector(".btn-1");
const form = document.querySelector(".form");
const main = document.querySelector(".main");

btn.addEventListener("click", () => {
    form.style.display = "block";
    main.style.display = "none"
    gsap.from(".form", {
        duration: 1,
        opacity: 0,
        y: 30,
    });
});
const menuIcon = document.getElementById("menu-icon");
const menu = document.querySelector('.menus');
console.log(menu);


menuIcon.addEventListener("click", () => {
    if (menuIcon.classList.contains("ri-menu-3-line")) {
        menuIcon.classList.remove("ri-menu-3-line");
        menuIcon.classList.add("ri-close-line");
        menu.style.display = 'block';
    } else {
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-3-line");
    }
});


