const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');

router.post('/appointments', appointmentsController.createAppointment);

module.exports = router;