'use strict';

// В main.js должны остаться только вызовы методов других модулей или код, который необходим
// для работы других модулей.
// В тех модулях, которые имеют внешний интерфейс, экспортируйте то, что используется снаружи,
// в глобальную область видимости, записав эти значения в объект window.

// *** card.js
// *** util.js

// *** card.js


// to toggle the map to/ from faded  mode Согласно ТЗ вызов метода отрисовки похожих объявлений нужно перенести в функцию активации,
const mapToggler = document.querySelector(`.map`);
mapToggler.classList.remove(`map--faded`);

// *** form.js

// *** pin.js

// form-validation.js
