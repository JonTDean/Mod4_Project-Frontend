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
