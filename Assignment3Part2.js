// ------part 2 -------
// Rock, Paper or Scissor

/*var roPaSc = Math.random();
var choice = window.prompt("Make your choice! Rock, Paper or Scissors");

var result;
if (roPaSc < 0.33) {
	result = "rock";
} else if (roPaSc < 0.66) {
	result = "paper";
} else if (roPaSc < 0.99) {
	result = "scissors";
}

if (result == "rock" && choice == "rock")  {
	window.alert("Awesome! You made the right choice");
}else if (result == "rock" && choice == "paper"){
	window.alert("Try again! You got it wrong.");
}else if (result == "rock" && choice == "scissors"){
	window.alert("Try again! You got it wrong.");
}else if (result == "paper" && choice == "paper"){
	window.alert("Awesome! You made the right choice");
}else if (result == "paper" && choice == "rock"){
	window.alert("Try again! You got it wrong.");
}else if (result == "paper" && choice == "scissors"){
	window.alert("Try again! You got it wrong.");
}else if (result == "scissors" && choice == "scissors"){
	window.alert("Awesome! You made the right choice");
}else if (result == "scissors" && choice == "rock"){
	window.alert("Try again! You got it wrong.");
}else if (result == "scissors" && choice == "paper"){
	window.alert("Try again! You got it wrong.");
}
else if (choice !== "paper" || "rock" || "scissors") {
	window.alert("Please make a correct entry.");
}*/

// Basic Calculator

/*var firstNumber = window.prompt("Enter a number here.");
var secondNumber = window.prompt("Enter another number here.");
var operation = window.prompt("Choose an operation you would like to perform (add, subtract, multiply, divide)");
function calculate(x, y, z) {switch (operation) {
    case "add":
        window.alert(Number(firstNumber) + Number(secondNumber));
        break;
        case "subtract":
        window.alert(Number(firstNumber) - Number(secondNumber));
        break;
        case "multiply":
        window.alert(Number(firstNumber) * Number(secondNumber));
        break;
        case "divide":
        window.alert(Number(firstNumber) / Number(secondNumber));
        break;
    default:
         window.alert("Check your entry!");
}
   
}
calculate(Number(firstNumber), Number(secondNumber), operation);*/

// Death by JavaScript

// Q 1

/*function azOrder(z)  
  {  
return z.split('').sort().join('');  
  }  
window.alert(azOrder("webmaster"));*/ 

// Q 2

/*function azOrder(z)  
{  
  var str = z.split(' ');  
  var toUC = [];  
      
  for(var x = 0; x < str.length; x++){  
      toUC.push(str[x].charAt(0).toUpperCase()+str[x].slice(1));  
  }  
  return toUC.join(' ');  
}  
window.console.log(azOrder("the quick brown fox"));*/

// Q 3

/*function vc(str)  
{  
  var allvowels = 'aeiou';  
  var v = 0;  
    
  for(var x = 0; x < str.length ; x++)  
  {  
    if (allvowels.indexOf(str[x]) !== -1)  
    {  
      v += 1;  
    }  
    
  }  
  return v;  
}  
window.console.log(vc("The quick brown fox"));*/  

// Q 4

/*function password()
{
    var text = "";
    var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += options.charAt(Math.floor(Math.random() * options.length));

    return text;
}
window.alert(password());*/

// Q 5

function country(x){
x.sort(function(a,b){
    return b.length-a.length
});
		return x[0];
}

	console.log(country(["Australia", "Germany", "United States of America"]));

