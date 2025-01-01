$(document).ready(function() {
    if ($('.brand-logos').length) {
      $('.brand-logos').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992, // lg screen
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768, // md screen
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576, // sm screen
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    }
  });