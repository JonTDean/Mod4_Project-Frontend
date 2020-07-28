import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
// import { } from 'react-bootstrap';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';

export default class Main extends Component {

  state = {
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: [
        BootScene,
        // TitleScene
        GameScene
      ],
      physics: {
        default: 'arcade',
        arcade: { 
          debug: true,
          gravity: {y:0},
        }
      }
    }
  }

  render() {
    const { initialize, game } = this.state
    return (
        <IonPhaser game={game} initialize={initialize} />    
    )
  }
}