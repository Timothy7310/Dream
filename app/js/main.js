$(function(){

  $('#burger').click(function (event) {
        $('.header__burger, .header__burger-span, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
const swiperMain = new Swiper('.main-slider', {
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.main-slider-button--next',
    prevEl: '.main-slider-button--prev',
  },

  speed: 800,
 effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

});


const swiperComments = new Swiper('.comments-slider', {
  loop: true,

  
  // Navigation arrows
  navigation: {
    nextEl: '.comments-slider-button--next',
    prevEl: '.comments-slider-button--prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },



});






});