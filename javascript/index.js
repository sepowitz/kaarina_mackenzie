var $galleryContainer = $('.gallery-container');
var $mobileNav = $('.mobile-nav');
var $navTrigger = $('.js_nav-trigger');
var $body = $('body');

(function($) {
  $('.lightbox').swipebox();
})($);

$('.dropdown-trigger').hover(function(){
  let $dropdown = $(this).children('.dropdown');
  if(!$dropdown.hasClass('active')) {
    $dropdown.addClass('active')
  } else {
    $dropdown.removeClass('active')
  }
});

$('.js_grid-trigger').on('click', function() {
  if($galleryContainer.hasClass('grid-view')){ return; }
  if($galleryContainer.hasClass('slider-view')) { $galleryContainer.removeClass('slider-view').addClass('grid-view');}
  return;
})

$('.js_slider-trigger').on('click', function() {
  if($galleryContainer.hasClass('slider-view')){ return; }
  if($galleryContainer.hasClass('grid-view')) { $galleryContainer.removeClass('grid-view').addClass('slider-view');}
  return;
})

$navTrigger.on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $mobileNav.toggleClass('active');
  $body.toggleClass('no-scroll');
})
