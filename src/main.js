//Noctis Wang
//Rocket Patrol Mods
//1h30m
//Track a high score that persists across scenes and display it in the UI (5)
//user3289402, et al. “Create a High Score in Phaser.” Stack Overflow, 1 Feb. 1963, https://stackoverflow.com/questions/37408825/create-a-high-score-in-phaser. 

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;