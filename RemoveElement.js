"use strict";
//Реалізуйте функцію removeElement(array, item),
// щоб видалити елемент item з масиву array.
// Результат: [1, 2, 3, 4, 6, 7]

const arras = [1, 2, 3, 4, 5, 6, 7];
const element = 5

function removeElement(array, item) {
    return array.filter
    (function (el, index, arr) {
        return el !== item
    })
}
alert(removeElement(arras, element))
