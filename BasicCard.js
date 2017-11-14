// var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
// var require = require("./BasicCard.json");
//Card Constructor


function BasicCard (Front, Back){

this.Front = Front;
this.Back = Back;


}//end of constructor

//Make inquiere prompt to use the constructor

function createNewCard(){

	inquirer.prompt([{
		type: "input",
		name: "Front",
		message: "What is the question?"
	},{
		type: "input",
		name: "Back",
		message: "What is your answer?"
	//this is where the promise goes
	}]).then(function(inputs){
		var card = new BasicCard(inputs.Front, inputs.Back);
		console.log(card);
	})


}//end of function

createNewCard();

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// }//end of constructor


