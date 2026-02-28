// applySettings.js

// Get setting elements
const themeSelect = document.getElementById('themeSetting');
const bgAnimSelect = document.getElementById('bgAnimSetting');
const soundSelect = document.getElementById('soundSetting');
const textSizeSelect = document.getElementById('textSizeSetting');
const langSelect = document.getElementById('langSetting');
const motionSelect = document.getElementById('motionSetting');
const fontSelect = document.getElementById('fontSetting');

// Load saved settings
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('userSettings')) || {};

    if (settings.theme) themeSelect.value = settings.theme;
    if (settings.bgAnim) bgAnimSelect.value = settings.bgAnim;
    if (settings.sound) soundSelect.value = settings.sound;
    if (settings.textSize) textSizeSelect.value = settings.textSize;
    if (settings.lang) langSelect.value = settings.lang;
    if (settings.motion) motionSelect.value = settings.motion;
    if (settings.font) fontSelect.value = settings.font;

    applySettings();
}

// Save settings
function saveSettings() {
    const settings = {
        theme: themeSelect.value,
        bgAnim: bgAnimSelect.value,
        sound: soundSelect.value,
        textSize: textSizeSelect.value,
        lang: langSelect.value,
        motion: motionSelect.value,
        font: fontSelect.value
    };
    localStorage.setItem('userSettings', JSON.stringify(settings));
    applySettings();
}

// Apply settings
function applySettings() {
    const body = document.body;

    // ===== Theme Mode =====
    if (themeSelect.value === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    // ===== Background Animation =====
    if (bgAnimSelect.value === 'on') {
        body.classList.add('bg-animated');
    } else {
        body.classList.remove('bg-animated');
    }

    // ===== Text Size =====
    if (textSizeSelect.value === 'large') {
        body.classList.add('large-text');
    } else {
        body.classList.remove('large-text');
    }

    // ===== Reduced Motion =====
    if (motionSelect.value === 'on') {
        body.classList.add('reduced-motion');
    } else {
        body.classList.remove('reduced-motion');
    }

    // ===== Font Style =====
    body.style.fontFamily = fontSelect.value;

    // ===== Language / Tone =====
    // Example: just save, implementation depends on your translation system
    localStorage.setItem('lang', langSelect.value);

    // ===== Sound Effects =====
    // Example: just save, implementation depends on your audio triggers
    localStorage.setItem('sound', soundSelect.value);
}

// ===== Event Listeners =====
[themeSelect, bgAnimSelect, soundSelect, textSizeSelect, langSelect, motionSelect, fontSelect]
.forEach(el => el.addEventListener('change', saveSettings));

// Load settings on page load
loadSettings();