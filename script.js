document.addEventListener('DOMContentLoaded', () => {
    // Silently precache all theme images in the background to ensure instantaneous zero-latency switching
    const preloadImages = [
        "Images/gradient_walls (0).png",
        "Images/gradient_walls (1).jpg",
        "Images/gradient_walls (2).jpg",
        "Images/gradient_walls (3).jpg",
        "Images/gradient_walls (4).jpg",
        "Images/gradient_walls (5).jpg",
        "Images/gradient_walls (6).jpg",
        "Images/gradient_walls (7).jpg",
        "Images/gradient_walls (8).jpg"
    ];
    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    const themeBtn = document.getElementById('theme-btn');
    let currentThemeIndex = 0;
    // We have 9 states:
    // 0 = Default setup
    // 1 to 8 = theme-X classes
    const themes = [
        '', 
        'theme-1', 
        'theme-2', 
        'theme-3', 
        'theme-4', 
        'theme-5', 
        'theme-6', 
        'theme-7',
        'theme-8'
    ];

    themeBtn.addEventListener('click', () => {
        // Remove current theme class if it exists and isn't empty
        if (themes[currentThemeIndex]) {
            document.body.classList.remove(themes[currentThemeIndex]);
        }

        // Move to the next theme
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;

        // Add new theme        // Apply new theme class
        if (themes[currentThemeIndex]) {
            document.body.classList.add(themes[currentThemeIndex]);
        }
    });

    // BD Time Clock
    function updateBDTime() {
        const timeElement = document.getElementById('bd-time');
        if (timeElement) {
            const options = {
                timeZone: 'Asia/Dhaka',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            const formatter = new Intl.DateTimeFormat('en-US', options);
            timeElement.innerHTML = `Local Time (BD): ${formatter.format(new Date())}`;
        }
    }

    // Initialize and set interval for real-time ticking
    updateBDTime();
    setInterval(updateBDTime, 1000);

    // Back to Top Button Logic
    const toTopBtn = document.getElementById('to-top-btn');
    const logoIcon = document.getElementById('logo-icon');
    const upArrowIcon = document.getElementById('up-arrow-icon');
    
    if (toTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                toTopBtn.classList.add('scrolled');
            } else {
                toTopBtn.classList.remove('scrolled');
            }
        });

        toTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Clear the URL hash without reloading the page
            history.replaceState(null, null, window.location.pathname + window.location.search);
        });
    }
});
