import mysql from "mysql2";

//create the connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "folk3035",
  database: "hotel_db",
});

export default db;
