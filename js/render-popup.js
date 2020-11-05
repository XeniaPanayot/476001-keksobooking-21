'use strict';
(function () {
  // отрисовать карточкy других предложений
  const renderOfferPopup = function (i) {
    const popupCardTemplate = document.querySelector(`#card`).content.querySelector(`.map__card`);
    const fragment2 = document.createDocumentFragment();
    const map = document.querySelector(`.map__pins`);

    // fill the template-based popup with data
    const clonedPopupCardTemplate = popupCardTemplate.cloneNode(true);
    const cardFromCardsArray = window.load.cardsArray[i];
    const avatar = clonedPopupCardTemplate.querySelector(`.popup__avatar`);
    avatar.src = cardFromCardsArray.author.avatar;
    avatar.alt = cardFromCardsArray.offer.title;
    const title = clonedPopupCardTemplate.querySelector(`.popup__title`);
    title.textContent = cardFromCardsArray.offer.title;
    const address = clonedPopupCardTemplate.querySelector(`.popup__text--address`);
    address.textContent = cardFromCardsArray.location.x + `, ` + cardFromCardsArray.location.y;
    const price = clonedPopupCardTemplate.querySelector(`.popup__text--price`);
    price.textContent = cardFromCardsArray.offer.price;
    const type = clonedPopupCardTemplate.querySelector(`.popup__type`);
    type.textContent = cardFromCardsArray.offer.type;
    const roomsAndGuests = clonedPopupCardTemplate.querySelector(`.popup__text--capacity`);
    roomsAndGuests.textContent = cardFromCardsArray.offer.rooms + ` rooms for ` + cardFromCardsArray.offer.guests;
    const checkinAndCheckout = clonedPopupCardTemplate.querySelector(`.popup__text--time`);
    checkinAndCheckout.textContent = `Заезд после ` + cardFromCardsArray.offer.checkin + `, выезд до ` + cardFromCardsArray.offer.checkout;

    const featuresList = clonedPopupCardTemplate.querySelector(`.popup__features`);
    // const featuresItem = featuresList.children;
    featuresList.innerHTML = ``;
    for (let j = 0; j < cardFromCardsArray.offer.features.length; j++) {
      const featureElement = document.createElement(`li`);
      const feature = cardFromCardsArray.offer.features[j];

      featureElement.className = `popup__feature popup__feature--${feature}`;
      featuresList.appendChild(featureElement);
    }

    const description = clonedPopupCardTemplate.querySelector(`.popup__description`);
    description.textContent = cardFromCardsArray.offer.description;

    const picture = clonedPopupCardTemplate.querySelector(`.popup__photos img`);
    picture.src = cardFromCardsArray.offer.photos;
    picture.alt = cardFromCardsArray.offer.description;
    fragment2.appendChild(clonedPopupCardTemplate);

    // функция по нахождению кнопки закрытия и обработке клика
    const popupCloseBtn = clonedPopupCardTemplate.querySelector(`.popup__close`);
    popupCloseBtn.addEventListener(`click`, function (evt) {
      evt.preventDefault();
      clonedPopupCardTemplate.remove();
    });
    popupCloseBtn.addEventListener(`keydown`, function (evt) {
      evt.preventDefault();
      if (evt.key === `Enter`) {
        clonedPopupCardTemplate.remove();
      }
    });
    document.addEventListener(`keydown`, function (evt) {
      evt.preventDefault();
      if (evt.key === `Escape`) {
        clonedPopupCardTemplate.remove();
      }
    });
    map.appendChild(fragment2);
  };

  window.renderPopup = {
    renderOfferPopup,
  };
})();
