'use strict';

// модуль, который отвечает за взаимодействие с сервером: запросы и ошибки
(function () {
  const URL = `https://21.javascript.pages.academy/keksobooking/data`;
  const maxPins = 5;
  //  получить массив карточек
  const getCardsArray = function (data) {
    let cardsArray = [];
    for (let i = 0; i < maxPins; i++) {
      cardsArray.push(data[i]);
    }
    return cardsArray;
  };

  window.load = function () {
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
            console.log(window.load.cardsArray);

            // вызвать функцию отрисовки меток на карте на основе отфильтрованных
            window.filter.updatePins(window.load.cardsArray);
          };
          onSuccess();

          break;
        // обработать ошибки сервера
        case 401:
          error = `Ошибка авторизации`;
          break;

        case 404:
          error = `Страница не найдена`;
          break;

        default:
          error = `Статус ответа: ${xhr.status} ${xhr.statusText}`;
      }
      if (error) {
        console.log(error);

        window.errorMessage.renderErrorMessage(error);
      }
    });

    // если нет интернета
    xhr.addEventListener(`error`, function () {
      window.errorMessage.renderErrorMessage(`нет соединенения`);
    });

    // если грузится дольше 10 секунд
    xhr.timeout = 10000;
    xhr.addEventListener(`timeout`, function () {
      window.errorMessage.renderErrorMessage(`Запрос не успел выполниться за ` + xhr.timeout + `милисекунд`);
    });

    xhr.open(`GET`, URL);
    xhr.send();
  };
})();
