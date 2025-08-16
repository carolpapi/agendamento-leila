class AppointmentsController {
    constructor(appointmentsData) {
        this.appointmentsData = appointmentsData;
    }

    createAppointment(req, res) {
        const { name, phone, date, time, serviceType } = req.body;

        if (!name || !phone || !date || !time || !serviceType) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const appointment = { name, phone, date, time, serviceType };
        const isAvailable = this.checkAvailability(date, time);

        if (!isAvailable) {
            return res.status(409).json({ message: 'Appointment slot is not available' });
        }

        this.appointmentsData.push(appointment);
        return res.status(201).json(appointment);
    }

    checkAvailability(date, time) {
        return !this.appointmentsData.some(appointment => 
            appointment.date === date && appointment.time === time
        );
    }
}

module.exports = AppointmentsController;