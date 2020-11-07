'use strict';
(function () {
  const form = document.querySelector(`.ad-form`);
  const avatarInput = form.querySelector(`.ad-form-header__input`);
  const fieldsets = form.querySelectorAll(`.ad-form__element`);

  const removeDisableFieldsets = function (elements) {
    elements.disabled = false;
  };
  const removeDisableFormInputs = function () {
    removeDisableFieldsets(avatarInput);
    for (let i = 0; i < fieldsets.length; i++) {
      removeDisableFieldsets(fieldsets[i]);
    }
  };

  // remove disable from the form fields on the MAIN mouse click
  const pinButton = document.querySelector(`.map__pin--main`);
  pinButton.addEventListener(`mousedown`, mouseMainDown);
  function mouseMainDown(evt) {
    if (typeof evt === `object`) {
      switch (evt.button) {
        case 0:
          removeDisableFormInputs();
      }
    }
  }

  pinButton.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Escape`) {
      removeDisableFormInputs();
    }
  });

  // function on form submit
  const onFormSubmit = function () {
    const map = document.querySelector(`.map__pins`);
    map.classList.add(`map--faded`);
    window.formDefault.disableAllFieldsets();
    form.reset();
    const pins = document.querySelectorAll(`.map__pin`);
    pins.forEach(function (onePin) {
      onePin.remove();
    });
  };
  // onFormSubmit();
  window.form = {
    onFormSubmit
  };

  // PROBLEM!!!!
  // send the data to the server on submit
  // const submitHandler = function (evt) {
  //   window.sendFormData(new FormData(form), function () {
  //     // console.log(`data sent`);
  //     // console.log(new FormData(form).get(`title`));
  //   });
  //   evt.preventDefault();
  // };
  // form.addEventListener(`submit`, submitHandler);
})();
