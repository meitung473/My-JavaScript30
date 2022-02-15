const inputs = document.querySelectorAll(".controls input");
function updateValue(e) {
    const unit = this.getAttribute("data-sizing") || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + unit
    );
}

inputs.forEach((el) => {
    // el.onmousemove = updateValue;
    el.onchange = updateValue;
    el.oninput = updateValue;
});
