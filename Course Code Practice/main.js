/* For Coursera - Programming with JavaScript */
// Exercise (Printing in console)
console.log("%cHello, World", "color:blue; font-size:30px");

// Exercise: Declaring variables 
// var petDog = 'Rex'
// var petCat = 'Pepper'
// console.log(petDog);
// console.log(petCat);
// console.log("My pet dog's name is: ", petDog);
// console.log("My pet cat's name is: ", petCat);
// var catSound = 'purr'
// var dogSound = 'woof'
// console.log(petDog, 'says' , dogSound);
// console.log(petCat, 'says' , catSound);
// catSound = 'meow'
// console.log(petCat, 'says' , catSound);

/* Arithmetic operators in JS:
    + addition
    - subtraction
    * multiplication
    / division
*/ 

/* Comparison operator in JS:
    > greater then
    < less then
    == equal to
*/
// console.log(2 + 2);
// console.log(1 + 2 + 4 + 5);
// console.log(20 - 17);
// console.log(2 *3);
// console.log(8 / 2);
// console.log(3 > 2);
// console.log(4 < 5);
// console.log(4 > 5);
// console.log(10 == 10);

// Exercise: Conditional and Loops (26-07-2023)

// const result = 50; 

// if(result > 40){
//     console.log('You have passed the test');
// }else{
//     console.log('You are failed');
// }

// Switch statement

// const place = 'fourth';

// switch(place){
//     case 'first':
//         console.log('Gold');
//         break;
//     case 'second':
//         console.log('Silver');
//         break;
//     case 'third':
//         console.log('Bronze');
//         break;
//     default:
//         console.log('No Medal');
// }

// For Loop

// console.log('Normal loop');
// for (let i = 0; i <= 5; i++){
//     console.log(i)
// }
// console.log('Go')

// console.log('Reversed loop');
// for (let i = 5; i >= 0; i-- ){
//     console.log(i)
// }
// console.log('Go')

// While Loop

// var counter = 3;

// while (counter > 0){
//     console.log(counter)
//     counter--;
// }
// console.log('Go')

// Nested For Loop

// for (var i = 1; i <=2 ; i++){
//     for (var j = 1; j <= 5; j++){
//         console.log('Week ' + i + ' day ' + j);
//     }
//     console.log('');
// }

// Arrays

// function listArrayItems(arr) {
//     for (var i = 1; i < arr.length; i++) {
//         console.log(i, arr[i]) //display the array item where the index is euqal to i
//     }
// }
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);


// __________________________________________
// A very good example to explain function
// with for and if
// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == 'red') {
//             console.log(i*100, "tomato!")
//         } else {
//             console.log(i*100, arr[i])
//         }
//     }
//  }

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);
// __________________________________________


/* __________________________________________

Exercise: Practicing with functions
Your task in this exercise is to code a function which will be able to take a word and locate the position of a chosen letter in that given word.  

Task 1:
Write a function named letterFinder that accepts two parameters: word and match.

Task 2:
Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.

Task 3:
Add an if statement inside the for loop whose condition works as follows:

 Access each of the letters inside the passed in word using the counter variable, with word[i]. 

Check if the current word[i] is equal to the value of match.

Task 4:
console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

Task 5:
Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

Task 6:
Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".

// __________________________________________

Your output should be the following:

Found the t at 0

---No match found at 1

---No match found at 2

Found the t at 3
 __________________________________________ */

//  function letterFinder(word, match){
//     for (var i = 0; i < word.length; i++){
// // Access each of the letters inside the passed in word using the counter variable, with word[i].         
//         if(word[i] == match){
//             console.log('Found the', match, 'at', i);
//         }else{
//             console.log('--No match found at', i);
//         }
//     }
// }
// letterFinder('nauman', 'n');

// Object literals and the Brackets Notation

// var arrOfKeys = ['speed', 'altitude', 'color'];
// var drone = {
//     speed: 100,
//     altitude: 200,
//     color: "red"
// }
// for (var i = 0; i < arrOfKeys.length; i++) {
//     console.log(drone[arrOfKeys[i]])
// }

/*
Exercise: Creating arrays and objects
In this exercise lab you will practice creating arrays and objects.

Tasks to complete
Create a new empty array literal and assign it to the variable clothes.

Add 5 of your favorite items of clothing as strings using the push() method.

Remove the fifth piece of clothing from the array using the pop() method.

Add a new piece of clothing using the push() method.

Use console.log to show the third item from the clothes array in the console.

Create a new empty object literal and assign it to the variable favCar.

Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

Use the console to log the entire favCar object.

12345678910111213
var clothes = [];
clothes.push('Levis');
clothes.push('Trousers');
clothes.push('Pajamas');
clothes.push('Kurtas');
clothes.push('Jackets');
clothes.pop([4]);
console.log(clothes[3]);

var favCar = {};
favCar.color = 'Charcoal Grey';
favCar.convertible = true;
console.log(favCar);
Reset
Kurtas
{ color: 'Charcoal Grey', convertible: true }

Tips
Remember to use the object literal syntax: {}.

Remember to use the array literal syntax: [].

Resources
Video (Conceptual): Arrays


Video (Mix): Introduction to Arrays


Video (Conceptual): Objects


Video (Mix): Objects
*/

