const express = require('express');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger');

const app = express();
app.use(express.json());

app.use('/agendamentos', agendamentoRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('API do Salão de Beleza - Agendamento');
});

module.exports = app;
