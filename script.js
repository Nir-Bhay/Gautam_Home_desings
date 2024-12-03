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
    emailjs.init("your_emailjs_user_id");

    // Event listener for form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevents the page from refreshing
        
        // Send the form data using EmailJS
        emailjs.sendForm("your_service_id", "your_template_id", this)
            .then(function(response) {
                console.log("Message sent successfully", response);
                alert("Thank you for contacting us! We will get back to you soon.");
            })
            .catch(function(error) {
                console.error("Error sending message", error);
                alert("Oops! Something went wrong. Please try again later.");
            });
    });
    
    
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
