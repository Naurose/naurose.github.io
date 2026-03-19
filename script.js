document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    let currentThemeIndex = 0;
    // We have 8 states:
    // 0 = Default setup
    // 1 to 7 = theme-X classes
    const themes = [
        '', 
        'theme-1', 
        'theme-2', 
        'theme-3', 
        'theme-4', 
        'theme-5', 
        'theme-6', 
        'theme-7'
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
});
