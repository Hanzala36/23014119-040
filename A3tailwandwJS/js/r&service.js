    // Scroll to Top Button Logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('form');
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput.value.trim() !== "") {
            alert(`Thank you for subscribing with ${emailInput.value.trim()}!`);
            emailInput.value = '';
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Tooltip for navbar icons
    document.querySelectorAll('nav .fa-solid, nav .fa-regular').forEach(icon => {
        icon.setAttribute('title', icon.classList.contains('fa-magnifying-glass') ? 'Search' :
            icon.classList.contains('fa-globe') ? 'Language' :
                icon.classList.contains('fa-heart') ? 'Favorites' : '');
    });

