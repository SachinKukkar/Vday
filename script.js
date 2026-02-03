function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-bg');
    const hearts = ['♥', '💕', '💖', '💗', '💜', '💙'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 6 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartsContainer.appendChild(heart);
    }
}

function moveNonButton() {
    const button = document.getElementById('nonButton');
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const maxButtonX = screenWidth - buttonWidth;
    const maxButtonY = screenHeight - buttonHeight;

    const marginTop = 12 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    const maxScreenX = screenWidth - buttonWidth;
    const maxScreenY = screenHeight - buttonHeight - marginTop;

    let newX = getRandomNumber(0, maxScreenX);
    let newY = getRandomNumber(0, maxScreenY);

    newX = Math.min(Math.max(newX, 0), maxButtonX);
    newY = Math.min(Math.max(newY, marginTop), maxButtonY);

    button.style.position = 'fixed';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    
    // Change text to make it more playful
    const noTexts = ['😿 No', '😹 Try again!', '😼 Nope!', '😸 Not happening!', '😺 Nice try!'];
    button.innerHTML = noTexts[Math.floor(Math.random() * noTexts.length)];
}

function initialize() {
    createFloatingHearts();
    
    const nonButton = document.getElementById('nonButton');
    const ouiButton = document.getElementById('ouiButton');
    const img = document.querySelector('img');
    
    if (nonButton) {
        nonButton.addEventListener('mouseenter', moveNonButton);
        nonButton.addEventListener('click', moveNonButton);
        nonButton.addEventListener('mouseenter', function() {
            if (img) img.src = 'img/cats-sad.gif';
        });
    }
    
    if (ouiButton && img) {
        ouiButton.addEventListener('mouseenter', function() {
            img.src = 'img/love-cat.gif';
        });
    }
    
    window.addEventListener('resize', function() {
        if (nonButton && nonButton.style.position === 'fixed') {
            moveNonButton();
        }
    });
}

document.addEventListener('DOMContentLoaded', initialize);
