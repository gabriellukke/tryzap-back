require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();

const socketOptions = require('./utils/socketOptions');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const socketIoServer = require('http').createServer(app);

const io = require('socket.io')(socketIoServer, socketOptions);

const onConnection = (socket) => {
  console.log(`Usuario de id ${socket.id} conectado`);

  socket.on('message', (info) => console.log(info))
} 

io.on('connection', onConnection);

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' })
});

module.exports = socketIoServer;
