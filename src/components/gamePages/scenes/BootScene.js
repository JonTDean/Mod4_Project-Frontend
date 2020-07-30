import Phaser from 'phaser';
import SCENES from '../classes/Scenes';
import TitleScene from './TitleScene'
import { GRAPHIC, GRAPHIC_JSONS } from '../classes/Graphics';

// Handles Boot Scene
export default class BootScene extends Phaser.Scene {
  init(){
    this.scene.key = "BootScene";
  }

  preload() {
    this.load.image('a', GRAPHIC.trees);
    this.load.image('background', GRAPHIC.gc_cc);
    this.load.tilemapTiledJSON('map', GRAPHIC_JSONS.ccJson);
  }

  create() {
    this.scene.add(SCENES.TITLE, TitleScene, true);
    this.scene.start(SCENES.TITLE);
  }
}

// export default class BootScene extends Phaser.Scene {
//     init(){
//         console.log("IN BOOTSCENE");
//     }

//     preload() {
//       this.loadImages();
//       this.loadTileMap();
//     }

//     create() {
//         this.scene.start("GameScene");
//     }
  
//     loadImages() {
//         // this.load.image('button1', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/ui/blue_button01.png');
//         // this.load.image('button2', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/ui/blue_button02.png');
//       // load the map tileset image
//     //   this.load.image('background', 'https://project-pure-beyond.s3.amazonaws.com/TEST/level/background.png');
//         // this.load.image('background', 'https://project-pure-beyond.s3.amazonaws.com/Main/Map/GC_CC_Main.png');
//         // this.load.image('background', '../../../assets/level/GC_CC_Main.png');
//         this.load.image('bg', '../../../assets/level/character-creation-2.png');
//     }
  
//     loadSpriteSheets() {
//     //   this.load.spritesheet('items', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/items.png', { frameWidth: 32, frameHeight: 32 });
//     //   this.load.spritesheet('characters', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/characters.png', { frameWidth: 32, frameHeight: 32 });
//     //   this.load.spritesheet('monsters', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/monsters.png', { frameWidth: 32, frameHeight: 32 });
//     }
  
//     loadAudio() {
//     //   this.load.audio('goldSound', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/Pickup.wav']);
//     //   this.load.audio('enemyDeath', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/EnemyDeath.wav']);
//     //   this.load.audio('playerAttack', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/PlayerAttack.wav']);
//     //   this.load.audio('playerDamage', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/PlayerDamage.wav']);
//     //   this.load.audio('playerDeath', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/PlayerDeath.wav']);
//     }
  
//     loadTileMap() {
//     // map made with Tiled in JSON format
//         // this.load.tilemapTiledJSON('map', 'https://project-pure-beyond.s3.amazonaws.com/Main/Map/character-creation-2.json');
//         // this.load.tilemapTiledJSON('map', '../../../assets/level/character-creation-2.json');
//     }
//   }
  