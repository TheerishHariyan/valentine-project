const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const btnGroup = document.getElementById('btn-group');
const mainQuestion = document.getElementById('main-question');
const successText = document.getElementById('success-text');
const loveBanner = document.getElementById('love-banner');
const bannerText = document.getElementById('banner-text');
const heartsContainer = document.getElementById('hearts-container');

// Text strings cycling sequentially in the bottom element
const quotes = [
    "The moment I realized you are special! ✨",
    "Every smile of yours makes my day 🥰",
    "The hands I wanna hold forever 🤝",
    "I Lovee Youu Myy Nevaas ❤️"
];
let quoteIndex = 0;

// Escape movement system for the negative action choice
function moveNoButton() {
    const padding = 60;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Blocks clicks from evaluating on mobile displays
    moveNoButton();
});

// Response sequence executed upon target acceptance action
yesBtn.addEventListener('click', () => {
    btnGroup.classList.add('hidden');       
    mainQuestion.classList.add('hidden');   
    successText.classList.remove('hidden'); 
    loveBanner.classList.remove('hidden');  
    
    cycleQuotes();
    setInterval(cycleQuotes, 3000);         // Rotates ticker strings every 3000ms
    setInterval(createHeart, 300);          // Fires background particle stream
});

function cycleQuotes() {
    bannerText.style.opacity = 0;
    setTimeout(() => {
        bannerText.textContent = quotes[quoteIndex];
        bannerText.style.opacity = 1;
        bannerText.style.transition = 'opacity 0.5s ease';
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 500);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const shapes = ['❤️', '💖', '✨', '🌸', '💕'];
    heart.innerText = shapes[Math.floor(Math.random() * shapes.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 1 + 1 + 'rem';
    
    heartsContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}