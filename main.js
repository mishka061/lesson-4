//- вычитание
//* умножение
/// деление
//% деление с остатком
//** возведение в степень
// > больше
// <меньше
// >= больше или равно
// <= меньше или равно
// == равно
// === строгое равно
// != не равно
// Возможные исходы оператора ИЛИ
//true||true //true
//false|| true // true
//true|| false // true
//false || false // false
// Возможные исходы оператора И
// true && ture // true
// false && true// false
// ture && fasle // false
// false & false // false

// ? условный оператор

//let summer = (week == 12) ? true : false

let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
if ((a+b) < 15) {
  console.log("Да");
} else if((a+b) >= 15) {
  console.log("Нет");
}

let a1 = prompt("Введите число первой переменной");
let b1 = prompt("Введите число второй переменной");
if (a1 === b1) {
  console.log("Переменные равны");
} else {
  console.log("Не равны");
}








