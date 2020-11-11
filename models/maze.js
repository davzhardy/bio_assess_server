const mongoose = require('./');

const Schema = mongoose.Schema;

const MazeSchema = new Schema({
  index: {type: Number},
  maze: {type: String, required: true},
});

const MazeModel = mongoose.model('Maze', MazeSchema);

module.exports = MazeModel;