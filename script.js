document.addEventListener('DOMContentLoaded', function() {
    
    // ১. Initialize AOS (Scroll Animations)
    AOS.init({
        duration: 900,
        once: true,
        offset: 100
    });

    // ২. Typing Effect Mechanism (Inspired by Video 1)
    const terms = ["Computer Science Student.", "Digital Creator.", "Logic Lover."];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 60;
    const delayBetweenWords = 2000;

    function handleTyping() {
        const currentWord = terms[wordIndex];
        const typedTextElement = document.querySelector('.typed-text');

        if (!isDeleting) {
            typedTextElement.textContent = currentWord.substring(0, letterIndex + 1);
            letterIndex++;

            if (letterIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(handleTyping, delayBetweenWords);
                return;
            }
        } else {
            typedTextElement.textContent = currentWord.substring(0, letterIndex - 1);
            letterIndex--;

            if (letterIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % terms.length;
            }
        }

        setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    }

    if(document.querySelector('.typed-text')) {
        handleTyping();
    }

    // ৩. 3D Tilt Effect Configuration (Inspired by Video 2)
    VanillaTilt.init(document.querySelectorAll(".skill-chip, .project-card"), {
        max: 10,
        speed: 300,
        glare: true,
        "max-glare": 0.12,
    });
});