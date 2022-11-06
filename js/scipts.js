// //Addition function
// function toAdd(one,two){
//     return one + two;
// }
// var first = parseInt(prompt("Enter first digit: "));
// var second = parseInt(prompt("Enter second digit: "));
// var addition = toAdd(first,second);
// alert("Your sum is " + addition);


// //subtraction function
// var subtract = function(one,two){
// return one - two;
// }
// var first = parseInt(prompt("Enter first digit: "));
// var second = parseInt(prompt("Enter second digit: "));
// var difference = first - second;
// alert("Your difference is " + difference);

// //multiplication function
// function multiply(first, second){
//     return first * second;
// };
// var first = parseInt(prompt("Enter first number"));
// var second = parseInt(prompt("Enter second number"));
// var product = multiply(first, second);

// alert("Your product is " + product);

// function drive(speed, direction){
//     return speed + direction;
// };

// var speed1 = "30km/h";
// var direction1 = "right";
// var speed2 = "50km/h";
// var direction2 = "left";

// alert("Go " + speed1 + direction1);
// alert("Go "+ speed2 + direction2);


// //odd number calculator 
// const number = parseInt(prompt("Enter Number "));

// if (number%2 == 0){
//     alert("The number is even");
// }
// else{
//     alert("The number is odd");
// };

// //food calculator
// const food = prompt("What food would you like to be served? ");

// if (food == "Burger" ){
//     alert("Here is some burger for you. Anything Else?");
//     const anything = prompt("");
//     alert("You have ordered " + anything);
// }
// else{
//     alert("Sorry, we have no food at the moment. Check tomorrow");
// }

// //marks calculator
// const marks = parseInt(prompt("Enter your final marks "));

// if (marks < 0){
// alert("Please input a mark more than 0");    
// }
// if (marks <= 20){
//     alert("Your final Grade is E");
// }
// else if (marks <= 39){
//     alert("Your final Grade is D");
// }
// else if (marks <= 59){
//     alert("Your final Grade is C");
// }
// else if (marks <= 79){
//     alert("Your final Grade is B");
// }
// else if (marks <= 100){
//     alert("Your final Grade is A");
// }
// else {
//     alert("Your marks is out of range. Normal range is between 0 and 100");
// }

// //Months
// var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
// alert("We're in the month of " + months[10]);
// var monthsLast = months.pop();
// var reverseMonths = months.reverse();
// // alert(monthsLast);
// // alert(reverseMonths[0]);
// var addMonth = []
// var added = addMonth.push("Valentines");
// var added2 = addMonth.push("JoyGardens");
// alert(addMonth[0]);

//Birthday and Name Calculator
var dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;

