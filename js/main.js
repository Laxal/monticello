$(document).on('scroll', function () {
    const scrollTop = $(document).scrollTop();
    // const firstSectionHeight = $('.container-1').height();
    const section2Top = $('.section2').offset().top;
    const section3Top = $('.section3').offset().top;
    const footer = $('.footer').offset().top;
    if (scrollTop >= section2Top - 120) {
        $('.header').addClass('scrolled')
    } else {
        $('.header').removeClass('scrolled')
    }
    if (scrollTop <= section2Top) {
        $('.nav-about').addClass('scrolled')
        $('.nav-projects').removeClass('scrolled')
    } else if (scrollTop <= section3Top) {
        $('.nav-projects').addClass('scrolled')
        $('.nav-about').removeClass('scrolled')
        $('.nav-news').removeClass('scrolled')
    } else if (scrollTop <= footer) {
        $('.nav-news').addClass('scrolled')
        $('.nav-projects').removeClass('scrolled')
        $('.nav-contacts').removeClass('scrolled')
    } else {
        $('.nav-contacts').addClass('scrolled')
        $('.nav-news').removeClass('scrolled')
    }
});