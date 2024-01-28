// function sumThreeNumber(number1,number2 = 0 ,number3 = 0){
//     const sum = number1 + number2 + number3;
//     console.log('giá trị number1:', number1);
//     console.log('giá trị number2:', number2);
//     console.log('giá trị number3:', number3);
//     console.log('Tổng 3 số là: ', sum);
// }

// sumMultipleNumber(1, 4, 9);
// sumMultipleNumber(1, 4);
// sumMultipleNumber(1);

// const course1 = 'HTML';
// const course2 = 'CSS';
// const course3 =  'JAVASCRIPT';


//Destructuring
// const fruits =  ['apple', 'orage', 'banana'];

// const fisFruit = fruits[0];
// const secondFruit  = fruits[1];

// const [fisFruit , secondFruit ] = fruits;
// console.log(fisFruit);
// console.log(secondFruit);

// const person = {
//     name: 'John',
//     age: 30,
//     gender: 'boy',
// };

//const name = person.name;
//const age = person.age;

// const { name: personName,
//     age: personAge,
//     gender = 'girl' }
// = person;

// console.log(personName);
// console.log(personAge);
// console.log(geder);

// const name = 'Dũng';
// const age = 18;

// const studen = {
//     nameStudent,
//     ageStudent,
// };

// console.log(studen);

// cach1
// function sum(a,b){
//     return a + b;
// }

// cach2
// const sum = (a,b) => {
//     return a+b;
// };
// console.log(sum(3,6));

// cach 3
// const sum = (a,b)=> console.log(a+b);

// console.log(sum(3,6));
// cach 1
// import NUMBER, {PI as PI_SECOND, sum} from'./features.js';

// const PI = 3;
// console.log(PI_SECOND);
// console.log(sum(3, 5));
// console.log(NUMBER);

// import NUMBER, {PI as PI_SECOND, sum}
// from './features.js';

// const PI = 3;

// console.log(PI_SECOND);
// console.log(sum(3,5));
// console.log(number);

// Bài 6: Cho arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
// newArr = [6,59,11,12]
// cách 1
// const arr = [1,54,6,7];
// const newArr = arr.map((value) => value + 5 ) ;
// //     return value + 5;
// // }
// console.log(newArr);
// cách 2
const arr = [1,54,6,7];
const newArr = arr.map((value) => value + 5 ) ;

console.log(newArr);

//cách 3 
// let arr = [1, 54, 6, 7];

// let newArr = arr.map(function(item) {
//  return item + 5;
// });

// console.log(newArr);

