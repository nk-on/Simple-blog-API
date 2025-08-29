require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const {getAllPosts }= require('./controllers/postControllers')
app.get('/',getAllPosts);
app.listen(PORT,()=>{
    console.log('i work')
})
