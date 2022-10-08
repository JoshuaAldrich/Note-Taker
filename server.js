const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require(".routes/htmlRoutes");
const app = express();

// make files in public directory available
app.use(express.static("public"));

//routes directory
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

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

app.post("/api/notes", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
});

app.listen(PORT, () => {
  console.log("API server now on port ${PORT}.");
});
