const http = require("http");
const sqlite3 = require('sqlite3').verbose();

const server = http.createServer((req, res) => {
    res.end("Current page for Link'd");
});

server.listen("3000", () => {
    console.log("Server is running on port 3000");
});

let db = new sqlite3.Database('./db/linked-database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the linked-database database.');
  });