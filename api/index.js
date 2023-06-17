const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv').config();
const PORT=process.env.PORT || 4000;
const DATABASE_URL=process.env.DATABASE_URL;
const router=require('../api/routes/routes')
const mongoose=require('mongoose');

app.use(express.json())
app.use(cors())

app.use('/listdata',router);

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

const db=mongoose.connection;

db.on('error',(error)=>{
    console.log(error)
})

db.once('open', () => {
    console.log("connected to database")
})

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(PORT,()=>{
    console.log('connected to port',PORT);
})