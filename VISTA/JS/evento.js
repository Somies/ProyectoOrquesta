document.addEventListener("DOMContentLoaded", function () {
    // Inicializar Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            668: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    // Agregar evento de clic a las imágenes
    document.querySelectorAll('.card-item').forEach((item) => {
        item.addEventListener('click', () => {
            const badge = item.querySelector('.badge').textContent;
            if (badge === 'MATRIMONIO') {
                document.querySelector('.sub1cuerpo3').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
