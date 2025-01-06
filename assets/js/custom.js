$(document).ready(function () {
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

  if ($('.testimonials-slider').length) {
    $('.testimonials-slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: $('.ts-dots')
    });
  }
  if ($('.vpi-cont').length) {
    $('.vpi-cont').on('click', function () {
      // Find the closest video related to the clicked icon
      let video = $(this).closest('.ip-vid-cont').find('video');

      if (video.length) {
        video[0].play();

        // Hide the icon when the video starts playing
        video.on('play', () => {
          $(this).hide();
        });

        // Show the icon when the video is paused
        video.on('pause', () => {
          $(this).show();
        });
      }
    });
  }

});