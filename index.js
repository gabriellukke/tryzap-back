const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const port = 3001;

const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true
  }
})

app.use(cors());

server.listen(port, () => console.log('RODANDO'));

io.on('connection', (socket) => {
  socket.on('Teste', (info) => console.log(info))
});
