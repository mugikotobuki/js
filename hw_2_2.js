//homework 2 Silkina

//Задание 4

function summary(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multipl(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 * num2;
}
let sumResult = summary(7,4);
let subResult = subtract(17,14);
let multResult = multipl(9,81);
let divisResult = division(81,4);

alert('Сумма= ' + sumResult + ' Разница= ' +subResult + ' Умножение =' + multResult + ' Деление = ' + divisResult);

/* ВОПРОС: Вот две записи алерта они чем-то принципиальным отличаются? Во втором случае с бэктиками просто удобнее вставлять значение переменных?
alert(`Сумма= ${sumResult} Разница= ${subResult} Умножение = ${multResult} Деление = ${divisResult}`);
*/

//Задание 5

function mathOperation(arg1, arg2, operation) {
    let result = 0;
    switch (operation) {
        case "сложение":
            result = summary(arg1, arg2);
            break;
        case "вычитание":
            result = subtract(arg1, arg2);
            break;
        case "умножение":
            result = multipl(arg1, arg2);
            break;
        case "деление":
            result = division(arg1, arg2);
            break;
        default:
            throw new Error('Не верная арифметическая операция: ' + operation);
    }
    return result;
}
//let Result2 = mathOperation(7, 4, "сложение");
//alert("Сумма чисел равна: " + Result2);

//let Result2 = mathOperation(7, 4, "вычитание");
//alert("Разница чисел равна: " + Result2);

let Result2 = mathOperation(7, 4, "умножение");
alert("Произведение чисел равна: " + Result2);

//let Result2 = mathOperation(7, 4, "деление");
//alert("Частное чисел равна: " + Result2);