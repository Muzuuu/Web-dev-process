const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("muzammil is learning");
});
app.listen(port,() =>{
    console.log("app started");
});