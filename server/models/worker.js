const mongoose = require('mongoose');

let WorkerSchema = new mongoose.Schema({
    userId: String,
    createdTime: Number,
    modifiedTime: Number,
    jobType: String,
    status: String,
    experience: String,
    paymentInfo: String,
    notes: String,
    rating: Number

});

module.exports = mongoose.model('Worker', WorkerSchema);
