// Apply settings from localStorage
function applySettings() {
    const theme = localStorage.getItem('theme') || 'light';
    const textSize = localStorage.getItem('textSize') || 'normal';
    const bgAnim = localStorage.getItem('bgAnim') || 'on';
    const motion = localStorage.getItem('motion') || 'off';

    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.body.classList.toggle('large-text', textSize === 'large');
    document.body.classList.toggle('bg-animated', bgAnim === 'on');
    document.body.classList.toggle('reduced-motion', motion === 'on');

    // Animate spots if bg animation is on
    if(bgAnim === 'on') {
        const fades = document.querySelectorAll('.fade');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.25 });

        fades.forEach(el => observer.observe(el));
    } else {
        // If animation off, show all instantly
        document.querySelectorAll('.fade').forEach(el => {
            el.classList.add('visible');
            el.style.transition = 'none';
        });
    }
}
