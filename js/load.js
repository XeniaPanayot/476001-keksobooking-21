'use strict';

// модуль, который отвечает за взаимодействие с сервером: запросы и ошибки
(function () {
  const URL = `https://21.javascript.pages.academy/keksobooking/data`;
  const onSuccess = function (data) {
    console.log(`data received` + data);
  };

  //  получить массив карточек
  const getCardsArray = function (data) {
    let cardsArray = [];
    for (let i = 0; i < 8; i++) {
      cardsArray.push(data[i]);
    }
    return cardsArray;
  };

  const onError = function () {
    console.log(`Err message`);
  }
  window.load = function (URL, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    // когда сервер вернет ответ
    xhr.addEventListener(`load`, function () {
      let error;
      switch (xhr.status) {
        case 200:
          const onSuccess = function () {
            // вызвать функцию создания массива на основе данных из ответа сервера
            window.load.cardsArray = getCardsArray(xhr.response);
            console.log(window.load.cardsArray[1]);

            // вызвать функцию отрисовки меток на карте
            window.renderPin.renderSmallPins();

            // вызвать функцию отрисовки карточек
            window.renderPopup.renderOfferPopup();
          };
          onSuccess();

          break;
        // обработать ошибки сервера
        case 401:
          error = `Ошибка авторизации`;
          break;

        case 404:
          error = `Сайт не найден`;
          break;

        default:
          error = `Статус ответа: ` + xhr.status + ` ` + xhr.statusText;
      }
      if (error) {
        onError(error);
      };

    });
    xhr.open(`GET`, `https://21.javascript.pages.academy/keksobooking/data`);
    xhr.send();
  }
})();
