'use strict';
(function () {
  // отрисовать карточки других предложений
  const renderOfferPopup = function () {
    const popupCardTemplate = document.querySelector(`#card`).content.querySelector(`.map__card`);
    const fragment2 = document.createDocumentFragment();
    const map = document.querySelector(`.map__pins`);


    // fill the template-based popups with the cards data from the array, 8 cards = 8 popups
    for (let i = 0; i < 8; i++) {
      // clone the template
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
    }
    map.appendChild(fragment2);

    // функция по нахождению кнопки закрыти и обработке клика
    const popup = document.querySelectorAll(`.popup`);

    const popupCloseHandler = function (item) {
      const popupCloseBtn = item.querySelector(`.popup__close`);
      popupCloseBtn.addEventListener(`click`, function (evt) {
        evt.preventDefault();
        item.remove();
      });
    };
    for (let i = 0; i < 8; i++) {
      popupCloseHandler(popup[i]);
    }
  };
  window.renderPopup = {
    renderOfferPopup
  };
})();
