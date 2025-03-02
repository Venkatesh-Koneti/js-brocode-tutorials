// ES6 Module = An external file that contains reusable code
//                          that can be imported into other JavaScript files
//                          Can contain variables, classes, functions ... and more
//                          Introduced as part of ECMAScript 2015 update
// const PI = 3.14159;

// function getCircumference(radius){
//     return 2 * PI * radius;
// }

// function getArea(radius){
//     return PI * radius * radius;
// }

// function getVolume(radius){
//     return 4 /3 * PI * radius * radius * radius;
// }

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);