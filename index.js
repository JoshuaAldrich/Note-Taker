const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "./db/db.json"));
  const notes = JSON.parse(data);
  res.json(notes);
});

app.listen(3001);
console.log(__dirname);
