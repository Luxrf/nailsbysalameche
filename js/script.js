document.addEventListener('DOMContentLoaded', () => {
    // Animation légère pour le hero
    const hero = document.querySelector('.hero h2');
    hero.style.opacity = 0;
    hero.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        hero.style.opacity = 1;
    }, 500);
});
