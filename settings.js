// ONLY USED ON SETTINGS PAGE

// GET ELEMENTS
const themeSelect = document.getElementById('themeSetting');
const bgAnimSelect = document.getElementById('bgAnimSetting');
const textSizeSelect = document.getElementById('textSizeSetting');
const langSelect = document.getElementById('langSetting');
const motionSelect = document.getElementById('motionSetting');

// SAVE SETTINGS TO LOCALSTORAGE
function saveSettings() {
    localStorage.setItem('theme', themeSelect.value);
    localStorage.setItem('textSize', textSizeSelect.value);
    localStorage.setItem('bgAnim', bgAnimSelect.value);
    localStorage.setItem('motion', motionSelect.value);
    localStorage.setItem('lang', langSelect.value);

    // Immediately apply changes to see effect
    if(typeof applySettings === 'function') applySettings();
}

// LISTEN TO CHANGES
themeSelect.addEventListener('change', saveSettings);
textSizeSelect.addEventListener('change', saveSettings);
bgAnimSelect.addEventListener('change', saveSettings);
motionSelect.addEventListener('change', saveSettings);
langSelect.addEventListener('change', saveSettings);
