const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/notes", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "../../db/db.json"));
  const notes = JSON.parse(data);
  res.json(notes);
});

router.post("/notes", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
});

module.exports = router;
