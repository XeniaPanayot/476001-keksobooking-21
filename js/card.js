'use strict';
// модуль, который создает метки на карте, массив с заданным кол-вом
(function () {
    const renderPin = function () {
      const fragment = document.createDocumentFragment();
      const pinTemplate = document.querySelector(`#pin`).content.querySelector(`button`);
      const map = document.querySelector(`.map__pins`);

      for (let i = 0; i < 8; i++) {
        const clonedPin = pinTemplate.cloneNode(true);
        clonedPin.style.left = window.card.cardsArray[i].location.x + `px`;
        clonedPin.style.top = window.card.cardsArray[i].location.y + `px`;
        const picture = clonedPin.querySelector(`img`);
        picture.src = window.card.cardsArray[i].author.avatar;
        picture.alt = window.card.cardsArray[i].offer.description;
        fragment.appendChild(clonedPin);
      }
      map.appendChild(fragment);
    }
})();
