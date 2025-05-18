// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonial slider functionality
const testimonialItems = [
    {
        text: "Global Trend's market analysis provided us with the clarity we needed to expand into three new markets successfully. Their insights were spot-on and actionable.",
        author: "Sarah Johnson",
        role: "CEO, TechForward Inc."
    },
    {
        text: "The strategic consulting from Global Trend transformed our approach to emerging markets. We've seen a 35% increase in market share within 12 months.",
        author: "Michael Chen",
        role: "Director, Global Expansion"
    },
    {
        text: "Working with Global Trend gave us the competitive edge we needed. Their data analytics are unparalleled in the industry.",
        author: "Emma Rodriguez",
        role: "VP of Strategy, NexGen Solutions"
    }
];

let currentTestimonial = 0;
const testimonialElement = document.querySelector('.testimonial-item');

function updateTestimonial() {
    const testimonial = testimonialItems[currentTestimonial];
    testimonialElement.innerHTML = `
        <div class="testimonial-text">
            ${testimonial.text}
        </div>
        <div class="testimonial-author">${testimonial.author}</div>
        <div class="testimonial-role">${testimonial.role}</div>
    `;
    
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
}

// Change testimonial every 5 seconds
setInterval(updateTestimonial, 5000);

// Form submission handling
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Here you would typically send the email to your server
    console.log('Subscribed email:', email);
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
    this.querySelector('input').value = '';
});

// Mobile menu toggle (would need additional HTML elements)
// This is a placeholder for future mobile menu implementation