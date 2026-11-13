const Schedule = require('../models/Schedule');

// Get all schedules for user
exports.getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find({ userId: req.user.id });
    res.json(schedules);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create a new schedule entry
exports.createSchedule = async (req, res) => {
  try {
    const { subject, day, startTime, endTime } = req.body;
    const newSchedule = new Schedule({
      subject,
      day,
      startTime,
      endTime,
      userId: req.user.id
    });
    const schedule = await newSchedule.save();
    res.json(schedule);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a schedule entry
exports.updateSchedule = async (req, res) => {
  try {
    const { subject, day, startTime, endTime } = req.body;

    let schedule = await Schedule.findById(req.params.id);
    if (!schedule) return res.status(404).json({ message: 'Schedule not found' });

    if (schedule.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const scheduleFields = { subject, day, startTime, endTime };
    
    schedule = await Schedule.findByIdAndUpdate(
      req.params.id,
      { $set: scheduleFields },
      { new: true }
    );
    res.json(schedule);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a schedule entry
exports.deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) return res.status(404).json({ message: 'Schedule not found' });

    if (schedule.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ message: 'Schedule removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
