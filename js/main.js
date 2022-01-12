//counter
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById("value");
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


function animateId(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById("id");
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value", 100000, 169872 ,2000);
animateId("id", 100000, 168564 ,2000);
//counter end

//navbar
const navItem = document.querySelector(".nav-item");
const burger = document.querySelector(".burger");

burger.addEventListener('click', mobileMenu);
function mobileMenu() {
    burger.classList.toggle("active")
    navItem.classList.toggle("active")
}
//navbar end

//sticky
window.addEventListener("scroll", function () {
    var navItem = document.querySelector('.navbar');
    navItem.classList.toggle("fixed", window.scrollY > 0);
})