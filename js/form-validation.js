'use strict';

// FORM VALIDATION
// validate Rooms vs Guests
(function () {
  const formSubmit = document.querySelector(`.ad-form__submit`);

  // customize validation message for the title
  const offerTitle = document.querySelector(`#title`);
  const offerTitleMinLength = offerTitle.getAttribute(`minlength`);
  const offerTitleMaxLength = offerTitle.getAttribute(`maxlength`);

  offerTitle.addEventListener(`input`, function (evt) {
    evt.preventDefault();
    if (offerTitle.value.length < offerTitleMinLength) {
      offerTitle.setCustomValidity(`Заголовок должен содержать не менее 30 символов`);
    } else if (offerTitle.value.length > offerTitleMaxLength) {
      offerTitle.setCustomValidity(`Максимальная длина заголовка - 100 символов`);
    } else {
      offerTitle.setCustomValidity(``);
    }
  });

  // validate Rooms vs Guests
  const countRooms = document.querySelector(`#room_number`);
  const capacity = document.querySelector(`#capacity`);
  const capacityOptions = capacity.children;
  const countRoomsOptions = countRooms.children;
  const lastOption = countRoomsOptions.length - 1;
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

  formSubmit.addEventListener(`click`, function () {
    validateTwoSelectLists(capacity, countRooms, capacityOptions, countRoomsOptions, roomsMismatchMessage);
  });
  formSubmit.removeEventListener(`click`, function () {
    validateTwoSelectLists(capacity, countRooms, capacityOptions, countRoomsOptions, roomsMismatchMessage);
  });


  // validate that Checkin = Checkout
  const checkinTime = document.querySelector(`#timein`);
  const checkoutTime = document.querySelector(`#timeout`);

  const getSelectedOption = function (selectName) {
    let selectedOption = selectName.options[selectName.selectedIndex];
    for (let i = 0; i < selectName.options.length; i++) {
      selectedOption = selectName.options[i];
      if (selectedOption.selected === true) {
        break;
      }
    }
    return selectedOption;
  };

  const adjustCheckout = function () {
    checkoutTime.options.length = 0;
    const selectedCheckinOption = getSelectedOption(checkinTime);

    const newOption = document.createElement(`option`);
    newOption.value = selectedCheckinOption.value;
    newOption.text = `Выезд до ` + selectedCheckinOption.value;
    checkoutTime.appendChild(newOption);
  };

  const adjustCheckin = function () {
    checkinTime.options.length = 0;
    const selectedCheckoutOption = getSelectedOption(checkoutTime);

    const newOption = document.createElement(`option`);
    newOption.value = selectedCheckoutOption.value;
    newOption.text = `После ` + selectedCheckoutOption.value;
    checkinTime.appendChild(newOption);
  };

  checkinTime.addEventListener(`change`, function (evt) {
    evt.preventDefault();
    adjustCheckout();
  });
  checkinTime.removeEventListener(`change`, function () {
    adjustCheckout();
  });

  checkoutTime.addEventListener(`change`, function (evt) {
    evt.preventDefault();
    adjustCheckin();
  });


  // Accomodation Type vs Price
  const accomodationType = document.querySelector(`#type`);
  const accomodationPrice = document.querySelector(`#price`);
  const setMinPrice = function (minPrice) {
    accomodationPrice.setAttribute(`min`, minPrice);
    accomodationPrice.setAttribute(`placeholder`, minPrice);
    accomodationPrice.setCustomValidity(`Минимальная цена для выбранного типа жилья - ` + minPrice);
    };

    accomodationType.addEventListener(`change`, function () {
    const selectedAccomodationType = getSelectedOption(accomodationType);

    const validateAccomodationPrice = function () {
      if (selectedAccomodationType.value === `flat`) {
        setMinPrice(`1000`);
      } else if (selectedAccomodationType.value === `house`) {
        setMinPrice(`5000`);
      } else if (selectedAccomodationType.value === `palace`) {
        setMinPrice(`10000`);
      } else {
        accomodationPrice.setCustomValidity(``);
      }
    };
    validateAccomodationPrice();
  });
})();
