function mazeSolver (maze, userInput) {
  let y = maze.findIndex(arr => arr.includes('F'));
  let x = maze[y].indexOf('F');
  let position;
  let doomFound = false;
  const directions = userInput.split(',').map(el=>el.toLowerCase());
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === 'n') y--;
    if (directions[i] === 's') y++;
    if (directions[i] === 'w') x--;
    if (directions[i] === 'e') x++;
    if (y < 0 || x < 0 || x > maze.length-1 || y > maze.length-1 ) return 'Oops, you fell out of the map. You died.';
    position = maze[y][x];
    if (position === 'O') return 'Oops, you found an orc. You died.';
    if (position === 'D' && i === directions.length-1) return 'Well done. You found Mount Doom and destroyed the ring.';
    if (position === 'D') doomFound = true;
  }
  if (doomFound) return 'You found Mount Doom somewhere on your route, but you kept on moving. How did you miss it? Oops, try to reduce the length of your route.';
  else return 'You are lost in Mordor. You never found Mount Doom.';
}

module.exports = {
  mazeSolver,
};