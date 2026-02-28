// applySettings.js
document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('themeSetting');
    const fontSelect = document.getElementById('fontSetting');

    // Load saved settings
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedFont = localStorage.getItem('font') || 'Segoe UI, sans-serif';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    document.body.style.fontFamily = savedFont;
    themeSelect.value = savedTheme;
    fontSelect.value = savedFont;

    // Theme change
    themeSelect.addEventListener('change', () => {
        if(themeSelect.value === 'dark'){
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', themeSelect.value);
    });

    // Font change
    fontSelect.addEventListener('change', () => {
        document.body.style.fontFamily = fontSelect.value;
        localStorage.setItem('font', fontSelect.value);
    });
});
}
