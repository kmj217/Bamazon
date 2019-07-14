DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE Products (
 item_id INTEGER NOT NULL AUTO_INCREMENT,
 product_name VARCHAR (100),
 department_name VARCHAR (50),
 price DECIMAL(10,2),
 stock_quantity INTEGER (10) NULL,
 
 PRIMARY KEY (item_id)
 
);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Calphalon 6pc Cooking Set", "kitchen and dining", 300.00, 30),
("Home Hero Stainless Steel Knife Set", "kitchen and dining", 40.00, 50),
("Pilot G2 Pens, Black Ink, One Dozen", "school and office supplies", 11.00, 500),
("Hanging Organizer File Folders", "school and office supplies", 9.00, 200),
("SimpleHouseware Mesh Desk Organizer", "school and office supplies", 25.00, 150),
("Samsonite Hardside Luggage", "luggage", 110.00, 30),
("Sager NP7876", "electronics", 1500.00, 30),
("Fitbit Inspire", "electronics", 100.00, 50),
("Covergirl Lashblast Volume Mascara", "beauty", 5.00, 200),
("Tylenol Extra Strength", "health", 17.00, 200),
("Gold Peak Green Tea, 6 Count", "food and beverage", 5.00, 100);

SELECT *FROM Products;