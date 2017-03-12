//Variables
var $contentWrapper = $('.content-wrapper');
var $mobileNav = $('.mobile-nav');
var $navTrigger = $('.js_nav-trigger');
var $body = $('body');
var $image;

//Lightbox
(function($) {
  $('.lightbox').swipebox()
})($);

//Nav Dropdown
$('.dropdown-trigger').hover(function(){
  let $dropdown = $(this).children('.dropdown');
  if(!$dropdown.hasClass('active')) {
    $dropdown.addClass('active')
  } else {
    $dropdown.removeClass('active')
  }
});

//Gallery View Switchers
$('.js_grid-trigger').on('click', function() {
  if($contentWrapper.hasClass('grid-view')){ return; }
  if($contentWrapper.hasClass('slider-view')) { $contentWrapper.removeClass('slider-view').addClass('grid-view');}
  return;
})

$('.js_slider-trigger').on('click', function() {
  if($contentWrapper.hasClass('slider-view')){ return; }
  if($contentWrapper.hasClass('grid-view')) { $contentWrapper.removeClass('grid-view').addClass('slider-view');}
  return;
})

//Mobile Nav
$navTrigger.on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $mobileNav.toggleClass('active');
  $body.toggleClass('no-scroll');
});

//Image preload
(function() {
  var images = document.querySelectorAll('.loading');
  function preload() {
    for (var i = 0; i < images.length; i++) {
      var src,
          image = images[i],
          img   = new Image();
      if(image.nodeName === 'DIV') {
        var bgUrl = image.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, ''),
            src   = bgUrl;
      } else {
        src = image['src'];
       }
       img.onload = function() {
        $image = $(this);
        $image.addClass('loaded');
      }.bind(image);

      img.src = src;
    }
  }
  preload(images);
}());
