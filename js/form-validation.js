'use strict';

// FORM VALIDATION
// validate rooms and guests

(function() {
  const countRooms = document.querySelector(`#room_number`);
  const capacity = document.querySelector(`#capacity`);
  const capacityOptions = capacity.children;
  const countRoomsOptions = countRooms.children;
  const lastOption = countRoomsOptions.length - 1;
  const formSubmit = document.querySelector(`.ad-form__submit`);
  const roomsMismatchMessage = `Количество комнат должно соответствовать количеству гостей`

  const validateTwoSelectLists = function (selectOne, selectTwo, selectOneOptions, selectTwoOptions, mismatchMessage) {
    if (selectOne.value === selectOneOptions[lastOption].value && selectTwo.value === selectTwoOptions[lastOption].value) {
      selectTwo.setCustomValidity(``);
    } else if (selectOne.value !== selectTwo.value) {
      selectTwo.setCustomValidity(mismatchMessage);
    } else {
      selectTwo.setCustomValidity(``);
    }
  };

  formSubmit.addEventListener(`click`, function () {
    validateTwoSelectLists(capacity, countRooms, capacityOptions, countRoomsOptions, roomsMismatchMessage);
  });
  formSubmit.removeEventListener(`click`, function () {
    validateTwoSelectLists(capacity, countRooms, capacityOptions, countRoomsOptions, roomsMismatchMessage);
  });
})();
