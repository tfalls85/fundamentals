var hobbiesList = document.getElementById("hobby-list");
console.log(hobbiesList);

var hobbies = document.getElementsByClassName("hobby");
console.log(hobbies[0].innerHTML); //an array
console.log(hobbies[3].innerHTML);

function favoriteBand() {
	document.getElementById("favorite").innerHTML = "Jon Foreman";
}

favoriteBand();

function worstBand() {
	document.getElementById("worst").innerHTML = "Limp Bizkit";
}

worstBand();

function bestBand() {
	document.getElementById("best").innerHTML = "Switchfoot";
}

bestBand();
