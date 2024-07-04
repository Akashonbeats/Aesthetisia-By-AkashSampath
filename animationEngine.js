document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.replace('hidden', 'animate');
                observer.unobserve(entry.target); // Optional: Stop observing after animation
            }
        });
    }, {
        threshold: 0.1 // Adjust as needed
    });

    // Target elements to animate
    const elementsToAnimate = document.querySelectorAll('.description h1, .description p, .photoscontainer div');
    elementsToAnimate.forEach(el => {
        el.classList.add('hidden'); // Initially hide elements
        observer.observe(el);
    });
});