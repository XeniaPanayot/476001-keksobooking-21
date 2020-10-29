'use strict';

// FORM VALIDATION
// validate rooms and guests

(function () {
  const countRooms = document.querySelector(`#room_number`);
  const capacity = document.querySelector(`#capacity`);
  const capacityOptions = capacity.children;
  const countRoomsOptions = countRooms.children;
  const lastOption = countRoomsOptions.length - 1;
  const formSubmit = document.querySelector(`.ad-form__submit`);
  const roomsMismatchMessage = `Количество комнат должно соответствовать количеству гостей`;

  const validateTwoSelectLists = function (selectOne, selectTwo, selectOneOptions, selectTwoOptions, mismatchMessage) {
    if (selectOne.value === selectOneOptions[lastOption].value && selectTwo.value === selectTwoOptions[lastOption].value) {
      selectTwo.setCustomValidity(``);
    } else if (selectOne.value !== selectTwo.value) {
      selectTwo.setCustomValidity(mismatchMessage);
    } else {
      selectTwo.setCustomValidity(``);
    }
  };


  // validate that Checkin = Checkout
  const checkinTime = document.querySelector(`#timein`);
  const checkoutTime = document.querySelector(`#timeout`);

  const getSelectedCheckin = function () {
    let selectedCheckin = checkinTime.options[checkinTime.selectedIndex];
    for (let i = 0; i < checkinTime.options.length; i++) {
      selectedCheckin = checkinTime.options[i];
      if (selectedCheckin.selected === true) {
        break;
      };
    };
    return selectedCheckin;
  };


  const syncTwoInputs = function () {
    checkoutTime.options.length = 0;
    const selectedCheckinOption = getSelectedCheckin();
    console.log(selectedCheckinOption.value);

    const newOption = document.createElement(`option`);
      newOption.value = selectedCheckinOption.value;
      newOption.text = `Выезд до ` + selectedCheckinOption.value;
      checkoutTime.appendChild(newOption);
    };


  checkinTime.addEventListener(`change`, function (evt) {
    evt.preventDefault();
    syncTwoInputs();
  });
  checkinTime.removeEventListener(`change`, function (evt) {
    syncTwoInputs();
  });


  formSubmit.addEventListener(`click`, function () {
    validateTwoSelectLists(capacity, countRooms, capacityOptions, countRoomsOptions, roomsMismatchMessage);
  });
  formSubmit.removeEventListener(`click`, function () {
    validateTwoSelectLists(capacity, countRooms, capacityOptions, countRoomsOptions, roomsMismatchMessage);
  });
})();
