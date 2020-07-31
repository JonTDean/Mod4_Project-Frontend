import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Image {
    state = {
        scene : null,
        x: 0,
        y: 0,
        key: 0,
        frame: 0,
    }
    
    constructor(scene, x, y, key, frame) {
      super(scene, x, y, key, frame);
      this.scene = scene; // the scene this container will be added to
  
      // enable physics
      this.scene.physics.world.enable(this);
      // set immovable if another object collides with our player
      this.setImmovable(true);
      // scale our player
      this.setScale(2);
      // add the player to our existing scene
      this.scene.add.existing(this);
    }
  }
  