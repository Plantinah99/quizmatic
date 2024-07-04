const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
    startBtn.textContent = 'Loading...';
    startBtn.disabled = true;
    
    // Simulate loading time
    setTimeout(() => {
        alert('Welcome to the Math Quiz App! Get ready to challenge yourself!');
        startBtn.textContent = 'Start Using the App!';
        startBtn.disabled = false;
    }, 1500);
});

// Add a simple animation to the features
const featureItems = document.querySelectorAll('.features li');
featureItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, 300 * (index + 1));
});

