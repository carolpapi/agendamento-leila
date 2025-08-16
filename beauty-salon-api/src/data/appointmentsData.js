const appointments = [];

const addAppointment = (appointment) => {
    appointments.push(appointment);
};

const getAppointments = () => {
    return appointments;
};

const clearAppointments = () => {
    appointments.length = 0;
};

const isAvailable = (date, time) => {
    return !appointments.some(appointment => appointment.date === date && appointment.time === time);
};

module.exports = {
    addAppointment,
    getAppointments,
    clearAppointments,
    isAvailable
};