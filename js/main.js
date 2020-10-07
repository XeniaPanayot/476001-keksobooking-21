'use strict';

const TITLE = [`Title1`, `Title2`, `Title3`];
const PRICE = [100, 200, 300];
const TYPE = [`palace`, `flat`, `house`, `bungalow`];
const FEATURES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const ROOMS = [1, 2, 3];
const GUESTS = [1, 2, 3];
const CHECKIN = [`12:00`, `13:00`, `14:00`];
const CHECKOUT = [`12:00`, `13:00`, `14:00`];
const DESCRIPTION = [`Description1`, `Description2`, `Description3`];
const PHOTOS = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
const map = document.querySelector(`.map__pins`);

// functions to get a random number and a random item
const getRndInteger = function (min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
};

const getRndItem = function (items) {
  const maxIndex = items.length - 1;
  const rndIndex = getRndInteger(0, maxIndex);
  return items[rndIndex];
};
getRndItem(DESCRIPTION);

// the function to get a card
const getCard = function () {
  return {
    author: {
      avatar: `img/avatars/user` + 0 + getRndInteger(1, 8) + `.png` // строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
    },
    offer: {
      title: getRndItem(TITLE), // строка, заголовок предложения
      address: `location.x location.y`, // строка, адрес предложения. Для простоты пусть пока представляет собой запись вида "{{location.x}}, {{location.y}}", например, "600, 350"
      price: getRndItem(PRICE), // число, стоимость
      type: getRndItem(TYPE), // строка с одним из четырёх фиксированных значений: palace, flat, house или bungalow
      rooms: getRndItem(ROOMS), // число, количество комнат
      guests: getRndItem(GUESTS), // число, количество гостей, которое можно разместить
      checkin: getRndItem(CHECKIN), // строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
      checkout: getRndItem(CHECKOUT), // строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
      features: getRndItem(FEATURES), // массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
      description: getRndItem(DESCRIPTION), // строка с описанием,
      photos: getRndItem(PHOTOS), //  массив строк случайной длины, содержащий адреса фотографий "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    },
    location: {
      x: getRndInteger(), // случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
      y: getRndInteger(130, 630), // случайное число, координата y метки на карте от 130 до 630.
    }

  };
};

// make an array of 8 cards
const cardsArr = [];
const getCardsArr = function (countCards) {
  for (let i = 0; i < countCards; i++) {
    cardsArr.push(getCard());
  }
  return cardsArr;
};
getCardsArr(8); // get a card 8 times

// to toggle the map to/ from faded  mode
const mapToggler = document.querySelector(`.map`);
mapToggler.classList.remove(`map--faded`);

// find the template
const pinTemplate = document.querySelector(`#pin`)
.content
.querySelector(`.map__pin`);

// take the template and define its elements
const renderPin = function (getCard) {
  const pinElement = pinTemplate.cloneNode(true);
  pinElement.querySelector(`img`).setAttribute(`alt`, getCard.offer.title);
  pinElement.querySelector(`img`).setAttribute(`src`, getCard.author.avatar);
  pinElement.querySelector(`img`).setAttribute(`width`, `40`);
  pinElement.querySelector(`img`).setAttribute(`height`, `40`);

  return pinElement;
};

// make a fragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < cardsArr.length; i++) {
  fragment.appendChild(renderPin(cardsArr[i]));
}

// insert the pin into its DOM parent element
map.appendChild(fragment);
