$(document).ready(function() {
    $('.slide').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        touchThreshold: 10,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
});
