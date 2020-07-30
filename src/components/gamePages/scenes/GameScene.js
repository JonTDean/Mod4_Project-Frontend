import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  
    init () {
      this.cameras.main.setBackgroundColor('#24252A')
    }

    create () {
      this.createMap();
    }

    update () {

    }

    createMap(){
      // this.map = new Map(this, 'map', 'background', 'background', 'blocked');
      // Create the tile map
        this.map = this.make.tilemap({ key: 'map' });
        // Add the tileset Image to our map
        this.tiles = this.map.addTilesetImage('GC_CC_Main.tsx', 'background', 0, 0);
        // Create our background
        this.groundLayer = this.map.createStaticLayer('ground', this.tiles, 0, 0)
        this.blockedWallLayer = this.map.createStaticLayer("blocked-wall", this.tiles, 0, 0)
        this.blockedTotemLayer = this.map.createStaticLayer("blocked-totem", this.tiles, 0, 0)
    }
  


 
}