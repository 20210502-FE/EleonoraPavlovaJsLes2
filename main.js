//Task 1
// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let sum = 0;
// for (let i=0; i<=50; i++){//запускаем цикл (меньше или равно 50, дплее наращиваем на единицу)
//     sum = sum + i; // перменная sum
// } 
// console.log(sum);


//Task 2 Запросить 2 числа и найти только наибольший общий делитель
// const nod = (n, m) => {
//     if (m !== 0) {
//       const k = n % m;
//       return nod(m, k);
//     }
//     return n;
//   }
//   alert('Enter 2 numbers to find NOD')
//   let numb1 = prompt('Enter first number');
//   let numb2 = prompt('Enter second number');
//   alert('NOD number ' + numb1 + ' и ' + numb2 + ' are ' + nod(numb1, numb2));



//Task3 Запросить у пользователя число и вывести все делители этого числа.
//  let number = prompt ("Enter any number");
//     number =+number;
//  for (let i=0; i<=number; i++){
//      if (number%i==0 && i!==1){
//         alert(i);
//         console.log(i);
//  }
// }



//Task 4 Определить количество цифр в введенном числе.
//    let number = prompt ("Enter any number");  
//    alert(String(number).length)


//   Task 5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, 
//   отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
//   Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10)
//   для ввода чисел пользователем.
//  let a = [];
//  for(let i = 0; i< 10; i ++) {
//  let number = prompt('Enter number');
//  number = +number;
//   a.push( number)
// }
//  const parni = a.filter(number => number % 2 === 0);
//     alert("парные " + parni.length);
//  const neparni = a.filter(number => number % 2 !== 0);
//     alert ( "непарные " + neparni.length);
//  const nuli = a.filter(number => number === 0);
//     alert ("нули " + nuli.length);




//   Task 6  Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
//   вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор,
//   пока пользователь не откажется
//     while (true) {
//     const a = +prompt('Enter first number');
//     const b = +prompt('Enter second number');
//     const op = prompt('Choose mark - + / *');
//     const action = {
//       '+': () => a + b,
//       '-': () => a - b,
//       '/': () => a / b,
//       '*': () => a * b
//     }[op];
//     if (action) alert(action());

//     if (!confirm('Would you like to solve another example?')) break;
//   }




//Task 7 Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат 
//(если число 123456 сдвинуть на 2 цифры, то получится 345612).
// let number = prompt ("Enter any number");
// let i = prompt ("How many number to shift it?");
// alert(number.substring(i) + number.substring(0, i));
// console.log(number.substring(i) + number.substring(0, i));



//Task8  Зациклить вывод дней недели таким образом: 
//«День недели. Хотите увидеть следующий день?» 
//и так до тех пор, пока пользователь нажимает OK
// let isConfirmed = true;
// let days = new Date();
// let dayweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// do {
// let day = dayweek[days.getDay()];
// isConfirmed = confirm(day + " Want to see the next day?");
// days.setDate(days.getDate()+1)
// } while(isConfirmed);



//Task 9  Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.
// for(let i = 2; i <= 9; i++) {
//     for(let k = 1; k <=10; k++ ) {
//       console.log(i*k)
//     }
//   }



//Task 10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и 
//отгадать его следующим способом: 
//каждую итерацию цикла делите диапазон чисел пополам, 
//записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?».
// В зависимости от того, что указал пользователь, уменьшаете диапазон.
// Начальный диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. 
//И так до тех пор, пока пользователь не выберет == N.
let enter = prompt("Make a guess any number 0 - 100");
let number = Math.floor(Math.random() * 100);
let currentMin = 0;
let currentMax = 100;
let isEqual = false;
do {
    center = currentMax / 2;
    let answer = prompt(centre + " is this your number? Enter sign >, < , =");
    if (answer === ">") {
        currentMin = +currentMin;
        min = centre;
    }

    else if (answer === "<") {
        currentMax = +currentMax;
        max = centre;
    }

    else if (answer === "=") {
        isEqual = true;
    }
} while (!isEqual)
alert("you guessed")
//не смогла доделать задачу, запуталась в цикле


