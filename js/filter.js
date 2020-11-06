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

  let filteredCardsArray = [];
  let housingTypeChoice = housingType.options[2].value; // default value

  const getSelectedOption = function (selectName) {
    let selectedOption = selectName.options[selectName.selectedIndex];
    for (let i = 0; i < selectName.options.length; i++) {
      selectedOption = selectName.options[i];
      if (selectedOption.selected === true) {
        break;
      }
    }
    return selectedOption.value;
  };
  housingType.addEventListener(`change`, function () {
    const newHousingType = getSelectedOption(housingType); //get the selected type
    // filter array and make a new array of the filtered
    window.filter.updatePins(newHousingType);
  });


  // filter array and make a new array of the filtered
  // вместо прямого вызова   window.renderPin.renderSmallPins();
  const updatePins = function (housingFilter = housingTypeChoice) {
    const sameHousingTypeChoice = window.load.cardsArray.filter(card => card.offer.type === housingFilter);
    window.renderPin.renderSmallPins();
  };

  window.filter = {
    updatePins
  };


})();

