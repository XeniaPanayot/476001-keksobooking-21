'use strict';

// DEFAULT behaviour
// disable active form fields on default
(function () {
  const form = document.querySelector(`.ad-form`);
  const avatarInput = form.querySelector(`.ad-form-header__input`);
  const fieldsets = form.querySelectorAll(`.ad-form__element`);
  const pinButton = document.querySelector(`.map__pin--main`);

  const disableFieldsets = function (elements) {
    elements.disabled = true;
  };
  const disableAllFieldsets = function () {
    disableFieldsets(avatarInput);
    for (let i = 0; i < fieldsets.length; i++) {
      disableFieldsets(fieldsets[i]);
    }
  };

  const removeDisableFieldsets = function (elements) {
    elements.disabled = false;
  };

  window.formDefault = {
    disableAllFieldsets,
    removeDisableFieldsets
  };

  // move this to a diff module?
  // remove disable from the form fields on the MAIN mouse click
  pinButton.addEventListener(`mousedown`, mouseMainDown);
  function mouseMainDown(evt) {
    if (typeof evt === `object`) {
      switch (evt.button) {
        case 0:
          disableAllFieldsets();
      }
    }
  }

  // remove disabled with the keyboard
  pinButton.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      disableAllFieldsets();
    }
  });

})();

