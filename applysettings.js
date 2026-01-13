// APPLY SETTINGS ON ANY PAGE
function applySettings() {
    // THEME MODE
    const theme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', theme === 'dark');

    // TEXT SIZE
    const textSize = localStorage.getItem('textSize') || 'normal';
    document.body.classList.toggle('large-text', textSize === 'large');

    // BACKGROUND ANIMATION
    const bgAnim = localStorage.getItem('bgAnim') || 'on';
    document.body.classList.toggle('bg-animated', bgAnim === 'on');

    // REDUCED MOTION
    const motion = localStorage.getItem('motion') || 'off';
    document.body.style.transition = motion === 'on' ? 'none' : '';

    // LANGUAGE / TONE (placeholder)
    const lang = localStorage.getItem('lang') || 'en';

    // UPDATE SETTINGS DROPDOWNS IF PRESENT
    const themeSelect = document.getElementById('themeSetting');
    const textSizeSelect = document.getElementById('textSizeSetting');
    const bgAnimSelect = document.getElementById('bgAnimSetting');
    const motionSelect = document.getElementById('motionSetting');
    const langSelect = document.getElementById('langSetting');

    if(themeSelect) themeSelect.value = theme;
    if(textSizeSelect) textSizeSelect.value = textSize;
    if(bgAnimSelect) bgAnimSelect.value = bgAnim;
    if(motionSelect) motionSelect.value = motion;
    if(langSelect) langSelect.value = lang;
}

// RUN SETTINGS ON PAGE LOAD
window.addEventListener('load', applySettings);
