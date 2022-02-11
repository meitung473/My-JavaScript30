function playSound(e) {
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    //
    audio.addEventListener("ended", function () {
        key.classList.remove("playing");
    });
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
    key.addEventListener("transitionend", function (e) {
        if (e.propertyName !== "transform") return;
        e.target.classList.remove("playing");
    })
);
