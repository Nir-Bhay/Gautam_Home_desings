// Responsive navigation menu behavior
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    navLinks.addEventListener("click", () => {
        // Close the menu when a link is clicked (for mobile view)
        if (toggle.checked) {
            toggle.checked = false;
        }
    });
});

 // Initialize EmailJS with your user ID (Get it from EmailJS dashboard)
    
    
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("hover", () => {
            const answer = question.nextElementSibling;  // The answer div is next to the question button
            answer.style.display = (answer.style.display === "block") ? "none" : "block";  // Toggle answer visibility
        });
    });
// Add click event listener for toggle buttons
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const toggleBtn = item.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the answer
        item.classList.toggle('active');
    });
});
// Simple JS for Automatic Sliding of Testimonials
const carousel = document.querySelector('.testimonials-carousel');
let currentIndex = 0;

function moveToNextSlide() {
    const items = document.querySelectorAll('.testimonial-item');
    currentIndex = (currentIndex + 1) % items.length;
    carousel.style.transform = `translateX(-${currentIndex * 340}px)`;
}

setInterval(moveToNextSlide, 3000); // Change every 3 seconds


function toggleServiceContent(serviceId) {
    var content = document.getElementById(serviceId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});