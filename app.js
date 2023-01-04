// Задача

// Вася працює програмістом і отримує 50$ за кожні 100 рядків коду. За кожне третє запізнення Васю штрафують на 20$. Реалізувати меню :

// -користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати

// - користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг Порахувати, скільки разів Вася може запізнитися.

// - користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі.

// Рішення
/*
var x = '1';
switch (x) {
    case '1': prompt("Hello");
        break;
    case '2': alert("Hello World");
        break;
    case '3': alert("Hello 3");
        break;
    case '4': alert("Hello Ukraine");
        break;
    default: alert("None")
}

const questionMessage = 'Бажаний дохід Васі';
const Message = prompt(questionMessage);

const questionLate = 'Запізнення Васі';
const late = prompt(questionLate);


const cod = (Message * late) /3 ;
switch (cod){
    case '': prompt(Вася получить 0);
    break;
    case '2': prompt();
    break;
}
alert( `Васі потрібно написати - ${ cod } рядків`)

// const questionLate = 'Запізнення Васі';
// const late = prompt(questionLate);
*/ 
var x = prompt('Введіть перше число');
var y = prompt('Введіть друге число');
var z = prompt('Введіть 1,щоб спрацював знак +, Введіть 2, щоб спрацював знак -,введіть 3, зоб спрацював знак -, введіть 4, щоб спрацював знак /');

var x = parseInt(x);
var y = parseInt(y);


var result;

switch (z) {
    case '1': result = x + y;
        break;
    case '2': result = x - y;;
        break;
    case '3': result = x * y;;
        break;
    case '4': result = x / y;;
        break;
    default: result = "None"
}
alert(result);


