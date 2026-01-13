// APPLY SETTINGS ON ANY PAGE

// GET ELEMENTS (if present)
const themeSelect = document.getElementById('themeSetting');
const bgAnimSelect = document.getElementById('bgAnimSetting');
const textSizeSelect = document.getElementById('textSizeSetting');
const langSelect = document.getElementById('langSetting');
const motionSelect = document.getElementById('motionSetting');

// FUNCTION TO APPLY SETTINGS
function applySettings() {
    // THEME MODE
    const theme = localStorage.getItem('theme') || 'light';
    if(theme === 'dark') {
        document.body.style.background = 'linear-gradient(135deg, #033, #065f46)';
        document.body.style.color = '#ecfeff';
    } else {
        document.body.style.background = 'linear-gradient(135deg, #0f766e, #5eead4)';
        document.body.style.color = '#033';
    }

    // TEXT SIZE
    const textSize = localStorage.getItem('textSize') || 'normal';
    document.body.style.fontSize = textSize === 'large' ? '1.2rem' : '1rem';

    // BACKGROUND ANIMATION
    const bgAnim = localStorage.getItem('bgAnim') || 'on';
    if(bgAnim === 'on') {
        document.body.classList.add('bg-animated');
    } else {
        document.body.classList.remove('bg-animated');
    }

    // REDUCED MOTION
    const motion = localStorage.getItem('motion') || 'off';
    document.body.style.transition = motion === 'on' ? 'none' : '';

    // LANGUAGE / TONE
    const lang = localStorage.getItem('lang') || 'en';
    // Placeholder: implement language switching if needed

    // Update Settings dropdowns if present on page
    if(themeSelect) themeSelect.value = theme;
    if(textSizeSelect) textSizeSelect.value = textSize;
    if(bgAnimSelect) bgAnimSelect.value = bgAnim;
    if(motionSelect) motionSelect.value = motion;
    if(langSelect) langSelect.value = lang;
}

// APPLY SETTINGS ON PAGE LOAD
window.addEventListener('load', applySettings);
