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

// Additional requirement #13
// --- Vue.js Guestbook Component ---
const { createApp } = Vue;

createApp({
    data() {
        return {
            form: {
                name: '',
                mood: '',
                rating: 5,
                text: ''
            },
            comments: [] 
        }
    },
    methods: {
        addComment() {
            // Get current time formatted
            const now = new Date();
            const timeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

            // Add new entry to the top of the list
            this.comments.unshift({
                ...this.form,
                date: timeString
            });

            // Reset Form
            this.form.name = '';
            this.form.mood = '';
            this.form.rating = 5;
            this.form.text = '';

            // Play laugh sound if it exists
            if (typeof clickSound !== 'undefined') {
                clickSound.play();
            }
        }
    }
}).mount('#app');
