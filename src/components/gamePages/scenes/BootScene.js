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
    this.loadMap()
    // this.load.spritesheet('characters', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/characters.png', { frameWidth: 32, frameHeight: 32 });
  }

  loadMap(){
    this.load.image('background', GRAPHIC.gc_cc);
    this.load.tilemapTiledJSON('map', GRAPHIC_JSONS.ccJson);
  }



  create() {
    this.scene.add(SCENES.TITLE, TitleScene, true);
    this.scene.start(SCENES.TITLE);
  }
}
