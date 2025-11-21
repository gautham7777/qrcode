document.addEventListener('DOMContentLoaded', () => {
    const launchBtn = document.getElementById('launch-btn');
    const spaceship = document.getElementById('spaceship');
    const landingSection = document.getElementById('landing-section');
    const qrSection = document.getElementById('qr-section');
    const content = document.querySelector('.content');

    // Only run this if we are on the landing page (checks for launch button)
    if(launchBtn) {
        launchBtn.addEventListener('click', () => {
            // 1. Lock the button immediately
            launchBtn.disabled = true;
            launchBtn.style.opacity = "0.5";
            launchBtn.style.cursor = "wait";
            launchBtn.innerText = "IGNITION...";

            // 2. Play Sound
            const audio = new Audio('assets/intro.mp3');
            audio.play().catch(err => console.log("Audio error:", err));

            // 3. Animate
            spaceship.classList.add('fly-out');
            content.style.opacity = '0';

            // 4. Switch Screens after 3 seconds
            setTimeout(() => {
                landingSection.style.display = 'none';
                qrSection.style.display = 'flex';
                
                // Fade in effect
                setTimeout(() => {
                    qrSection.style.opacity = '1';
                }, 50);
            }, 3000);
        });
    }
});
