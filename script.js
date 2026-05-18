// 1. Scroll Reveal Logic (ডানদিক থেকে স্লাইড ও টিল্ট হয়ে আসার জন্য)
const revealElements = document.querySelectorAll('.reveal');

const checkReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;
    
    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('active');
        } else {
            el.classList.remove('active'); // স্ক্রোল আপ করলে আবার অ্যানিমেশন হবে
        }
    });
};

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal); // প্রথমবার পেজ লোডেই রান হবে

// 2. 3D Card Interaction Logic (মাউস মুভমেন্ট ট্র্যাকিং)
const cards = document.querySelectorAll('.skill-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width / 2);
        const y = e.clientY - rect.top - (rect.height / 2);
        
        // মাউস অনুযায়ী সামান্য বাঁকানোর ক্যালকুলেশন
        card.style.transform = `rotateY(${x / 5}deg) rotateX(${-y / 5}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        // মাউস সরে গেলে আবার আগের জায়গায় ফিরে আসবে
        card.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0deg)';
    });
});