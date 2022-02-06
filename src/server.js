const database = require('./config/database');
const server = require('./chat/server');

const PORT = process.env.PORT || 3001;

database.connect().then(() => {
  server.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
});
