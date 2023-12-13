$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#navbar').addClass('fixed-navbar');
      } else {
        $('#navbar').removeClass('fixed-navbar');
      }
    });
  });

  // jQuery for the lightbox slideshow
  $(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
      loop: true, // Enable looping for the slideshow
      afterShow: function (instance, current) {
        // Close on clicking outside the slideshow
        $(document).on('click', function (e) {
          if (!$(e.target).closest('.fancybox-container').length) {
            instance.close();
          }
        });
      },
    });
  });