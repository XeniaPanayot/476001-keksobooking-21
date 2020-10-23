'use strict';
// модуль, который
// Доработайте проект так, чтобы пользователь мог открыть карточку любого доступного объявления;

// Добавьте возможность закрытия карточки с подробной информацией по нажатию клавиши Esc и клике по иконке закрытия;

// Добавьте поддержку открытия карточки объявления с клавиатуры. Карточка объявления для выбранной метки открывается при нажатии на клавишу Enter.

// Сделайте так, чтобы одновременно могла быть открыта только одна карточка объявления.

// Обратите внимание, что у главной метки .map__pin--main не может быть карточки объявления.

(function () {
  const map = document.querySelector(`.map__pins`);
  const pins = document.querySelectorAll(`.map-pin`);
  const popupCardTemplate = document.querySelector(`#card`).content.querySelector(`.map__card`);
  const fragment = document.createDocumentFragment();

  // fill the template-based popups with the cards data from the array, 8 cards = 8 popups
  for (let i = 0; i < window.card.countCardsInArray; i++) {
    // clone the template
    const clonedPopupCardTemplate = popupCardTemplate.cloneNode(true);
    const cardFromCardsArray = window.card.cardsArray[i];
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
    const roomsAndGuests= clonedPopupCardTemplate.querySelector(`.popup__text--capacity`);
    roomsAndGuests.textContent = cardFromCardsArray.offer.rooms + ` rooms for ` + cardFromCardsArray.offer.guests;
    const checkinAndCheckout = clonedPopupCardTemplate.querySelector(`.popup__text--time`);
    checkinAndCheckout.textContent = `Заезд после ` + cardFromCardsArray.offer.checkin + `, выезд до ` + cardFromCardsArray.offer.checkout;


    // HOW TO GET THE relevant features get removed????
    const featuresList = clonedPopupCardTemplate.querySelector(`.popup__features`);
    const featuresItem = featuresList.children;
    // for (let i = 0; i < featuresList.length; i++) {

    // };
    if (cardFromCardsArray.offer.features !== `wifi`) {
      console.log(`inte wifi`);
      featuresItem[0].remove();
    } else if (cardFromCardsArray.offer.features !== `dishwasher`) {
      console.log(`no dishwasher`)
      featuresItem[1].remove();
    } else if (cardFromCardsArray.offer.features === `parking`) {
      // console.log(`got parking`);
    } else if (cardFromCardsArray.offer.features === `washer`) {
      // console.log(`got washer`);
    } else if (cardFromCardsArray.offer.features === `elevator`) {
      // console.log(`got elevator`);
    } else if (cardFromCardsArray.offer.features === `conditioner`) {
      // console.log(`got conditioner`);
    };

    const description = clonedPopupCardTemplate.querySelector(`.popup__description`);
    description.textContent = cardFromCardsArray.offer.description;

    const picture = clonedPopupCardTemplate.querySelector(`.popup__photos img`);
    picture.src = cardFromCardsArray.offer.photos;
    picture.alt = cardFromCardsArray.offer.description;
    fragment.appendChild(clonedPopupCardTemplate);
  };
  map.appendChild(fragment);


})();
