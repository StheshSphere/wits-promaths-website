<script>
    const toggleButton = document.querySelector('.nav-toggle');
    const mobileNav = document.getElementById('mobileNav');

    toggleButton.addEventListener('click', () => {
        const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !expanded);
    mobileNav.classList.toggle('active');
    });
</script>
