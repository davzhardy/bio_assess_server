const Maze = require('../models/maze');
const mongoose = require('mongoose');
const data = require('./mazes.json')

const dbUrl = process.env.DBURL;
const dbName = process.env.DBNAME;

mongoose.connect(`${dbUrl}${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, });

async function clearDB () {
  try {
    await Maze.deleteMany({}, function () {
      console.log('database cleared');
    });
  } catch (e) {
    console.log('Error', e);
  }
}

async function seedDB () {
  try {
    await Promise.all(data.map(async el => {
      await Maze.create({
        index: el.index,
        maze: JSON.stringify(el.layout),
      });
    }));
    console.log('database seeded');
    mongoose.disconnect(console.log('Disconnected from MongoDB database'));
  } catch (e) {
    console.log('Error', e);
  }
}

async function clearAndSeed () {
  await clearDB();
  seedDB();
}

clearAndSeed();