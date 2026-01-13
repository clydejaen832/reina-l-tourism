const settings = [
    "theme", "bgAnim", "sound", "textSize", "lang", "motion"
];

settings.forEach(key => {
    const el = document.getElementById(key + "Setting");
    if (!el) return;

    // Load saved setting
    const saved = localStorage.getItem(key);
    if (saved) el.value = saved;

    // Save on change
    el.addEventListener("change", () => {
        localStorage.setItem(key, el.value);
    });
});
