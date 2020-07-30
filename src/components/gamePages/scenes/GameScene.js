import Phaser from 'phaser';


// Handles Game Scene
export default class GameScene extends Phaser.Scene {

  init () {
    this.scene.key = "GameScene";
    this.cameras.main.setBackgroundColor('#24252A');
  }

  create () {
    // this.bg_1 = this.add.image(240, 240, 'a');
    this.createMap();
    // console.log(this.bg_1);
  }

  // update () {

  // }

  createMap(){
    // this.gameName = this.add.text(
    //   this.cameras.main.centerX, 
    //   this.cameras.main.centerY, 
    //     "IN_GAME_SCENE", { 
    //         font: "40px Arial", 
    //         fill: "#ffffff" 
    //     },
      
    // );
    // this.gameName.setOrigin(0.5)
    // this.bg_1 = this.add.image(0, 0, 480, 480, "a");
    // // console.log(this.bg_1);
    // this.bg_1.setOrigin(0, 0); //set its pivot to top left corner

    // this.map = new Map(this, 'map', 'background', 'background', 'blocked');
    // Create the tile map
    this.map = this.make.tilemap({ key: 'map' });
    // Add the tileset Image to our map
    this.tiles = this.map.addTilesetImage('background', 'background', 0, 0);
    // Create our background
    this.groundLayer = this.map.createStaticLayer('ground', this.tiles, 0, 0)
    this.blockedWallLayer = this.map.createStaticLayer("blocked-wall", this.tiles, 0, 0)
    this.blockedTotemLayer = this.map.createStaticLayer("blocked-totem", this.tiles, 0, 0)
  }  
}

// export default class GameScene extends Phaser.Scene {

//   init () {
//     console.log("IN GAME");
//     this.cameras.main.setBackgroundColor('#24252A');
//   }

//   create () {
//     this.createMap();
//   }

//   update () {

//   }

//   createMap(){
//       // console.log(this.scene)
//       // this.bg_1 = this.add.image(0, 0, 480, 480, "bg");
//       // console.log(this.bg_1)
//       // this.bg_1.setOrigin(0, 0); //set its pivot to top left corner
//       // this.bg_1.setScrollFactor(0); // Doesn't move with camera only on Update()

//     // this.map = new Map(this, 'map', 'background', 'background', 'blocked');
//     // Create the tile map
//     // this.map = this.make.tilemap({ key: 'map' });
//     // Add the tileset Image to our map
//     // this.tiles = this.map.addTilesetImage('GC_CC_Main.tsx', 'background', 0, 0);
//     // Create our background
//     // this.groundLayer = this.map.createStaticLayer('ground', this.tiles, 0, 0)
//     // this.blockedWallLayer = this.map.createStaticLayer("blocked-wall", this.tiles, 0, 0)
//     // this.blockedTotemLayer = this.map.createStaticLayer("blocked-totem", this.tiles, 0, 0)
//   } 
  


 
// }