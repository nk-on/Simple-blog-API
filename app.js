require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const path = require("path");
const {
  getAuthorById,
  addAuthor,
  getAllAuthors,
} = require("./controllers/postControllers");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  return res.send("<h1>Welcome to Simple blog API</h1>");
});
app.get("/authors", getAllAuthors);
app.get("/authors/:id", getAuthorById);
app.get("/createAuthor", (req, res) => {
  return res.sendFile(path.join(__dirname, "Form.html"));
});
app.post("/createAuthor", addAuthor);
app.use((err, req, res, next) => {
  console.log("i am here");
  return res.status(err.statusCode || 500).json({ message: err.message });
});
app.listen(PORT, () => {
  console.log("i work");
});
