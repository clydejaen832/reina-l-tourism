// Get dropdowns if they exist
const themeSelect = document.getElementById('themeSetting');
const textSizeSelect = document.getElementById('textSizeSetting');
const bgAnimSelect = document.getElementById('bgAnimSetting');
const motionSelect = document.getElementById('motionSetting');
const langSelect = document.getElementById('langSetting'); // optional

// Function to apply settings
function applySettings() {
    const theme = localStorage.getItem('theme') || 'light';
    const textSize = localStorage.getItem('textSize') || 'normal';
    const bgAnim = localStorage.getItem('bgAnim') || 'on';
    const motion = localStorage.getItem('motion') || 'off';
    const lang = localStorage.getItem('lang') || 'en';

    // Toggle CSS classes on body
    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.body.classList.toggle('large-text', textSize === 'large');
    document.body.classList.toggle('bg-animated', bgAnim === 'on');
    document.body.classList.toggle('reduced-motion', motion === 'on');

    // Update dropdowns if present
    if(themeSelect) themeSelect.value = theme;
    if(textSizeSelect) textSizeSelect.value = textSize;
    if(bgAnimSelect) bgAnimSelect.value = bgAnim;
    if(motionSelect) motionSelect.value = motion;
    if(langSelect) langSelect.value = lang;
}

// Save a setting and reapply immediately
function saveSetting(key, value) {
    localStorage.setItem(key, value);
    applySettings();
}

// Add change listeners if dropdowns exist
if(themeSelect) themeSelect.addEventListener('change', e => saveSetting('theme', e.target.value));
if(textSizeSelect) textSizeSelect.addEventListener('change', e => saveSetting('textSize', e.target.value));
if(bgAnimSelect) bgAnimSelect.addEventListener('change', e => saveSetting('bgAnim', e.target.value));
if(motionSelect) motionSelect.addEventListener('change', e => saveSetting('motion', e.target.value));
if(langSelect) langSelect.addEventListener('change', e => saveSetting('lang', e.target.value));

// Apply settings immediately on page load
window.addEventListener('DOMContentLoaded', applySettings);
