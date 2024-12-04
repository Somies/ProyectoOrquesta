/*MOVER EL SLEIDER O LOS ICONOS */
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
        autoplay: {
            delay: 3000, // Tiempo en milisegundos entre transiciones (5 segundos)
            disableOnInteraction: false, // Sigue reproduciendo después de interacción manual
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
/*LLAMAR A SUS TARJETAS */
    // Agregar evento de clic a las imágenes
    document.querySelectorAll('.card-item').forEach((item) => {
        item.addEventListener('click', () => {
            const badge = item.querySelector('.badge').textContent;
            if (badge === 'CUMPLEAÑOS') {
                document.querySelector('.sub1cuerpo3').scrollIntoView({ behavior: 'smooth' });
            }
            if (badge === 'MATRIMONIO') {
                document.querySelector('.sub2cuerpo3').scrollIntoView({ behavior: 'smooth' });
            }
            if (badge === 'PRESENTACIONES') {
                document.querySelector('.sub3cuerpo3').scrollIntoView({ behavior: 'smooth' });
            }
            if (badge === '50 AÑOS') {
                document.querySelector('.sub4cuerpo3').scrollIntoView({ behavior: 'smooth' });
            }
            if (badge === 'BIENVENIDAS') {
                document.querySelector('.sub5cuerpo3').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

