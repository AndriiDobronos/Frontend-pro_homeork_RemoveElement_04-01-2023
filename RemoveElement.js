
//Реалізуйте функцію removeElement(array, item),
// щоб видалити елемент item з масиву array.
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, b) {
    arr.splice((b - 1),1)
    return array
//    return String(arr).split(b).join('')  /* alternative */
}
const b = 5
let result = removeElement(array,b)
alert(result);
// Результат: [1, 2, 3, 4, 6, 7]
