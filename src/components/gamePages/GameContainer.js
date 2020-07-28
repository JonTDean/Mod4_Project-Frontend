import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
// import { } from 'react-bootstrap';
import MainScene from './MainScene.js'

export default class GameContainer extends Component {

    state = {
        initialize: true,
        game: {
          width: "100%",
          height: "100%",
          type: Phaser.AUTO,
          scene: [MainScene],
          // scale: {
          //   zoom: 2,
          // },
          physics: {
            default: 'arcade',
            arcade: { 
              debug: true,
              gravity: {y:0},
            }
          },
          // plugins: {
            // scene:[

              // {
                // plugin: PhaserMatterCollisionPlugin,
                // key: 'matterCollision',
                // mapping: 'matterCollision'
              // }
            // ]
          // }
        }
      }

      render() {
        const { initialize, game } = this.state
        
        return (
            <IonPhaser game={game} initialize={initialize} />
        )
      }
}
