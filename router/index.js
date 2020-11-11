const router = require('express').Router();
const maze = require('../controller');

router.get('/maze', maze.getOne);
router.post('/maze', maze.postOne);

module.exports = router;