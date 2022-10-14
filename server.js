const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();

// make files in public directory available
app.use(express.static("public"));

//parse JSON data
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
//routes directory
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//port you're connected to
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}.`);
});
