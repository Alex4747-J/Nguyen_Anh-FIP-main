const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide');
        } else {
            entry.target.classList.add('hide');
        }
    });
}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll('section');
hiddenElements.forEach((el) => el.classList.add('hide'));
hiddenElements.forEach((el) => observer.observe(el));


// --- APPAREL SLIDER SCRIPT ---
const sliderContainer = document.querySelector('.slider-container');


if (sliderContainer) {
    const track = document.querySelector('.slider-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.arrow-right');
    const prevButton = document.querySelector('.arrow-left');
    let currentIndex = 0;

    function moveToSlide(targetIndex) {
        track.style.transform = 'translateX(-' + (targetIndex * 100) + '%)';
        currentIndex = targetIndex;
    }

    function showNextSlide() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        moveToSlide(nextIndex);
    }

    function showPrevSlide() {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1; 
        }
        moveToSlide(prevIndex);
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);
}