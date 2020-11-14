const router = require('express').Router();
const maze = require('../controller');

router.get('/instructions/:userInput', maze.getOne);
router.post('/maze', maze.postOne);

module.exports = router;