const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    userId: String,
    workerId: String,
    createdTime: Number,
    modifiedTime: Number,
    appointmentTime: Number,
    status: String,
    mobileNumber: Number,
    address: String,
    task: String,
    taskNotes: String,

});

module.exports = mongoose.model('Appointment', AppointmentSchema);
