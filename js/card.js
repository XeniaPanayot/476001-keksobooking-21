'use strict';
// модуль, который создает прототип карточки, массив с заданным кол-вом
(function () {
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

  // function to make a card
  const getMockCard = function () {
    return {
      author: {
        avatar: `img/avatars/user` + 0 + window.util.getRndInteger(1, 7) + `.png` // строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
      },
      offer: {
        title: window.util.getRndItem(TITLE), // строка, заголовок предложения
        address: `location.x location.y`, // строка, адрес предложения. Для простоты пусть пока представляет собой запись вида "{{location.x}}, {{location.y}}", например, "600, 350"
        price: window.util.getRndItem(PRICE), // число, стоимость
        type: window.util.getRndItem(TYPE), // строка с одним из четырёх фиксированных значений: palace, flat, house или bungalow
        rooms: window.util.getRndItem(ROOMS), // число, количество комнат
        guests: window.util.getRndItem(GUESTS), // число, количество гостей, которое можно разместить
        checkin: window.util.getRndItem(CHECKIN), // строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
        checkout: window.util.getRndItem(CHECKOUT), // строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
        features: window.util.getRndItem(FEATURES), // массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
        description: window.util.getRndItem(DESCRIPTION), // строка с описанием,
        photos: window.util.getRndItem(PHOTOS), //  массив строк случайной длины, содержащий адреса фотографий "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
      },
      location: {
        x: window.util.getRndInteger(10, 750), // случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
        y: window.util.getRndInteger(130, 630), // случайное число, координата y метки на карте от 130 до 630.
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

  window.card = {
    cardsArray: cardsArray,
    countCardsInArray: countCardsInArray
  };
})();
