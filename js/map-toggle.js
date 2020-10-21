'use strict';
// модуль, который создает и отменяет события для переклюения состояния карты (неактивное по дефолту, активное - по клику на метку)

(function () {
  // DEFAULT behaviour
  // disable active form fields on default
  const form = document.querySelector(`.ad-form`);
  const avatarInput = form.querySelector(`.ad-form-header__input`);
  const pinButton = document.querySelector(`.map__pin--main`);
  const fieldsets = form.querySelectorAll(`.ad-form__element`);

  const disableFieldsets = function (elements) {
    elements.disabled = true;
  };
  disableFieldsets(avatarInput);
  for (let i = 0; i < fieldsets.length; i++) {
    disableFieldsets(fieldsets[i]);
  }

  const removeDisableFieldsets = function (elements) {
    elements.disabled = false;
  };

  // remove disable from the form fields on the MAIN mouse click
  function mouseMainDown(evt) {
    if (typeof evt === `object`) {
      switch (evt.button) {
        case 0:
          removeDisableFieldsets(avatarInput);
          for (let i = 0; i < fieldsets.length; i++) {
            removeDisableFieldsets(fieldsets[i]);
          }
      }
    }
  }
  pinButton.addEventListener(`click`, mouseMainDown);

  // remove disabled with the keyboard
  pinButton.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      removeDisableFieldsets(avatarInput);
      for (let i = 0; i < fieldsets.length; i++) {
        removeDisableFieldsets(fieldsets[i]);
      }
    }
  });
})();
