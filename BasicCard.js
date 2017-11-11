// var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

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
		message: "What is the next question?"
	},{
		type: "input",
		name: "Back",
		message: "What is your answer?"
	//this is where the promise goes
	}]).then(function(inputs){
		var card = new BasicCard(inputs.FrontSide, inputs.BackSide);
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



// [
// {
// 	"front": "George...was the first preseient of the United States."
// 	"back": "George Washington"
// },
// {
// 	"front": "John...was the second preseient of the United States."
// 	"back": "John Adams"
// },
// {
// 	"front": "Thomas...was the third preseient of the United States."
// 	"back": "Thomas Jefferson"
// },
// {
// 	"front": "James...was the fourth preseient of the United States."
// 	"back": "James Madison"
// },
// {
// 	"front": "James...was the fifth preseient of the United States."
// 	"back": "James Monroe"
// },
// {
// 	"front": "John...was the sixth preseient of the United States."
// 	"back": "John Quincy Adams"
// },
// {
// 	"front": "Andrew...was the seventh preseient of the United States."
// 	"back": "Andrew Jackson"
// },
// {
// 	"front": "Martin...was the eigth preseient of the United States."
// 	"back": "Martin Van Buren"
// },
// {
// 	"front": "William...was the nineth preseient of the United States."
// 	"back": "William Henry Harrison"
// },
// {
// 	"front": "John...was the tenth preseient of the United States."
// 	"back": "John Tyler"
// },
// {
// 	"front": "James...was the eleventh preseient of the United States."
// 	"back": "James K. Polk"
// },
// {
// 	"front": "Zachory...was the twelfth preseient of the United States."
// 	"back": "Zachory Taylor"
// },
// {
// 	"front": "Millard...was the thirteeth preseient of the United States."
// 	"back": "Millard Fillmore"
// },
// {
// 	"front": "Franklin...was the fourteenth preseient of the United States."
// 	"back": "Franklin Pierce"
// },
// {
// 	"front": "James...was the fifteenth preseient of the United States."
// 	"back": "James Buchcanan"
// },
// {
// 	"front": "Abraham...was the sixteenth preseient of the United States."
// 	"back": "Abraham Lincoln"
// },
// {
// 	"front": "Andrew...was the seventh preseient of the United States."
// 	"back": "Andrew Johnson"
// },
// {
// 	"front": "Ulysses...was the eighteenth preseient of the United States."
// 	"back": "Ulysses S. Grant"
// },
// {
// 	"front": "Rutherford...was the nineteenth preseient of the United States."
// 	"back": "Rutherford B Hayes"
// },
// {
// 	"front": "James...was the twentieth preseient of the United States."
// 	"back": "James A. Garfield"
// },
// {
// 	"front": "Chester...was the twenty first preseient of the United States."
// 	"back": "Chester Arthur"
// },
// {
// 	"front": "Grover...was the twenty second preseient of the United States."
// 	"back": "Grover Cleveland"
// },

// }]