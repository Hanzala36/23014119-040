const searchIcon = document.querySelector('.fa-magnifying-glass');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');

    searchIcon.addEventListener('click', () => {
        searchModal.classList.remove('hidden');
        searchModal.classList.add('flex');
    });

    closeSearch.addEventListener('click', () => {
        searchModal.classList.remove('flex');
        searchModal.classList.add('hidden');
    });

    // Close on Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchModal.classList.add('hidden');
        }
    });
    
    const heartIcon = document.querySelector('.fa-heart');
    let liked = false;

    heartIcon.addEventListener('click', () => {
        liked = !liked;
        heartIcon.classList.toggle('fa-regular');
        heartIcon.classList.toggle('fa-solid');
        heartIcon.classList.toggle('text-red-500');
    });
    const globeIcon = document.querySelector('.fa-globe');
    const langMenu = document.getElementById('langMenu');

    globeIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('hidden');
    });

    window.addEventListener('click', () => {
        langMenu.classList.add('hidden');
    });
    const newsletterForm = document.querySelector("form");
    newsletterForm.addEventListener("submit", function (e) {
        const emailInput = this.querySelector("input[type='email']");
        const email = emailInput.value.trim();

        if (!email || !email.includes("@")) {
            e.preventDefault();
            alert("Please enter a valid email address.");
        }
    });