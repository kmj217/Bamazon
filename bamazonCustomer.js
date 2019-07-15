// Require mysql inquirer and console.table
var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

// establish
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "Shift217!!",
    database: "bamazondb"

});

function allItems() {
	connection.connect(function(err) {

		connection.query("SELECT * FROM Products", function(err, res) {
		if (err) throw err
		console.table(res , "\n");
		buyItem();
		});
	});

}
allItems();

function buyItem() {

	inquirer.prompt([

		{
		 type: "input",
		 name: "id",
		 message: "Please enter the Item ID of the product you would like to buy.\n",
		 validate: function(value) {
		 	if (!isNaN(value) && value < 11) {
		 		return true;
		 	}
		 	return false;
		 }
		},

		{
		 type: "input",
		 name: "amount",
		 message: "How many units of the product would you like to buy? \n",
		 validate: function(value) {
		 	if (!isNaN(value)) {
		 		return true;
		 	}
		 	return false;
			}
		}

		]).then(function(answer) {

			var userId = answer.id;
			console.log("Chosen item number: " , userId);

			var userAmount = answer.amount;
			console.log("Chosen amount from stock: " , userAmount , "\n");

			connection.query("SELECT * FROM products WHERE ?", [{ Item : userId }], function(err, res) {
				if (err) throw err;
				
				console.table(res);
				var current_amount = res[0].Stock;
				console.log("Current amount in stock: " , current_amount);
				var price = res[0].Price;
				var remaining_amount = current_amount - answer.amount;
				console.log("Remaining amount in stock: " , remaining_amount);

				if(current_amount > answer.amount) {

					console.log("Amount Remaining: " + remaining_amount);
					console.log("Total Cost: " + (answer.amount * price) + "\n");

					connection.query("UPDATE Products SET Stock=? WHERE Item=?",
                    [
                    remaining_amount, answer.id
                    ],

					
						function(err, res){
							console.table(res);
							if (err) throw err;
						});

					connection.query("SELECT * FROM Products", function(err, res) {

						console.log("This is the updated inventory of product items: ");
						console.log("------------------------------------------------ \n");
						console.table(res);
						if (err) throw err;
					});

				} else {
					console.log("Insufficient stock remaining. Please enter a new amount.");
				}

			connection.end();

			});
		})

}