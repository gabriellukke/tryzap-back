const socketOptions = {
  cors: {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'PATCH','DELETE'],
    credentials: true
  },
};

module.exports = {
  socketOptions,
};
