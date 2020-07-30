import Phaser from 'phaser';
import SCENES from '../classes/Scenes';
import GameScene from './GameScene';

// Handles Title Scene
export default class TitleScene extends Phaser.Scene {

    init () {
      // console.log("IN TITLE SCENE");
      this.scene.key = "TitleScene";
      this.cameras.main.setBackgroundColor('#24352A');
    }
    
    create () {
      this.gameName = this.add.text(
        this.cameras.main.centerX, 
        this.cameras.main.centerY, 
        "TEST_NAME_REPLACE", { 
            font: "40px Arial", 
            fill: "#ffffff" 
        },
      );
  
      this.pressPlay = this.add.text(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "Press Start to Play",{
            font: "20px Arial",
            fill: "#000000"
        },
      );
  
      this.gameName.setOrigin(0.5);
      this.pressPlay.setOrigin(0.5);
      this.pressPlay.x = 500
      this.pressPlay.y = 600
  
      this.input.keyboard.on('keyup', function() {
        this.scene.add(SCENES.GAME, GameScene, true);
        this.scene.start(GameScene);
      }, this);
    }
    
    setAngle (angle) {
        this.gameName.angle = angle;
    }
}

// export default class TitleScene extends Phaser.Scene {

//     init () {
//         console.log("IN TITLE SCENE");
//         this.cameras.main.setBackgroundColor('#24352A');
//       }
    
//     create () {
//         this.helloWorld = this.add.text(
//             this.cameras.main.centerX, 
//             this.cameras.main.centerY, 
//             "TEST_NAME_REPLACE", { 
//                 font: "40px Arial", 
//                 fill: "#ffffff" 
//             },
//         );

//         this.pressPlay = this.add.text(
//             this.cameras.main.centerX,
//             this.cameras.main.centerY,
//             "Press Start to Play",{
//                 font: "20px Arial",
//                 fill: "#000000"
//             },
//         );

//         this.helloWorld.setOrigin(0.5);
//         this.pressPlay.setOrigin(0.5);
//         this.pressPlay.x = 500
//         this.pressPlay.y = 600

//         this.input.keyboard.on('keyup', function() {
//             this.scene.start(
//                 "BootScene"
//                 // this.map = this.make.tilemap({ key: 'map' }),
//                 // console.dir(this.map),
//                 // Add the tileset Image to our map
//                 // this.tiles = this.map.addTilesetImage('GC_CC_Main.tsx', 'background', 0, 0),
//                 // console.dir(`TILES: ${this.tiles}`),
//                 // Create our background
//                 // this.groundLayer = this.map.createStaticLayer('ground', this.tiles, 0, 0),
//                 // console.dir(`GROUND:${this.groundLayer}`),
//                 // this.blockedWallLayer = this.map.createStaticLayer("blocked-wall", this.tiles, 0, 0),
//                 // console.dir(`WALL: ${this.blockedWallLayer}`),
//                 // this.blockedTotemLayer = this.map.createStaticLayer("blocked-totem", this.tiles, 0, 0),
//                 // console.dir(`TOTEM: ${this.blockedTotemLayer}`)
//                 // this.scene.start("GameScene")
//                 // console.dir(this.scene),
//                 // console.log(Object.keys(this.scene))
//                 // Main.SCENES.game
//                 // this.scene.key === SCENES.FIRST ?
//                 // SCENES.SECOND : SCENES.FIRST
//             );
//         }, this);
//     }
    
//     setAngle (angle) {
//         this.helloWorld.angle = angle;
//     }
// }
