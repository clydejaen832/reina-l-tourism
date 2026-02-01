function openPage(page) {
    window.location.href = page;
}

/* SETTINGS */
function applySettings() {
    const theme = localStorage.getItem('theme') || 'light';
    const textSize = localStorage.getItem('textSize') || 'normal';
    const scrollAnim = localStorage.getItem('scrollAnim') || 'on';

    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.body.classList.toggle('large-text', textSize === 'large');
    document.body.classList.toggle('no-scroll-anim', scrollAnim === 'off');
}

/* SCROLL FADE */
const faders = document.querySelectorAll('.fade');

function handleScroll() {
    if (document.body.classList.contains('no-scroll-anim')) return;

    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('DOMContentLoaded', () => {
    applySettings();
    handleScroll();
});
