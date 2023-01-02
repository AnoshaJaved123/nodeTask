// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const DBURL = 'mongodb+srv://vercel-admin-user:1H1Di7ZJrWFgCMOi@cluster0.2pxbf5w.mongodb.net/nodetask';
mongoose.set('strictQuery', true);
mongoose.connect(DBURL,{
    //must add in order to not get any error masseges:
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>
    console.log("connection start")).catch((error)=> console.log(error.message));
