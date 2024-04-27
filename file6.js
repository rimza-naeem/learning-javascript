//string cancatenation
let firstName = 'rimza';
console.log(firstName);
let lastName = 'naeem';
let fullName = firstName+" " + lastName;
console.log(fullName);
let strg1 = "17";
let strg2 = "20";
console.log(strg1 + strg2);
//you wnt to convert string to number
console.log(+strg1 + +strg2);
//string template
let age = 19;
let aboutMe = "my name is " +firstName  + " and my age is " + age;
console.log(aboutMe);
age = 50;
let aboutHim = 'his name is ${lastName} and his age is ${age}'
console.log(aboutHim);
//booleans
//true
//false
let num1 = 5;
let num2 = 7;
console.log(num1>num2);
num2 = '5';
console.log(num1>num2);
console.log(num1>=num2);
console.log(num1<num2);
console.log(num1==num2)
console.log(num1===num2);

num1='10';
console.log(num1==num2);
console.log(num1>num2);
console.log(num1>=num2);
