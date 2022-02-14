setInterval(setClock, 1000);
const hourhand = document.querySelector(".hour-hand");
const minhand = document.querySelector(".min-hand");
const secondhand = document.querySelector(".second-hand");

function setClock() {
    const now = new Date();
    const secRatio = now.getSeconds() / 60;
    const minRatio = (secRatio + now.getMinutes()) / 60;
    const hourRatio = (minRatio + now.getHours()) / 12;

    setRotation(secondhand, secRatio);
    setRotation(minhand, minRatio);
    setRotation(hourhand, hourRatio);
}

function setRotation(hand, rotate) {
    const deg = rotate * 360;
    // hand.style.transform = `rotate(${deg + 90}deg)`;
    hand.style.setProperty("--rotation", deg);
}

setClock();
