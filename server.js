require('./constants');
const express = require('express')
const app = express()
const port = 3000
const sequelize = require('./config/db');
var bodyParser = require('body-parser');
const { Server } = require("socket.io");
const io = new Server();
var cors = require('cors');
var path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'application/uploads')));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const approuter = require("./routes/admin");
app.use('/admin',approuter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})