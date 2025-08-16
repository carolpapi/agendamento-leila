const express = require('express');
const appointmentsRouter = require('./routes/appointments');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/appointments', appointmentsRouter);

// Swagger API documentation route (to be implemented)
app.get('/api-docs', (req, res) => {
    res.send('API documentation will be available here.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});