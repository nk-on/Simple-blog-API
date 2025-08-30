require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const path = require("path");
const { getAllPosts, getPostById , addPost} = require("./controllers/postControllers");
app.use(express.urlencoded({extended:true}));
app.get("/", (req, res) => {
  return res.send("<h1>Welcome to Simple blog API</h1>");
});
app.get("/posts", getAllPosts);
app.get("/posts/:id", getPostById);
app.get("/createAuthor", (req, res) => {
  return res.sendFile(path.join(__dirname, "Form.html"));
});
app.post('/createAuthor',addPost)
app.listen(PORT, () => {
  console.log("i work");
});
