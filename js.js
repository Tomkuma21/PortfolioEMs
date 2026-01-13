 const swiper = new Swiper('.mySwiper', {
      loop: true,
      spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      autoplay: { delay: 3000 },
    });

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                showMessage('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            showMessage('', ''); // Clear any previous messages

            // Simulate form submission (replace with actual service)
            setTimeout(() => {
                // Here you would integrate with a service like:
                // - EmailJS for client-side email sending
                // - Formspree for form handling
                // - Netlify Forms if deploying there
                // - Your own backend API

                // For now, simulate success
                showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');

                // Reset form
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';

                // Clear success message after 5 seconds
                setTimeout(() => {
                    showMessage('', '');
                }, 5000);

            }, 2000); // Simulate 2-second delay
        });
    }

    // Phone Call and WhatsApp Button Functionality
    const phoneBtn = document.getElementById('phoneBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');

    if (phoneBtn) {
        phoneBtn.addEventListener('click', function(e) {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Track phone call attempts (you can integrate with analytics here)
            console.log('Phone call initiated');

            // The tel: link will automatically open the phone app
            // On desktop, it will prompt the user to call
        });
    }

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Track WhatsApp opens (you can integrate with analytics here)
            console.log('WhatsApp opened');

            // The wa.me link will open WhatsApp
        });
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = 'form-message';

        if (type) {
            formMessage.classList.add(type);
        }
    }
});