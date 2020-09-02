var swiper = new Swiper('.textUser-container', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.textUser-button-next',
        prevEl: '.textUser-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.8,
            spaceBetween: 30
        },
        // when window width is >= 640px
        990: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
});