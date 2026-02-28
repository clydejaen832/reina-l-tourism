// =======================
// APPLY SETTINGS SCRIPT
// =======================

// Elements
const themeSelect = document.getElementById('themeSetting');
const fontSelect = document.getElementById('fontSetting');
const langSelect = document.getElementById('langSetting');

// --------------------
// Load saved settings
// --------------------
const savedTheme = localStorage.getItem('themeMode') || 'light';
const savedFont = localStorage.getItem('fontStyle') || 'Segoe UI, sans-serif';
const savedLang = localStorage.getItem('language') || 'en';

// Apply theme
applyTheme(savedTheme);
// Apply font
document.body.style.fontFamily = savedFont;
// Apply language
applyLanguage(savedLang);

// Set selectors to saved values
if(themeSelect) themeSelect.value = savedTheme;
if(fontSelect) fontSelect.value = savedFont;
if(langSelect) langSelect.value = savedLang;

// --------------------
// Event listeners
// --------------------
if(themeSelect) {
    themeSelect.addEventListener('change', () => {
        const theme = themeSelect.value;
        localStorage.setItem('themeMode', theme);
        applyTheme(theme);
    });
}

if(fontSelect) {
    fontSelect.addEventListener('change', () => {
        const font = fontSelect.value;
        document.body.style.fontFamily = font;
        localStorage.setItem('fontStyle', font);
    });
}

if(langSelect) {
    langSelect.addEventListener('change', () => {
        const lang = langSelect.value;
        localStorage.setItem('language', lang);
        applyLanguage(lang);
    });
}

// =======================
// FUNCTIONS
// =======================
function applyTheme(theme) {
    if(theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.style.background = 'url("Front2.jpg") no-repeat center center fixed';
        document.body.style.backgroundSize = 'cover';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.style.background = 'url("Front.jpg") no-repeat center center fixed';
        document.body.style.backgroundSize = 'cover';
    }
}

function applyLanguage(lang) {
    const texts = {
        en: {
            explore: "Explore",
            municipalities: "Municipalities",
            settings: "Settings",
            back: "← Back to Home",
            theme: "Theme Mode",
            bgAnim: "Background Animation",
            sound: "Sound Effects",
            textSize: "Text Size",
            language: "Language / Tone",
            reducedMotion: "Reduced Motion"
        },
        tl: {
            explore: "Tuklasin",
            municipalities: "Mga Bayan",
            settings: "Mga Setting",
            back: "← Bumalik sa Home",
            theme: "Tema",
            bgAnim: "Animasyon ng Background",
            sound: "Mga Sound Effect",
            textSize: "Laki ng Teksto",
            language: "Wika / Tono",
            reducedMotion: "Bawas na Galaw"
        }
    };

    const langData = texts[lang] || texts['en'];

    // Update static elements
    document.querySelectorAll('.explore-btn').forEach(btn => btn.textContent = langData.explore);
    document.querySelectorAll('.section-title').forEach(title => title.textContent = langData.municipalities);
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if(btn.textContent.includes('Back')) btn.textContent = langData.back;
        if(btn.textContent.includes('Significance')) btn.textContent = langData.settings; // optional mapping
    });

    // If you have settings labels
    const settingLabels = {
        themeSetting: langData.theme,
        bgAnimSetting: langData.bgAnim,
        soundSetting: langData.sound,
        textSizeSetting: langData.textSize,
        langSetting: langData.language,
        motionSetting: langData.reducedMotion
    };

    for(const id in settingLabels) {
        const label = document.querySelector(`.setting select#${id}`);
        if(label) {
            const parentSpan = label.closest('.setting').querySelector('span');
            if(parentSpan) parentSpan.textContent = settingLabels[id];
        }
    }
}

// =======================
// SCROLL FADE-IN
// =======================
const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.75 });

fades.forEach(fade => observer.observe(fade));