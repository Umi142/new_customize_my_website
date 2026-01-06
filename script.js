// --- 1. Back to Top Button Logic ---
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    // Show button after scrolling down 300px
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// --- 2. Interactive Sound Feature  ---

// Link to local file in the Sound folder
const clickSound = new Audio('Sound/laugh.mp3');

// Select all cat images
const catImages = document.querySelectorAll('.cat-box img');

catImages.forEach(image => {
    image.addEventListener('click', () => {
        // Reset sound to start (allows rapid clicking)
        clickSound.currentTime = 0; 
        clickSound.play();
        
        // Visual feedback: brief shrink and grow
        image.style.transform = "scale(0.95)";
        setTimeout(() => {
            image.style.transform = "scale(1.05)";
        }, 100);
    });
});
