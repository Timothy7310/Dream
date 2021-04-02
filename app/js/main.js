
$(function () {

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

  const swiperBest = new Swiper('.best__slider', {
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.best-slider-button--next',
      prevEl: '.best-slider-button--prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 35,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 35,
        centeredSlides: false,
      },
      767: {
        slidesPerView: 1,
      },
    },



  });



  // Sign Up Modal

  var SignUpToggle = document.querySelector('.sign-up-toggle');
  var SignUpToggleMobile = document.querySelector('.sign-up--mb ');
  SignUpToggle.addEventListener('click', openSignUpModal);
  SignUpToggleMobile.addEventListener('click', openSignUpModal);

  var closeModalButtonSignUp = document.querySelector('.button-close-sign-up');
  closeModalButtonSignUp.addEventListener('click', closeSignUpModal);

  // Настройка фокуса в модальном окне

  var focusedElementBeforeModal;

  var modalSignUp = document.querySelector('.modal-sign-up__dialog');
  var modalOverlaySignUp = document.querySelector('.modal-sign-up__overlay');


  function openSignUpModal() {
    var modalOverlaySignUp = document.querySelector('.modal-sign-up__overlay');
    var modalDialogSignUp = document.querySelector('.modal-sign-up__dialog');
    modalOverlaySignUp.classList.add("modal-sign-up__overlay--visible")
    modalDialogSignUp.classList.add("modal-sign-up__dialog--visible");
    document.querySelector('html').classList.add("hystmodal-opened");
    // Сохранение фокуса
    focusedElementBeforeModal = document.activeElement;

    modalSignUp.addEventListener('keydown', trapTabKey);

    // Закрытие при клике вне формы
    modalOverlaySignUp.addEventListener('click', closeSignUpModal);

    // Находим все элементы для фокуса 
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = modalSignUp.querySelectorAll(focusableElementsString);
    // // Convert NodeList to Array
    focusableElements = Array.prototype.slice.call(focusableElements);

    var firstTabStop = focusableElements[0];
    var lastTabStop = focusableElements[focusableElements.length - 1];
    firstTabStop.focus();

    function trapTabKey(e) {
      // Check for TAB key press
      if (e.keyCode === 9) {

        // SHIFT + TAB
        if (e.shiftKey) {
          if (document.activeElement === firstTabStop) {
            e.preventDefault();
            lastTabStop.focus();
          }

          // TAB
        } else {
          if (document.activeElement === lastTabStop) {
            e.preventDefault();
            firstTabStop.focus();
          }
        }
      }
    }

  }




  function closeSignUpModal() {

    var modalOverlaySignUp = document.querySelector('.modal-sign-up__overlay');
    var modalDialogSignUp = document.querySelector('.modal-sign-up__dialog');

    modalOverlaySignUp.classList.remove("modal-sign-up__overlay--visible")
    modalDialogSignUp.classList.remove("modal-sign-up__dialog--visible");
    document.querySelector('html').classList.remove("hystmodal-opened");

    // Set focus back to element that had it before the modal was opened
    focusedElementBeforeModal.focus();
  }


  // проверка на пустоту заполненных полей
  $('.form-modal').submit(function () {
    if (document.forms.email.value == '' || document.form.password.value == "") {
      valid = false;
      return valid;
    } else {
      closeSignUpModal();
    }
  });

  // Закрытие на esc
  $(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      closeSignUpModal()
    }
  });



  // Sign In Modal

  var SignInToggle = document.querySelector('.sign-in-toggle');
  var SignInToggleMobile = document.querySelector('.sign-in--mb');
  SignInToggle.addEventListener('click', openSignInModal);
  SignInToggleMobile.addEventListener('click', openSignInModal);

  var closeModalButtonSignIn = document.querySelector('.button-close-sign-in');
  closeModalButtonSignIn.addEventListener('click', closeSignInModal);

  // Настройка фокуса в модальном окне

  var focusedElementBeforeModal;

  var modalSignIn = document.querySelector('.modal-sign-in__dialog');
  var modalOverlaySignIn = document.querySelector('.modal-sign-in__overlay');


  function openSignInModal() {
    var modalOverlaySignIn = document.querySelector('.modal-sign-in__overlay');
    var modalDialogSignIn = document.querySelector('.modal-sign-in__dialog');
    modalOverlaySignIn.classList.add("modal-sign-in__overlay--visible")
    modalDialogSignIn.classList.add("modal-sign-in__dialog--visible");
    document.querySelector('html').classList.add("hystmodal-opened");
    // Сохранение фокуса
    focusedElementBeforeModal = document.activeElement;

    modalSignIn.addEventListener('keydown', trapTabKey);

    // Закрытие при клике вне формы
    modalOverlaySignIn.addEventListener('click', closeSignInModal);

    // Находим все элементы для фокуса 
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = modalSignIn.querySelectorAll(focusableElementsString);
    // // Convert NodeList to Array
    focusableElements = Array.prototype.slice.call(focusableElements);

    var firstTabStop = focusableElements[0];
    var lastTabStop = focusableElements[focusableElements.length - 1];
    firstTabStop.focus();

    function trapTabKey(e) {
      // Check for TAB key press
      if (e.keyCode === 9) {

        // SHIFT + TAB
        if (e.shiftKey) {
          if (document.activeElement === firstTabStop) {
            e.preventDefault();
            lastTabStop.focus();
          }

          // TAB
        } else {
          if (document.activeElement === lastTabStop) {
            e.preventDefault();
            firstTabStop.focus();
          }
        }
      }
    }

  }




  function closeSignInModal() {

    var modalOverlaySignIn = document.querySelector('.modal-sign-in__overlay');
    var modalDialogSignIn = document.querySelector('.modal-sign-in__dialog');

    modalOverlaySignIn.classList.remove("modal-sign-in__overlay--visible")
    modalDialogSignIn.classList.remove("modal-sign-in__dialog--visible");
    document.querySelector('html').classList.remove("hystmodal-opened");

    // Set focus back to element that had it before the modal was opened
    focusedElementBeforeModal.focus();
  }


  // проверка на пустоту заполненных полей
  $('.form-modal').submit(function () {
    if (document.forms.email.value == '' || document.form.password.value == "") {
      valid = false;
      return valid;
    } else {
      closeSignInModal();
    }
  });

  // Закрытие на esc
  $(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      closeSignInModal()
    }
  });









  // var modalToggle = document.querySelector('.modal-toggle');
  // var modalToggleMobile = document.querySelector('.modal-toggle--mb');
  // modalToggle.addEventListener('click', openModal);
  // modalToggleMobile.addEventListener('click', openModal);

  // var closeModalButton = document.querySelector('.button-close');
  // closeModalButton.addEventListener('click', closeModal);

  // // Настройка фокуса в модальном окне

  // var focusedElementBeforeModal;

  // var modal = document.querySelector('.modal__dialog');
  // var modalOverlay = document.querySelector('.modal__overlay');


  // function openModal() {
  //   var modalOverlay = document.querySelector('.modal__overlay');
  //   var modalDialog = document.querySelector('.modal__dialog');
  //   modalOverlay.classList.add("modal__overlay--visible")
  //   modalDialog.classList.add("modal__dialog--visible");
  //   document.querySelector('html').classList.add("hystmodal-opened");
  //   // Сохранение фокуса
  //   focusedElementBeforeModal = document.activeElement;

  //   modal.addEventListener('keydown', trapTabKey);

  //   // Закрытие при клике вне формы
  //   modalOverlay.addEventListener('click', closeModal);

  //   // Находим все элементы для фокуса 
  //   var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  //   var focusableElements = modal.querySelectorAll(focusableElementsString);
  //   // // Convert NodeList to Array
  //   focusableElements = Array.prototype.slice.call(focusableElements);

  //   var firstTabStop = focusableElements[0];
  //   var lastTabStop = focusableElements[focusableElements.length - 1];
  //   firstTabStop.focus();

  //   function trapTabKey(e) {
  //     // Check for TAB key press
  //     if (e.keyCode === 9) {

  //       // SHIFT + TAB
  //       if (e.shiftKey) {
  //         if (document.activeElement === firstTabStop) {
  //           e.preventDefault();
  //           lastTabStop.focus();
  //         }

  //         // TAB
  //       } else {
  //         if (document.activeElement === lastTabStop) {
  //           e.preventDefault();
  //           firstTabStop.focus();
  //         }
  //       }
  //     }
  //   }

  // }




  // function closeModal() {

  //   var modalOverlay = document.querySelector('.modal__overlay');
  //   var modalDialog = document.querySelector('.modal__dialog');

  //   modalOverlay.classList.remove("modal__overlay--visible");
  //   modalDialog.classList.remove("modal__dialog--visible");
  //   document.querySelector('html').classList.remove("hystmodal-opened");

  //   // Set focus back to element that had it before the modal was opened
  //   focusedElementBeforeModal.focus();
  // }


  // // проверка на пустоту заполненных полей
  // $('.form-modal').submit(function () {
  //   if (document.forms.email.value == '' || document.form.password.value == "") {
  //     valid = false;
  //     return valid;
  //   } else {
  //     closeModal();
  //   }
  // });

  // // Закрытие на esc
  // $(document).keydown(function (e) {
  //   // ESCAPE key pressed
  //   if (e.keyCode == 27) {
  //     closeModal()
  //   }
  // });






});