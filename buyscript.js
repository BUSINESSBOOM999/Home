document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);

    const form = document.getElementById('order-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const website = document.getElementById('website').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Name: ${name}\nWebsite: ${website}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;

        window.open(`https://api.whatsapp.com/send?phone=9810539672&text=${encodeURIComponent(whatsappMessage)}`);
    });
});
