document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation start state and observe elements
    const animateElements = document.querySelectorAll('.feature-card, .arch-img, .section-header');
    
    animateElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(el);
    });
    
    // Add dynamic interactive effect to cards based on mouse position
    const hoverCards = document.querySelectorAll('.hover-glow');
    
    hoverCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // App Mockup Interactivity
    const screenWelcome = document.getElementById('screen-welcome');
    const screenSetup = document.getElementById('screen-setup');
    const btnGetStarted = document.getElementById('btn-get-started');
    const heroBtnGetAccess = document.getElementById('hero-get-access');
    const btnStartUsing = document.getElementById('btn-start-using');
    
    const goToSetup = () => {
        if (screenWelcome && screenSetup) {
            screenWelcome.classList.add('hidden-left');
            screenSetup.classList.remove('hidden-right');
        }
    };

    if (btnGetStarted) btnGetStarted.addEventListener('click', goToSetup);
    if (heroBtnGetAccess) heroBtnGetAccess.addEventListener('click', goToSetup);

    if (btnStartUsing) {
        btnStartUsing.addEventListener('click', () => {
            // Reset for demo purposes
            if (screenWelcome && screenSetup) {
                screenSetup.classList.add('hidden-right');
                setTimeout(() => {
                    screenWelcome.classList.remove('hidden-left');
                }, 500);
            }
        });
    }

    // Language selection toggle
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            langOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
});
