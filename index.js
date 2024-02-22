// Get the carousel items
const carouselItems = document.querySelector('.slides').children;
// Initialize index for tracking active item
let currentIndex = 0;

// Function to show next slide
function showNextSlide() {
    carouselItems[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].style.transform = 'translateX(0)';
    console.log(currentIndex);
}

// Automatically switch slides (adjust timing as needed)
setInterval(showNextSlide, 5000); // Change slide every 3 seconds
