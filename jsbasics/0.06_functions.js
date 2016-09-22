
// //Declaration
// function helloWorld() {
// 	console.log("Hello World");
// }

// //Call
// helloWorld();

// function printMyName() {
// 	console.log("Travis Falls");
// }

// printMyName();

// //Declaration #2
// var name = function myName() {
// 	console.log("Travis Falls");
// }

// //Call
// name();

// //Scope
// function addNumbers() {
// 	var x = 10;
// 	var y = 10;
// 	console.log(x + y);
// }

// addNumbers();

// //Practice
// function multiplyNumbers() {
// 	var x = 11;
// 	var y = 9;
// 	console.log(x * y);
// }

// multiplyNumbers();

// //Parameters & Arguments
// function randomNumber (x) {
// 	console.log("The number you entered was : " + x);
// }

// randomNumber(6);

// function bankPin(x) {
// 	var cardPin = 5678;

// 	if (cardPin != x) {
// 		console.log("Try again!");
// 	} else {
// 	console.log("You are correct!");
// }
// }
// bankPin(5678);

// function numAdd(a, b) {
// 	return a + b;
// }

// console.log(numAdd(1, 2));
// console.log(numAdd("Travis", " Falls"));


//Bronze
function myNameIs () {
	var firstName = "Travis";
	var lastName = "Falls";
	console.log(firstName + " " + lastName);
}

myNameIs();


//Silver
function addBills (mortgage, phone, internet) {
	return mortgage + phone + internet
}

console.log(addBills(800, 150, 25));

//Gold
function costCalc (sodas) {
	var beforeTax = (sodas * .99)
	return beforeTax + (beforeTax * 0.07)
}

console.log(costCalc(100));

function calculatePrice (quantity, cost, item, tax) {
	var tax = 0.07;
	var totalTax = (quantity * cost * tax);
	var totalPrice = quantity * cost + totalTax;
	return quantity + " " + item + " will cost you $" + totalPrice.toFixed(2);
}

console.log(calculatePrice(100, .99, "soda", 0.07));














