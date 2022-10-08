router.get("/api/notes", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "./db/db.json"));
  const notes = JSON.parse(data);
  res.json(notes);
});

router.post("/api/notes", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
});
