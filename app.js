require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.listen(PORT,()=>{
    console.log('i work')
})
