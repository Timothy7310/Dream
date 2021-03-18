$(function(){

//     const mainSlider = new Swiper('.main-slider', {
//   // Optional parameters
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });



const swiper = new Swiper('.swiper-container', {
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






});