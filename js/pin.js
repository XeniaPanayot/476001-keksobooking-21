'use strict';

(function () {
  const map = document.querySelector(`.map__pins`);

  // find template
const pinTemplate = document.querySelector(`#pin`).content.querySelector(`button`);
const fragment = document.createDocumentFragment();

// fill the template-based pin with the data from the array

for (let i = 0; i < window.card.countCardsInArray; i++) {
  const clonedPin = pinTemplate.cloneNode(true);
  clonedPin.style.left = window.card.cardsArray[i].location.x + `px`;
  clonedPin.style.top = window.card.cardsArray[i].location.y + `px`;
  const picture = clonedPin.querySelector(`img`);
  picture.src = window.card.cardsArray[i].author.avatar;
  picture.alt = window.card.cardsArray[i].offer.description;
  fragment.appendChild(clonedPin);
}
map.appendChild(fragment);

const pinButton = document.querySelector(`.map__pin--main`);
// sizes of the pin
const pinWidth = pinButton.offsetWidth;
const pinHeight = pinButton.offsetHeight;

// center of the pin for default position
const pinCenterX = Math.round(pinButton.offsetLeft + pinWidth / 2);
const pinCenterY = Math.round(pinButton.offsetHeight + pinHeight / 2);
const addressInput = document.querySelector(`#address`);
const pinCoordinates = [pinCenterX, pinCenterY];
addressInput.value = pinCoordinates;

})();
