const mysql = require('mysql');
const connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: '#PASS@d4t4',
});

connection.connect((error) => {
	  if(error){
		      console.log('Error connecting to the MySQL Database');
		      return;
		    }
	  console.log('Connection established sucessfully');
});
connection.end((error) => {
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.listen(port, () => {
  console.log('Server running at http://localhost:$port');
});
