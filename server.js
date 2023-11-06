const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/my-cms');
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require("./models/user");
const Content = require("./models/content");

app.use("/signup", require("./routes/signup"));
app.use("/login", require("./routes/login"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/cms.html');
});

app.post("/add-content", async (req, res) => {
  const { title, author, domain, content } = req.body;

  try {
    const newContent = await Content.create({ title, author, domain, content });
    alert('Content added successfully!');
    //res.json({ success: true, content: newContent });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
