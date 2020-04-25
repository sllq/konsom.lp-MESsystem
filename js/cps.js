document.writeln('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>');
document.writeln('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>');
// $('head').append('<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="crossorigin="anonymous"></script>');
$( document ).ready(function() {
    $('.relative-slider-1').slick({
        slidesToShow: 3,
        adaptiveHeight: false,
        useTransform: true,
        dots: false,
        dotsClass: "slick-dots-konsom",
        arrows: true,
        prevArrow: $('#prev-item-1'),
        nextArrow: $('#next-item-1'),
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }]
    });
    $('.relative-slider-2').slick({
        slidesToShow: 3,
        adaptiveHeight: false,
        useTransform: true,
        dots: false,
        dotsClass: "slick-dots-konsom",
        arrows: true,
        prevArrow: $('#prev-item-2'),
        nextArrow: $('#next-item-2'),
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }]
    });
    $('.relative-slider-3').slick({
        slidesToShow: 3,
        adaptiveHeight: false,
        useTransform: true,
        dots: false,
        dotsClass: "slick-dots-konsom",
        arrows: true,
        prevArrow: $('#prev-item-3'),
        nextArrow: $('#next-item-3'),
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }]
    });
});