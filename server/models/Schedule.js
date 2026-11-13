const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  day: { 
    type: String, 
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true 
  },
  startTime: { type: String, required: true }, // Format HH:mm
  endTime: { type: String, required: true },   // Format HH:mm
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Schedule', scheduleSchema);
