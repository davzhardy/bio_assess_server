const Maze = require('../models/maze');
const helperfunctions = require('../helper');

async function getOne (req, res) {
  try {
    const mazeObj = await Maze.findOne({index:0});
    const mazeArray = JSON.parse(mazeObj.maze);
    const userInstructions = req.body.instructions;
    const output = helperfunctions.mazeSolver(mazeArray, userInstructions)
    res.send(output);
  } catch (e) {
    console.log('Error', e); // eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function postOne (req, res) {
  try {
    const layout = JSON.stringify(req.body.layout)
    const newMaze = await Maze.create({
      index: 0,
      maze: layout,
    });
    res.status(200);
    res.send(newMaze);
  } catch (e) {
    console.log('Error', e); // eslint-disable-line no-console
    res.sendStatus(500);
  }
}

module.exports = {
  getOne,
  postOne,
};