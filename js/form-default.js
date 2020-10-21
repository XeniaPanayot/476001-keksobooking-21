'use strict';

// DEFAULT behaviour
// disable active form fields on default
const form = document.querySelector(`.ad-form`);
const avatarInput = form.querySelector(`.ad-form-header__input`);
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
const pinButton = document.querySelector(`.map__pin--main`);
pinButton.addEventListener(`mousedown`, mouseMainDown);
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

// remove disabled with the keyboard
pinButton.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    removeDisableFieldsets(avatarInput);
    for (let i = 0; i < fieldsets.length; i++) {
      removeDisableFieldsets(fieldsets[i]);
    }
  }
});

