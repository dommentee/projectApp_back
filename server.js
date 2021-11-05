//express//mongoose//cors//dotenv
const express = require('express');
const mongoose = require('mongoose')//for database
const cors = require('cors')
const db = mongoose.connection;
require('dotenv').config()

// middlewaregit
const app = express();


const PORT = process.env.PORT || 3003
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI);

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));



app.use(express.json())//call express.json for data
app.use(cors())

app.get('/', (req, res) => {
  res.send("post app")
})

// controllers
const postsController = require('./controllers/posts.js')
app.use('/posts', postsController)
  
app.listen(PORT, () => {
  console.log('listening to', PORT)
})
