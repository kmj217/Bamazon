var mysql = require("mysql");
var table = require("console.table");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "Shift217!!",
    database: "bamazondb"

});


function productItems() {
	connection.connect(function(err) {

		connection.query("SELECT * FROM Products", function(err, res) {
		if (err) throw err
		console.table(res , "\n");
		// productId();
		});
	});
}
productItems();

