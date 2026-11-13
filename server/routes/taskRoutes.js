const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');

// Apply auth middleware to all routes
router.use(auth);

// @route   GET api/tasks
router.get('/', taskController.getTasks);

// @route   POST api/tasks
router.post('/', taskController.createTask);

// @route   PUT api/tasks/:id
router.put('/:id', taskController.updateTask);

// @route   DELETE api/tasks/:id
router.delete('/:id', taskController.deleteTask);

module.exports = router;
