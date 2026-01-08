// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply saved preference on page load
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌙';
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button icon and save preference
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// View More Button Functionality
const viewMoreBtn = document.getElementById('view-more-btn');
const hiddenPosts = document.querySelectorAll('.hidden-post');

viewMoreBtn.addEventListener('click', () => {
    // Show hidden posts
    hiddenPosts.forEach(post => {
        post.style.display = 'flex';
    });
    
    // Hide the button after clicking
    viewMoreBtn.style.display = 'none';
});

// Navigation between Home and About Me
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const homePage = document.getElementById('home-page');
const aboutMePage = document.getElementById('about-me-page');

// Show About Me page
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    homePage.style.display = 'none';
    aboutMePage.style.display = 'block';
    
    // Scroll to top of posts container
    document.querySelector('.posts.container').scrollTop = 0;
});

// Show Home page
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    homePage.style.display = 'block';
    aboutMePage.style.display = 'none';
    
    // Reset view more button and hidden posts
    viewMoreBtn.style.display = 'block';
    hiddenPosts.forEach(post => {
        post.style.display = 'none';
    });
    
    // Scroll to top of posts container
    document.querySelector('.posts.container').scrollTop = 0;
});