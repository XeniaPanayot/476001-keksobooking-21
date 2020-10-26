'use strict';

// модуль, который отвечает за взаимодействие с сервером: запросы и ошибки
(function () {
  const URL =  `https://21.javascript.pages.academy/keksobooking/data`;
  const onSuccess = function () {
    console.log(`data received`);
  };
  window.load = function (data, onSuccess) {//onSuccess - what to do when uploaded
    const xhr = new XMLHttpRequest();

    xhr.responseType = `json`;
    // когда сервер вернет ответ
    xhr.addEventListener(`load`, function () {
      let error;

      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);

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
    xhr.open(`GET`, URL);
    xhr.send(); //open and send is what makes difff bw sending vs uploading, for
  }
})();
