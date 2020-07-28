import Phaser from 'phaser';
import Player from "../Player.js";

export default class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootScene'
        });
    }

    // Handles progress bar
    progressBar(){
        const progress = this.add.graphics();

        // Register a load progress event to show a load bar
        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60);
        });
    
        // Register a load complete event to launch the title screen when all files are loaded
        this.load.on('complete', () => {
            // prepare all animations, defined in a separate file
            // makeAnimations(this);
            progress.destroy();
            this.scene.start('TitleScene'); 
        });
    }

    // Handles Game Scene
    loadGameScene(){
        // To load a tilemap
        // =============================================================
        // const IMAGE-VARIABLE = this.load.image('IMAGE_NAME', 'FILEPATH');
        // const TILE-MAP-JSON = this.load.tilemapTiledJSON('TILEMAPJSON_NAME', 'FILEPATH');
        
        // To load Animated Sprites
        // =============================================================
        // const ANIMATED-SPRITE-ATLAS-VARIABLE = this.load.atlas('ANIMATED-SPRITE-ATLAS-NAME', 'ANIMATED-SPRITE-TILE-PATH', 'ANIMATED-SPRITE-TILE-JSON-PATH');
        // const ANIMATED-SPRITE-ANIMATION-VARIABLE = this.load.animation('ANIMATED-SPRITE-ANIMATION-NAME', 'ANIMATED-SPRITE-ANIMATION-PATH');
    }

    // Handles Player Assets
    loadPlayer(){
        // To load a Player Atlas/Animations [Contains Sprite Sheet and full Animation paths]
        // =============================================================
        // PLAYER-ATLAS-VARIABLE = this.load.atlas('PLAYER-ATLAS-NAME', 'PLAYER-TILE-PATH', 'PLAYER-TILE-JSON-PATH');
        // PLAYER-ANIMATION-VARIABLE = this.load.animation('PLAYER-ANIMATION-NAME', 'PLAYER-ANIMATION-PATH');
    }

    preload(){
        // this.progressBar()
        this.loadGameScene()
    }

    create(){
        this.scene.start("PlayGame");
    }
}