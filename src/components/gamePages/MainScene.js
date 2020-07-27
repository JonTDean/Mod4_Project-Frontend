import Phaser from 'phaser';
import Player from "./Player.js";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        Player.preload(this)
        this.load.image('tiles', 'https://project-pure-beyond.s3.amazonaws.com/images/RPG+Nature+Tileset.png');
        this.load.tilemapTiledJSON('map', 'https://project-pure-beyond.s3.amazonaws.com/images/map.json')
    }

    create() {
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles', 32,32,0,0);
        const layer1 = map.createStaticLayer('Tile Layer 1', tileset,0,0);
        const layer2 = map.createStaticLayer('Tile Layer 2', tileset,0,0);
        //set collision
        // layer1.setCollisionByProperty({collides:true});
        // this.matter.world.convertTilemaplayer(layer1);


        this.player = new Player({scene:this, x:100, y:100,texture:'the-king', frame:"king_idle_1"});
        // TESTING TO SEE IF PLAYER CAN INTERACT WITH OBJECT
        // let testPlayer = this.player = new Player({scene:this, x:0, y:0,texture:'the-king', frame:"king_idle_1"});

        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
    }

    update(){
        this.player.update();
    }
    
}