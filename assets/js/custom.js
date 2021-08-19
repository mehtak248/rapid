$(document).ready(function() {
  $('.navbar-nav .nav-link, .banner-block .btn').on('click', function() {
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top - 250
    }, 500);
    return false;
  });

  $('.navbar-toggler').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.banner-slider').slick({
    arrows: false,
    autoplay: true
  });

  // Product Thumbnail Slider
  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });

  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   vertical:true,
  //   asNavFor: '.slider-for',
  //   dots: false,
  //   focusOnSelect: true,
  //   verticalSwiping:true,
  //   responsive: [{
  //     breakpoint: 992,
  //     settings: {
  //       vertical: false,
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       vertical: false,
  //     }
  //   },
  //   {
  //     breakpoint: 580,
  //     settings: {
  //       vertical: false,
  //       slidesToShow: 3,
  //     }
  //   },
  //   {
  //     breakpoint: 380,
  //     settings: {
  //       vertical: false,
  //       slidesToShow: 2,
  //     }
  //   }
  //   ]
  // });

  // $('.logo-slider').slick({
  //     dots: false,
  //     autoplay: true,
  //     arrows: false,
  //     infinite: false,
  //     speed: 100,
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  // });

  $(document).scroll(function() {
      if ($(document).scrollTop() >= 25) {
          $('header').addClass('fixed');
          $('nav').addClass('js-scrolling');
      } else {
          $('header').removeClass('fixed');
          $('nav').removeClass('js-scrolling');
      }
  });

  // $('#read-more').on('click', function() {
  //     var txt = $(".other-data").is(':visible') ? 'Read More' : 'Read Less';
  //     $(this).text(txt);
  //     $('.other-data').slideToggle();
  // });

  // $('#list').on('click', function(event) {
  //   event.preventDefault();
  //   $(this).toggleClass('active');
  //   $('#grid').toggleClass('active');
  //   $('#products .item').addClass('list-group-item');
  // });

  // $('#grid').on('click', function(event) {
  //   event.preventDefault();
  //   $(this).toggleClass('active');
  //   $('#list').toggleClass('active');
  //   $('#products .item').removeClass('list-group-item');
  //   $('#products .item').addClass('grid-group-item');
  // });
});