// var clothes = [];
// clothes.push('Levis');
// clothes.push('Trousers');
// clothes.push('Pajamas');
// clothes.push('Kurtas');
// clothes.push('Jackets');
// clothes.pop([4]);
// console.log(clothes[3]);

// var favCar = {};
// favCar.color = 'Charcoal Grey';
// favCar.convertible = true;
// console.log(favCar);
//-----------------------------------------


// typeof

// var test = typeof('What is this?');

// var test = typeof(10);

// var test = typeof(3.14);

// var test = typeof(true);

// var test = typeof(false);

// var test = typeof(1 < 2);

// var test = typeof(1, 2, 3);

// var test = typeof({ firstProperty: 1});

// var test = typeof(function abc(){ console.log('abc'); });

// console.log(test);

//-----------------------------------------

// error handling


// function addTwoNums (a, b) {
//     try {
//         if(typeof (a) != 'number'){
//             throw new ReferenceError('the first argument is not a number');
//         }else if (typeof (b) != 'number'){
//             throw new ReferenceError('the second argument is not a number');
//         }else{
//             console.log(a + b);
//         }
//     }catch (err){
//         console.log("Error!", err);
//     }

// }
// addTwoNums(5 , '5');

// console.log('It still works');





// function letterFinder (word, match){
//     var condition1 = typeof(word) == 'string' && word.length >= 2;
//     var condition2 = typeof (match) == 'string' && match.length == 1;
//     if(condition1 == true && condition2 == true) {
//     for (var i = 0; i < word.length; i++) {
//         if(word[i] == match){
//             //if the current character at position i in the word is equal to match
//             console.log('Found the ', match, 'at', i);
//         }else{
//             console.log('---No match found at', i);
//             }
//         }

//     }else{
//         console.log('Please pass correct arguments to the function.');
//     }

// }
// letterFinder(4, 7);
// letterFinder("cat", "c");


// var result = null;
// console.log(result)

// try {
//     console.log('hello);
// }catch (e){
//     console.log('shit');
// }

// throw new Error();
// console.log("Hello");

// try {
//     throw new Error();
//     console.log('hello');
// }catch (err){
//     console.log('shit');
// }

// var str = "Hello";
// str.match("jello");

// The functional programming paradigm - Week 3

// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { 
//     return 42 
// };

// var useRandom = true;

// var getNumber;
// debugger;
// if(useRandom) {
//     debugger;
//     getNumber = randomNum
//     debugger;
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())

//Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } 
    else if (reason == "champions") {
        console.log(`%cCongrats on the title`, fontStyle);
    } 
    else {
       console.log(message, style); 
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom messages
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
// Call styleAndCelebrate   
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');


// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     var message = "%c" + txt;
//     var style = `color: ${color};`;
//     style += `background: ${background};`;
//     style += `font-size: ${fontSize};`;
//     console.log(message, style);
// }
// //Lesson learnt about the test two
// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     if (typeof (reason) !== "string") {
//         throw TypeError("reason is not string");
//     } try {
//         var fontStyle = "color: tomato; font-size: 50px";
//         if (reason == "birthday") {
//             console.log(`%cHappy birthday`, fontStyle);
//         } else if (reason == "champions") {
//             console.log(`%cCongrats on the title`, fontStyle);
//         } else {
//             console.log(message, style);
//         }
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');

// // Task 4: Insert a congratulatory and custom messages
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//     consoleStyler(color, background, fontSize, txt);
//     celebrateStyler(reason);
// }
// // Call styleAndCelebrate
// styleAndCelebrate('#ef7c8e', '#fae8e0', '30px', 'You made it!', 'champions');

//============Task 1 Test Passed Successfully===========

// Task 1: Build a function-based console log message generator
function consoleStyler(color,background ,fontSize,txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {

    var fontStyle = "color: tomato; font-size: 50px";
    if ( reason == "birthday")
    {
     console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(reason,fontStyle);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');


// // Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt ,reason) {
consoleStyler(color, background, fontSize, txt);
celebrateStyler(reason);
}
// Call styleAndCelebrate

styleAndCelebrate('ef7c8e','fae8e0','30px','You made it!','champions');
