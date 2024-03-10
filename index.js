const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/database')


app.listen(port, (err)=>{
    if(err){
        console.log("Error in connecting to the server", err)
    }
    console.log("seuccess full listen the port", port)
})