'use strict';
// модуль, который управляет карточками объявлений и метками: добавляет на страницу нужную карточку,
// отрисовывает метки и осуществляет взаимодействие карточки и метки на карте;
(function () {
// to make an array of 8 cards
const getCardsArray = function () {
    let cardsArray = [];
    for (let i = 0; i < window.countCardsInArray; i++) {
      cardsArray.push(window.card.getMockCard());
    }
    return cardsArray;
  };
// need a variable (the result of the above function) to address cards' properties
const cardsArray = getCardsArray();

const map = document.querySelector(`.map__pins`);
  // find template
  const pinTemplate = document.querySelector(`#pin`).content.querySelector(`button`);
  const fragment = document.createDocumentFragment();

// fill the template-based pin with the data from the array
for (let i = 0; i < window.countCardsInArray; i++) {
  const clonedPin = pinTemplate.cloneNode(true);
  clonedPin.style.left = cardsArray[i].location.x + `px`;
  clonedPin.style.top = cardsArray[i].location.y + `px`;
  const picture = clonedPin.querySelector(`img`);
  picture.src = cardsArray[i].author.avatar;
  picture.alt = cardsArray[i].offer.description;
  fragment.appendChild(clonedPin);
}
map.appendChild(fragment);

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
pinButton = window.pinButton;
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
