import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
// Import new Scenes here
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';

const gameConfig = {
    width: 1000,
    height: 1000,
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      width: 1000,
      height: 1000
    },
    render: {
      antialias: false,
      pixelArt: true,
      roundPixels: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 400 },
        debug: true
      }
    },
    scene: [
      BootScene,
      // TitleScene,
      // GameScene,
    ]
  };

  export default function Game () {

    const [ game, setGame ] = useState(gameConfig) //, setGame
    const [ initialize ] = useState(true) //, setInitialize

    useEffect(() => {
        setGame(Object.assign({}, gameConfig))
    }, [initialize])
  
    return (
      <div className="App">
              <IonPhaser game={game} initialize={initialize} />
      </div>
    );
}