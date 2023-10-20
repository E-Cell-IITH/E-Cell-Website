const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));

// const uri=process.env.MONGO_URI
const uri=process.env.URL

const startupRoutes = require('./routes/input');
app.use(`/input`, startupRoutes);

mongoose.connect(uri)
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

app.listen(3001, ()=>{

    console.log('server is running at 3001');
})