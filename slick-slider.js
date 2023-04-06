document.addEventListener("DOMContentLoaded", function (e) {

    // Testimonials
    $('.testimonials-list_list').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $("#testimonials-list-prev"),
        nextArrow: $("#testimonials-list-next"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });

    // Resources Template Gallery
    $('.resouces-gallery_list').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $("#resources-gallery-prev"),
        nextArrow: $("#resources-gallery-next"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
});