// function declaration
// function greet() {
//     console.log('hello there');
// }

// // function expression
// const speak = function () {
//      console.log('good day!');
// };


// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

/* ===============================*/
// Arguments & parameters

// const speak = function (name = 'luigi', time = 'night') {
//     console.log(`good ${time} ${name}`)
// }

// speak('mario', 'morning');
// speak('shaun');


/* ===============================*/
// returning values

// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log(area); 

// const calcVol = function(area) {
    
// };
// console.log(calcVol(area));

/* ===============================*/
// arrow function

// regular function
// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// };

// arrow function
// const calcArea = radius => 3.14 * radius**2;;

// const area = calcArea(5);
// console.log('area is:', area);

// practise arrow functions

// const greet = function() {
//     return 'hello, world!';
// };

// const greet = () => 'hello, world!';
// console.log(greet());

// // const bill = function(products, tax) {
// //     let total = 0;
// //     for (let i = 0; i < products.length; i++) {
// //         total += products[i] + products[i] * tax;
// //     }
// //     return total;
// // }

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10, 15, 30], 0.2));

/* ===============================*/
// function & methods
// const name = 'shaun';

// // functions
// const greet = () => 'Hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

/* ===============================*/
// callbacks & foreach

// let people = ['mario', 'lugi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - ${person}`);
// }

// people.forEach(logPerson) 

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
})

console.log(html);
ul.innerHTML = html;
