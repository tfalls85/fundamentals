var elevatorUp = true;
var elevatorBroke = true;
var elevatorDown = true;
var elevatorStop = true;

if (elevatorUp === true) {
	console.log("Going up");
} else {
	console.log("The elevator is either broken or going down.");
}

if (elevatorBroke === true) {
	console.log("Somebody help!");
} else {
	console.log("Nothing to see here.");
}

if (elevatorStop) {
	console.log("Please watch your step.");
} else {
	console.log("Keep your arms and legs in the elevator while moving.");
}

if (elevatorDown === true) {
	console.log("Going down.");
} else {
	console.log("The elevator is either broken or going up");
}

if (elevatorDown || elevatorUp) {
	console.log("Keep your arms and legs inside the elevator while moving.");
} else {
	console.log("You've reached your destination.");
}