'use strict';

// В main.js должны остаться только вызовы методов других модулей
// или код, который необходим для работы других модулей.

// to toggle the map to/ from faded  mode Согласно ТЗ вызов метода отрисовки похожих объявлений нужно перенести в функцию активации,
const mapToggler = document.querySelector(`.map`);
mapToggler.classList.remove(`map--faded`);

// to call load function
window.load(`https://21.javascript.pages.academy/keksobooking/data`);


