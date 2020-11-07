const ANY = 'any' || 0;

const getSelectedOption = (selectName) => {
  let selectedOption = selectName.options[selectName.selectedIndex];
  for (let i = 0; i < selectName.options.length; i++) {
    selectedOption = selectName.options[i];
    if (selectedOption.selected === true) {
      break;
    }
  }
  return selectedOption.value;
};
// select the selected checkboxes
const getSelectedCheckboxValues  = (name) => {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}

const filterHousingType = (offers, filter) => {
  console.log('type filter', filter)
  if (filter === ANY) {
    return offers;
  }
  return offers.filter(card => card.offer.type === filter);
};

const filterHousingRooms = (offers, filter) => {
  console.log('rooms filter', filter)
  if (filter === ANY) {
    return offers;
  }
  return offers.filter(card => card.offer.rooms.toString() === filter);
};

const filterHousingGuests = (offers, filter) => {
  console.log('guests filter', filter)
  if (filter === ANY) {
    return offers;
  }
  return offers.filter(card => card.offer.guests.toString() === filter);
};

const filterHousingPrice = (offers, filter) => {
  console.log('price', filter)

  if (filter === ANY) {
    return offers;
  }
  return offers.filter(card => {
    const priceRange = getPriceRange(card.offer.price);
    return priceRange === filter;

  });
}


const getPriceRange = (amount) => {
const lowPriceMaximum = 10000;
const middlePriceMaximum = 50000;
  if (amount < lowPriceMaximum) {
    return `low`;
  } else if (amount > middlePriceMaximum) {
    return `high`;
  }
  return `middle`;
};

window.filterHelpers = {
  getSelectedOption,
  getSelectedCheckboxValues,
  filterHousingType,
  filterHousingPrice,
  filterHousingRooms,
  filterHousingGuests,
};
