const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');
const auth = require('../middleware/auth');

// Apply auth middleware
router.use(auth);

// @route   GET api/schedules
router.get('/', scheduleController.getSchedules);

// @route   POST api/schedules
router.post('/', scheduleController.createSchedule);

// @route   PUT api/schedules/:id
router.put('/:id', scheduleController.updateSchedule);

// @route   DELETE api/schedules/:id
router.delete('/:id', scheduleController.deleteSchedule);

module.exports = router;
