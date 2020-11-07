'use strict';
// отрисовать маленькие пины и обработать клик - окрытие попапа карточчки
(function () {
  const renderSmallPins = function (cards) {
    console.log(`cards are urrrraaaa!!!`, cards);
    const fragment = document.createDocumentFragment();
    const pinTemplate = document.querySelector(`#pin`).content.querySelector(`button`);
    const map = document.querySelector(`.map__pins`);
    // const maxPins = cards.length < 5 ? cards.length : 5;

    for (let i = 0; i < cards.length ; i++) {
      const clonedPin = pinTemplate.cloneNode(true);

      // обработка клика для показа попапа
      clonedPin.addEventListener(`click`, function () {
        window.renderPopup.renderOfferPopup(i);
      });
      clonedPin.style.left = cards[i].location.x + `px`;
      clonedPin.style.top = cards[i].location.y + `px`;
      const picture = clonedPin.querySelector(`img`);
      picture.src = cards[i].author.avatar;
      picture.alt = cards[i].offer.description;
      fragment.appendChild(clonedPin);
    }
    map.appendChild(fragment);
  };

  window.renderPin = {
    renderSmallPins,
  };

})();

