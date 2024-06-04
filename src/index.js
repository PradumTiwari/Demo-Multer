import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js'
import User from './models/User.js';
const app=express();
app.use(bodyParser.json());




app.listen(3000,async()=>{
    console.log('Server is running on port 3000');
    await connect();
  

})