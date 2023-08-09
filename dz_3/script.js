// ЗАДАНИЕ №1 ======================================================================

/*
Создайте функцию которая возводит переданное число в куб,
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

const pow3 = (num) => num ** 3;

console.log(pow3(2) + pow3(3));

//==================================================================================

// ЗАДАНИЕ №2 ======================================================================

/*
Пользователь вводит с клавиатуры число, если ввёл текст,
необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и
выводит в консоль текст: "Размер заработной платы за вычетом налогов равен значение"
*/

// в принципе если действие одно, то в переменную можно не записывать, наверное
const deduction13PercentOfSalary = () => Number(prompt('input your salary')) * 0.87;

console.log(`Размер заработной платы за вычетом налогов равен ${deduction13PercentOfSalary()}`);

//==================================================================================

// ЗАДАНИЕ №3 ======================================================================

/*
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
которая определяет максимальное значение среди этих чисел
*/


// не уверен, что это правильное решение: засунуть все вводы от пользователя сразу в объявление функции
// ведь ввод запросится от пользователя только тогда, кога будет вызвана функция (без параметров)
// (наверно, какая-то доля экономии в этом все же есть - мы не храним без надобности эти числа))

// или лучше запросить ввод, записать его в переменные, а потом передать их в качестве аргументов
// в вызов функции?

// и еще, я тут не учитывал ситуацию, если 2 или 3 числа равны. Будет браться первое найденное.
// хотя, в этом случае все равно, к этому числу ничего не привязано же у нас

function maxOfThreeNumbers
    (num1 = Number(prompt('введите первое число')),
    num2 = Number(prompt('введите второе число')),
    num3 = Number(prompt('введите третье число'))) {
        
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(maxOfThreeNumbers());

//==================================================================================

// ЗАДАНИЕ №4 ======================================================================

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и
выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность,
функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются
корректные числа, проверки на NaN, Infinity делать не нужно.
*/

const mySum = (add1, add2) => add1 + add2;
console.log(mySum(2, 5));

const myDiff = (reduced, subtracted) => (reduced > subtracted) ? reduced - subtracted : 0;
console.log(myDiff(8, 5));
console.log(myDiff(1, 5));

const myDiv = (divisible, divisor) => divisible / divisor;
console.log(myDiv(10, 5));

const myMult = (factor1, factor2) => factor1 * factor2;
console.log(myMult(3, 7));

//==================================================================================