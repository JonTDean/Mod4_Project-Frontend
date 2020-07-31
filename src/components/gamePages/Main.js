import React, { useState } from 'react'; // , useEffect, Component
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import BootScene from './scenes/BootScene';

export const gameConfig = {
  width: 480,
  height: 480,
  type: Phaser.AUTO,
  scale: {
    scaleMode: Phaser.Scale.RESIZE,
    mode: Phaser.Scale.FIT,
    width: 480,
    height: 480
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
  scene:BootScene,
};

export default function Main () {
  const [ game ] = useState(gameConfig); //, setGame
  const [ initialize ] = useState(true); //, setInitialize

  return (
    <div className="App">
            <IonPhaser game={game} initialize={initialize} />
    </div>
  );
}
