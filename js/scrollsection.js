function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

        if (section) {
            const targetOffset = section.offsetTop;
            const duration = 1000;
            const startingY = window.pageYOffset;
            const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

            const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

            const scroll = () => {
                const elapsed = ('now' in window.performance ? performance.now() : new Date().getTime()) - startTime;
                const progress = Math.min(elapsed / duration, 1);

                window.scrollTo(0, startingY + easeInOutQuad(progress) * (targetOffset - startingY));

                if (progress < 1) requestAnimationFrame(scroll);
            };

            scroll();
        }
    }