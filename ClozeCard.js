var inquirer = require("inquirer");
var fs = require("fs");
// var flashCards = require("./Flashcards.json");

switch (process.argv[2]) {
	case "basic":
		var frontCard = inquirer.prompt([
		{
			type: "input",
			name: "frontCard",
			message: "Front card: "
		},
		{
			type: "input",
			name: "backCard",
			message: "Back card: "
		}
		]).then(function(fandb) {
			var flashCard = BasicCard(fandb.frontCard, fandb.backCard);
			flashCard.makeCard();
		});
		break;
		case "cloze":
			var clozeCard = inquirer.prompt([
		{
			type: "input",
			name: "text",
			message: "Full card: "
		},
		{
			type: "input",
			name: "cloze",
			message: "Hidden text: "
		}
		]).then(function(fandb) {
			var flashCard = ClozeCard(fandb.text, fandb.cloze);
			flashCard.makeCard();
		});
		break;
		default:
			console.log("err");
		}

function BasicCard(front, back) {
	if (this instanceof BasicCard) {
		this.front = front;
		this.back = back;
	}
	else {
		BasicCard(front, back);
	}
}

function ClozeCard(text, cloze) {
	if (this instanceof ClozeCard) {
		this.text = text;
		this.cloze = cloze;
		this.hidden = text.replace(cloze, "(____)")
	}
	else {
		console.log("err");
	}
}

BasicCard.prototype.makeCard = function() {
	console.log("frontCard: " + this.front + "\nbackCard: " + this.back);
}

ClozeCard.prototype.makeCard = function() {
	if (this.text.included(this.cloze)) {
		console.log("Success: " + this.hidden);
	}
	else {
		console.log("err");
	}
}

//console.log(flashCards);
// var start = function() {
// 	if (err) {
// 		console.log(err);
// 	}
// 	inquirer.prompt({
// 		name: "flashCards",
// 		message: "Choose [basic] or [cloze]",
// 		choices: ["basic", "cloze"]
// 	}).then(function(answer) {
// 		if (answer.basic) {
// 			BasicCard();
// 		}
// 		else {
// 			ClozeCard();
// 		}
// 	});
// };

// Create a BasicCard constructor. It should accept front and back arguments.
// function BasicCard(front, back, cloze) {
// 	this.front = front;
// 	this.back = back;
// 	this.cloze = cloze;
// }

// var BasicCard = function() {
// 	inquirer.prompt([{
// 		name: ,
// 		message:
// 	}, {
// 		name: ,
// 		message:
// 	}]).then(function())
// }

	//front function firstPresident.front take in argF

	//back function takes in argB

	
	// ClozeCard function
// function ClozeCard(textArg, clozeArg, fullArg) {
// 	this.textArg = textArg;
// 	this.clozeArg = clozeArg;
// 	this.fullArg = fullArg;
// }

	// cloze function ex. 'George Washington'

	// partial function ex. 'was the first president of the United States Of America'

// }

// This take in command line arguments and will execute the correct function
// var inputArgs = function(argF, argB) {
// 	pick(argF, argB);
// };

// inputArgs(process.argv[2], process.argv[3]);


// Create a ClozeCard constructor. It should accept text and cloze arguments.

// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 