const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.Nail-grid img,  section');
hiddenElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});