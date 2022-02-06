const { createServer } = require('http');
const socketIo = require('socket.io');

const app = require('../app');
const { socketOptions } = require('./chatHelpers');

const socketIoServer = createServer(app);

const io = socketIo(socketIoServer, socketOptions);

const onConnection = (socket) => {
  console.log(`Usuario de id ${socket.id} conectado`);

  socket.on('message', (info) => console.log(info))
} 

io.on('connection', onConnection);

module.exports = socketIoServer;

