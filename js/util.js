'use strict';

// functions to get a random number and a random item
(function () {
  const getRndInteger = function (min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  };
  const getRndItem = function (items) {
    const maxIndex = items.length - 1;
    const rndIndex = getRndInteger(0, maxIndex);
    return items[rndIndex];
  };

  // const isEnterEvent = function (evt, action) {
  //   if (evt.key === `Enter`) {
  //     action();
  //   }
  // };
  const isEscEvent = function (evt, action) {
    if (evt.key === `Escape`) {
      action();
    }
  };

  window.util = {
    getRndInteger: getRndInteger,
    getRndItem: getRndItem,
    // isEnterEvent: isEnterEvent,
    isEscEvent: isEscEvent
  };
})();
