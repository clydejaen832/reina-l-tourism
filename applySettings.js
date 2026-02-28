// applySettings.js

function applySettings() {
    const body = document.body;

    // Load saved settings from localStorage
    const settings = JSON.parse(localStorage.getItem('userSettings')) || {};

    // ===== Theme Mode =====
    if (settings.theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    // ===== Background Animation =====
    if (settings.bgAnim === 'on') {
        body.classList.add('bg-animated');
    } else {
        body.classList.remove('bg-animated');
    }

    // ===== Text Size =====
    if (settings.textSize === 'large') {
        body.classList.add('large-text');
    } else {
        body.classList.remove('large-text');
    }

    // ===== Reduced Motion =====
    if (settings.motion === 'on') {
        body.classList.add('reduced-motion');
    } else {
        body.classList.remove('reduced-motion');
    }

    // ===== Font Style =====
    if (settings.font) body.style.fontFamily = settings.font;

    // ===== Language / Tone =====
    if (settings.lang) localStorage.setItem('lang', settings.lang);

    // ===== Sound Effects =====
    if (settings.sound) localStorage.setItem('sound', settings.sound);
}

// Apply immediately on page load
document.addEventListener('DOMContentLoaded', applySettings);

// For settings page: attach change listeners to save changes
const themeSelect = document.getElementById('themeSetting');
const bgAnimSelect = document.getElementById('bgAnimSetting');
const soundSelect = document.getElementById('soundSetting');
const textSizeSelect = document.getElementById('textSizeSetting');
const langSelect = document.getElementById('langSetting');
const motionSelect = document.getElementById('motionSetting');
const fontSelect = document.getElementById('fontSetting');

if (themeSelect) {
    [themeSelect, bgAnimSelect, soundSelect, textSizeSelect, langSelect, motionSelect, fontSelect]
    .forEach(el => el.addEventListener('change', () => {
        const newSettings = {
            theme: themeSelect.value,
            bgAnim: bgAnimSelect.value,
            sound: soundSelect.value,
            textSize: textSizeSelect.value,
            lang: langSelect.value,
            motion: motionSelect.value,
            font: fontSelect.value
        };
        localStorage.setItem('userSettings', JSON.stringify(newSettings));
        applySettings();
    }));
}