//Addition function
function toAdd(one,two){
    return one + two;
}
var first = parseInt(prompt("Enter first digit: "));
var second = parseInt(prompt("Enter second digit: "));
var addition = toAdd(first,second);
alert("Your sum is " + addition);


//subtraction function
var subtract = function(one,two){
return one - two;
}
var first = parseInt(prompt("Enter first digit: "));
var second = parseInt(prompt("Enter second digit: "));
var difference = first - second;
alert(difference);

//multiplication function
function multiply(first, second){
    return first * second;
};
var first = parseInt(prompt("Enter first number"));
var second = parseInt(prompt("Enter second number"));
var product = multiply(first, second);

alert(product);
