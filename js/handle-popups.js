'use strict';
(function () {

  const pins = document.querySelectorAll(`.map__pin`);

  const popupOpenHandler = function () {
    for (let i = 0; i < 8; i++) {
      pins[i];
    }
  };
  popupOpenHandler();

  window.handlePopups = {
    popupOpenHandler
  };
})();
