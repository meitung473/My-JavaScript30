const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", (e) => {
        e.target.classList.toggle("open");
    });
    panel.addEventListener("transitionend", (e) => {
        console.log(e.propertyName);
        if (e.propertyName.includes("flex")) {
            e.target.classList.toggle("open-active");
        }
    });
});
