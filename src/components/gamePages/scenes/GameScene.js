import Phaser from 'phaser';
import { gameConfig } from '../Main';

// Handles Game Scene
export default class GameScene extends Phaser.Scene {

  init () {
    this.scene.key = "GameScene";
    this.cameras.main.setBackgroundColor('#24252A');
  }

  create () {
    this.createMap();
  }

  createMap(){
    // Create the tile map
    this.map = this.make.tilemap({ key: 'map' });

    // Add the tileset Image to our map
    this.tiles = this.map.addTilesetImage('GC_CC_Main', 'background', 8, 8, 0, 0);

    // Create our background
    this.groundLayer = this.map.createStaticLayer('ground', this.tiles, 0, 0)
    this.groundLayer.displayHeight = gameConfig.height;
    this.groundLayer.displayWidth = gameConfig.width;

    this.blockedWallLayer = this.map.createStaticLayer("blocked-wall", this.tiles, 0, 0)
    this.blockedWallLayer.displayHeight = gameConfig.height;
    this.blockedWallLayer.displayWidth = gameConfig.width;
    
    this.blockedTotemLayer = this.map.createStaticLayer("blocked-totem", this.tiles, 0, 0)
    this.blockedTotemLayer.displayHeight = gameConfig.height;
    this.blockedTotemLayer.displayWidth = gameConfig.width;
  }  
}