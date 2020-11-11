const router = require('express').Router();
const maze = require('../controller');

router.post('/instructions', maze.getOne);
router.post('/maze', maze.postOne);

module.exports = router;