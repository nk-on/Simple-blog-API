require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const {getAllPosts,getPostById }= require('./controllers/postControllers')
app.get('/',(req,res)=>{
    return res.send('<h1>Welcome to Simple blog API</h1>');
});
app.get('/posts',getAllPosts);
app.get('/posts/:id',getPostById);
app.listen(PORT,()=>{
    console.log('i work')
})
