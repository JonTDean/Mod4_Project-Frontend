import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {

    preload() {
      // load images
      this.loadImages();
      // load spritesheets
    //   this.loadSpriteSheets();
      // load audio
    //   this.loadAudio();
      // load tilemap
      this.loadTileMap();
    }
  
    loadImages() {
        // this.load.image('button1', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/ui/blue_button01.png');
        // this.load.image('button2', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/ui/blue_button02.png');
      // load the map tileset image
    //   this.load.image('background', 'https://project-pure-beyond.s3.amazonaws.com/TEST/level/background.png');
        // this.load.image('background', 'https://project-pure-beyond.s3.amazonaws.com/Main/Map/GC_CC_Main.png');
        this.load.image('background', '../../../assets/level/GC_CC_Main.png');
    }
  
    loadSpriteSheets() {
    //   this.load.spritesheet('items', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/items.png', { frameWidth: 32, frameHeight: 32 });
    //   this.load.spritesheet('characters', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/characters.png', { frameWidth: 32, frameHeight: 32 });
    //   this.load.spritesheet('monsters', 'https://project-pure-beyond.s3.amazonaws.com/TEST/images/monsters.png', { frameWidth: 32, frameHeight: 32 });
    }
  
    loadAudio() {
    //   this.load.audio('goldSound', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/Pickup.wav']);
    //   this.load.audio('enemyDeath', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/EnemyDeath.wav']);
    //   this.load.audio('playerAttack', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/PlayerAttack.wav']);
    //   this.load.audio('playerDamage', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/PlayerDamage.wav']);
    //   this.load.audio('playerDeath', ['https://project-pure-beyond.s3.amazonaws.com/TEST/audio/PlayerDeath.wav']);
    }
  
    loadTileMap() {
    // map made with Tiled in JSON format
    //   this.load.tilemapTiledJSON('map', 'https://project-pure-beyond.s3.amazonaws.com/TEST/level/large_level.json');
        // this.load.tilemapTiledJSON('map', 'https://project-pure-beyond.s3.amazonaws.com/Main/Map/character-creation-2.json');
        this.load.tilemapTiledJSON('map', '../../../assets/level/character-creation-2.json');
    }
  
    create() {
      this.scene.start('TitleScene');
    }
  }
  