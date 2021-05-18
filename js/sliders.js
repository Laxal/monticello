$(document).ready(function () {
    $('.section1-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        pauseOnHover: false,
        pauseOnDotsHover: true,
    });

    $('.section3__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        pauseOnHover: false,
        pauseOnDotsHover: true,
    })
});