const dotenv = require("dotenv");

dotenv.config();
const express = require('express');
const app = express();

const mongoose = require('mongoose')
require('./dbConfig')
var cors = require('cors');


const PORT = process.env.PORT || 5003
app.get("/", (req,res)=>{
    res.json("server start")
})
app.use(express.json())



app.use(cors());
// app.use(express.json())
app.use(cors());
app.use('/api/userAuth', require('./Routes/userAuth'))
app.use('/api/fileAuth', require('./Routes/fileAuth'))


app.listen(PORT, ()=>{
    console.log(`app is listining at port ${PORT}`)
})