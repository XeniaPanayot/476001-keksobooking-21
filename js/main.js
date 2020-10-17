'use strict';

const map = document.querySelector(`.map__pins`);
const countCardsInArray = 8;

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

// functions to get a random number and a random item
const getRndInteger = function (min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
};

const getRndItem = function (items) {
  const maxIndex = items.length - 1;
  const rndIndex = getRndInteger(0, maxIndex);
  return items[rndIndex];
};

// the function to make a card
const getMockCard = function () {
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
      x: getRndInteger(10, 750), // случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
      y: getRndInteger(130, 630), // случайное число, координата y метки на карте от 130 до 630.
    }

  };
};

// to make an array of 8 cards
const getCardsArray = function () {
  let cardsArray = [];
  for (let i = 0; i < countCardsInArray; i++) {
    cardsArray.push(getMockCard());
  }
  return cardsArray;
};
// need a variable (the result of the above function) to address cards' properties
const cardsArray = getCardsArray();

// to toggle the map to/ from faded  mode Согласно ТЗ вызов метода отрисовки похожих объявлений нужно перенести в функцию активации,
// const mapToggler = document.querySelector(`.map`);
// mapToggler.classList.remove(`map--faded`);

// find template
const pinTemplate = document.querySelector(`#pin`).content.querySelector(`button`);
const fragment = document.createDocumentFragment();

// fill the template-based element with the data from the array
for (let i = 0; i < countCardsInArray; i++) {
  const clonedPin = pinTemplate.cloneNode(true);
  clonedPin.style.left = cardsArray[i].location.x + `px`;
  clonedPin.style.top = cardsArray[i].location.y + `px`;
  const picture = clonedPin.querySelector(`img`);
  picture.src = cardsArray[i].author.avatar;
  picture.alt = cardsArray[i].offer.description;
  fragment.appendChild(clonedPin);
}
map.appendChild(fragment);

// disable active form fields

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


