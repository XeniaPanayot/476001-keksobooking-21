'use strict';
// фильтровать данные, полученные с сервера
//  в неактивное состояние форма фильтрации переключается вместе с остальным элементами страницы,
// но активируется только при успешной загрузке объявлений, иначе что фильтровать?!
//
// Выводить на карту не более 5 меток. Установка фильтра по количеству должна происходить сразу после получения данных с сервера;
(function () {
  const filterForm = document.querySelector(`.map__filters`);
  const housingType = filterForm.querySelector(`#housing-type`);
  const housingPrice = filterForm.querySelector(`#housing-price`);
  const housingRooms = filterForm.querySelector(`#housing-rooms`);
  const housingGuests = filterForm.querySelector(`#housing-guests`);
  const housingFeatures = filterForm.querySelector(`#housing-features`);
  const housingFeaturesCheckbox = housingFeatures.querySelectorAll(`input`);
  const housingFeaturesCheckboxName = housingFeaturesCheckbox[1].name;

  const {
    getSelectedCheckboxValues,
    getSelectedOption,
    filterHousingType,
    filterHousingPrice,
    filterHousingRooms,
    filterHousingGuests} = window.filterHelpers;

  const filters = {
    type: housingType.options[0].value,
    rooms: housingRooms.options[0].value,
    guests: housingGuests.options[0].value,
    price: housingPrice.options[0].value,
  }

  housingFeatures.addEventListener(`change`, function () {
    const newHousingFeatures = getSelectedCheckboxValues(housingFeaturesCheckboxName);
  });

  housingType.addEventListener(`change`, function () {
    filters.type = getSelectedOption(housingType);
    window.filter.updatePins(filterChoices(window.load.cardsArray, filters));
  });

  housingPrice.addEventListener(`change`, function () {
    filters.price = getSelectedOption(housingPrice);
    window.filter.updatePins(filterChoices(window.load.cardsArray, filters));
  });

  housingRooms.addEventListener(`change`, function () {
    filters.rooms = getSelectedOption(housingRooms);
    window.filter.updatePins(filterChoices(window.load.cardsArray, filters));
  });

  housingGuests.addEventListener(`change`, function () {
    filters.guests = getSelectedOption(housingGuests);
    window.filter.updatePins(filterChoices(window.load.cardsArray, filters));
  });

  housingRooms.addEventListener(`change`, function () {
    filters.rooms = getSelectedOption(housingRooms);
    window.filter.updatePins(filterChoices(window.load.cardsArray, filters));
  });

  housingGuests.addEventListener(`change`, function () {
    filters.guests = getSelectedOption(housingGuests);
    window.filter.updatePins(filterChoices(window.load.cardsArray, filters));
  });

  const filterChoices = (offers, filters) => {
    const guests = filterHousingGuests(offers, filters.guests);
    const housingType = filterHousingType(guests, filters.type);
    const housingRooms = filterHousingRooms(housingType, filters.rooms);
    const price = filterHousingPrice(housingRooms, filters.price);
    return price;
  }

  const updatePins = function (cards) {
    console.log('Xeniaaaaaaaa', cards);
    window.renderPin.renderSmallPins(cards);
  };

  window.filter = {
    updatePins
  };
})();
