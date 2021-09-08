const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/database')


const app = express();


connectDB();
app.use(bodyParser.json())
app.use('/api',require('./route/card'))

app.listen(3001, () => console.log('Server is listenning on port 3001'))