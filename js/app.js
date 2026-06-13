const btnScroll = document.querySelector('.btn-scroll');

btnScroll.addEventListener('click', () => {

    document.querySelector('.timeline').scrollIntoView({
        behavior: 'smooth'
    });

});




const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    threshold: 0.2
});

reveals.forEach(item => {
    observer.observe(item);
});




const birthDate = new Date("2026-12-31 12:00:00");

function updateCountdown() {

    const now = new Date();

    const diff = birthDate - now;

    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes =
        Math.floor(diff / (1000 * 60)) % 60;

    const seconds =
        Math.floor(diff / 1000) % 60;

    document.getElementById("days").textContent =
        days.toString().padStart(2, '0');

    document.getElementById("hours").textContent =
        hours.toString().padStart(2, '0');

    document.getElementById("minutes").textContent =
        minutes.toString().padStart(2, '0');

    document.getElementById("seconds").textContent =
        seconds.toString().padStart(2, '0');

}

updateCountdown();

setInterval(updateCountdown, 1000);





const canvas = document.getElementById('particles');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 3 + 1;

        this.speedY = Math.random() * 0.5 + 0.2;

    }

    update() {

        this.y -= this.speedY;

        if (this.y < 0) {

            this.y = canvas.height;
            this.x = Math.random() * canvas.width;

        }

    }

    draw() {

        ctx.beginPath();

        ctx.fillStyle =
            "rgba(255,255,255,0.8)";

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

}

for (let i = 0; i < 100; i++) {

    particles.push(new Particle());

}

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(particle => {

        particle.update();
        particle.draw();

    });

    requestAnimationFrame(
        animateParticles
    );

}

animateParticles();






window.addEventListener('resize', () => {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

});


function createHeart() {

    const heart =
        document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML = '❤️';

    heart.style.left =
        Math.random() * window.innerWidth + 'px';

    heart.style.bottom = '0px';

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 3000);

}






const gift =
    document.getElementById('giftBox');

const finalSection =
    document.getElementById('finalSection');

gift.addEventListener('click', () => {

    launchConfetti();

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 200);

    }

    setTimeout(() => {

        finalSection.classList.remove('hidden');

        finalSection.scrollIntoView({
            behavior: 'smooth'
        });

    }, 3000);

});



function launchConfetti() {

    const colors = [

        '#809bce',
        '#95b8d1',
        '#b8e0d2',
        '#d6eadf',
        '#eac4d5'

    ];

    for (let i = 0; i < 250; i++) {

        const confetti =
            document.createElement('div');

        confetti.classList.add('confetti');

        confetti.style.left =
            Math.random() * 200 + 'vw';

        confetti.style.background =
            colors[
            Math.floor(
                Math.random() * colors.length
            )
            ];

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + 's';

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}



const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML =
            "⏸ Pausar música";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML =
            "▶ Reproducir nuestra canción";

        playing = false;

    }

});


const volumeSlider =
    document.getElementById("volumeSlider");

music.volume = 0.5;

volumeSlider.addEventListener("input", () => {

    music.volume =
        volumeSlider.value / 100;

});



