let img = document.querySelectorAll('.slider_img img')
let btn_prev = document.querySelector('#btn_prev')
let btn_next = document.querySelector('#btn_next')
let slider = document.querySelector(".slider")

let i = 0;

btn_next.onclick = function () {
    img[i].style.display = "none";
    i++
    if (i >= img.length) {
        i = 0;
    }
    img[i].style.display = "block";
}

btn_prev.onclick = function () {
    img[i].style.display = "none";
    i--
    if (i < 0) {
        i = img.length - 1
    }
    img[i].style.display = "block";
}

function sliderNext() {
    img[i].style.display = "none"
    i++
    if (i >= img.length) {
        i = 0;
    }
    img[i].style.display = "block"
}

function start() {
    return int = setInterval(sliderNext, 2000)
}
start();

function stop() {
    clearInterval(int)
}

slider.onmouseover = function () {
    stop();
}

slider.onmouseout = function () {
    start();
}