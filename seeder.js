const Maze = require('./models/maze');
const mongoose = require('mongoose');

const dbUrl = process.env.DBURL;
const dbName = process.env.DBNAME;

mongoose.connect(`${dbUrl}${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, });

const data = [
  {
    "layout":[
      ["-", "-", "-", "O", "-", "-", "-", "-", "-", "O"], 
      ["-", "O", "-", "-", "-", "O", "-", "D", "-", "-"], 
      ["-", "-", "-", "-", "O", "-", "-", "O", "-", "-"], 
      ["-", "O", "-", "O", "-", "-", "-", "-", "-", "-"], 
      ["-", "-", "-", "-", "-", "O", "-", "O", "-", "-"], 
      ["F", "-", "-", "O", "-", "-", "-", "-", "-", "O"], 
      ["-", "-", "O", "-", "-", "-", "-", "-", "-", "-"], 
      ["-", "-", "-", "-", "-", "-", "-", "O", "-", "-"], 
      ["-", "O", "-", "-", "O", "O", "-", "-", "-", "-"], 
      ["-", "-", "-", "-", "-", "-", "-", "-", "O", "-"]
    ],
    "index": 0
  },
  {
    "layout":[
      ["-", "-", "-", "O", "-", "-", "-", "-", "-", "O"], 
      ["-", "O", "-", "-", "-", "O", "-", "D", "-", "-"], 
      ["-", "-", "-", "-", "O", "-", "-", "O", "-", "-"], 
      ["-", "O", "-", "O", "-", "-", "-", "-", "-", "-"], 
      ["-", "-", "-", "-", "-", "O", "-", "O", "-", "-"], 
      ["F", "-", "-", "O", "-", "-", "-", "-", "-", "O"], 
      ["-", "-", "O", "-", "-", "-", "-", "-", "-", "-"], 
      ["-", "-", "-", "-", "-", "-", "-", "O", "-", "-"], 
      ["-", "O", "-", "-", "O", "O", "-", "-", "-", "-"], 
      ["-", "-", "-", "-", "-", "-", "-", "-", "O", "-"]
    ],
    "index": 1
  },
]

async function clearDB () {
  try {
    await Maze.deleteMany({}, function(){
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
    mongoose.disconnect('Disconnected from MongoDB database');
  } catch (e) {
    console.log('Error', e);
  }
}

async function clearAndSeed() {
  await clearDB();
  seedDB();
}

clearAndSeed();