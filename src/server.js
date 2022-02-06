const database = require('./config/database');
const app = require('./app');

const PORT = process.env.PORT || 3001;

database.connect().then(() => {
  app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
});
