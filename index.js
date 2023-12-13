const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URL } = require('./config');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());

//app.use((req,res,next)=>{
   //res.setHeader('Access-Control-Allow-Origin','*');
   //res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
   //res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
   //next(); 
//})

mongoose.set('strictQuery', false);
const postsRoutes = require('./routes/post');

app.use('/api/posts',postsRoutes);
//connect MOngobd
mongoose.connect(MONGO_URL)
   .then(() => console.log('Mongodb connected.'))
   .catch(err => console.log(err));








const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`lesigning to the port ${port}`));