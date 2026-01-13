document.body.classList.toggle(
    "dark",
    localStorage.getItem("theme") === "dark"
);

if (localStorage.getItem("textSize") === "large") {
    document.body.style.fontSize = "18px";
}
