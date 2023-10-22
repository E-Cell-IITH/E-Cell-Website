const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require("fs")
const https = require('node:https');

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

// app.listen(3001, ()=>{
//
//     console.log('server is running at 3001');
// })

const options = {
  key: fs.readFileSync('./certs/ecell.kludge.in/privkey1.pem'),
  cert: fs.readFileSync('./certs/ecell.kludge.in/cert1.pem')
};

const server = https.createServer(
  options,
  app
)

const port = 3001
server.listen(port, () => console.info("Server listening on port " + port + "..."));

