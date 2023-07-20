const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST || 'localhost',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || "root",
	database: process.env.MYSQL_DATABASE || 'mydatabase',
});

const createTableQuery = `CREATE TABLE IF NOT EXISTS people (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL
)`;
connection.query(createTableQuery, (err) => {
	if (err) throw err;
	console.log("Table created or already exists")
});

app.get('/add/:name', (req, res) => {
	const {name} = req.params;
	const insertQuery = 'INSERT INTO people (name) VALUES (?)'
	connection.query(insertQuery, [name], (err, result) => {
		if (err) throw err;
		console.log(`Data inserted: ${result}`);
		res.send(`Data inserted: ${name}`);
	});
});

app.get("/", (req,res) => {
	res.send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(8080, () => {
	console.log("Node.js app listening on port 8080");
});

