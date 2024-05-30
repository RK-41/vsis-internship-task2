const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

let currentSlide = 0;

function changeSlide(slideNumber) {
	images.forEach((image) => image.classList.remove('active'));
	images[slideNumber].classList.add('active');
	currentSlide = slideNumber;
}

// Functionality for automatic slide transition
setInterval(() => {
	currentSlide = (currentSlide + 1) % images.length;
	changeSlide(currentSlide);
}, 3000); // Changes slides every 5 seconds
