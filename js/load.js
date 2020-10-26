'use strict';

// модуль, который отвечает за взаимодействие с сервером: запросы и ошибки
(function () {
  const URL = `https://21.javascript.pages.academy/keksobooking/data`;
  const onSuccess = function (data) {
    console.log(`data received` + data);
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
          //onSuccess(xhr.response);
          // console.log(xhr.response[1]);
          const onSuccess = function () {
            const getCardsArray = function () {
              let cardsArray = [];
              for (let i = 0; i < 8; i++) {
                cardsArray.push(xhr.response[i]);
              }
              return cardsArray;
            };
            const cardsArray = getCardsArray();
              console.log(cardsArray);

              window.card = {
                cardsArray: cardsArray,
              };

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

          };
          onSuccess();


          // const getCardsArray = function () {
          //   let cardsArray = [];
          //   for (let i = 0; i < 8; i++) {
          //     cardsArray.push(xhr.response[i]);
          //   }
          //   return cardsArray;
          // };
          // const cardsArray = getCardsArray();
          //   console.log(cardsArray);

          //   window.card = {
          //     cardsArray: cardsArray,
          //   };

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
