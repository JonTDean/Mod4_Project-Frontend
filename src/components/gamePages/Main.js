import React, { useState } from 'react'; // , useEffect, Component
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import BootScene from './scenes/BootScene';

const gameConfig = {
  width: 480,
  height: 480,
  type: Phaser.AUTO,
  scale: {
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

// ===================================================================================================
// WORKING EXAMPLE
// ===================================================================================================


// import React, { Component } from 'react';
// import * as Phaser from 'phaser';
// import { IonPhaser } from '@ion-phaser/react';

// const SCENES = {
//   FIRST: 'FirstScene',
//   SECOND: 'SecondScene'
// }

// class CommonScene extends Phaser.Scene {

//   init () {
//     this.cameras.main.setBackgroundColor('#24252A');
//   }

//   create () {
//     this.helloWorld = this.add.text(
//       this.cameras.main.centerX, 
//       this.cameras.main.centerY, 
//       "Hello World", { 
//         font: "40px Arial", 
//         fill: "#ffffff" 
//       }
//     );
//     this.helloWorld.setOrigin(0.5);

//     this.input.keyboard.on('keyup_C', function() {
//       this.scene.start(
//         this.scene.key === SCENES.FIRST ?
//           SCENES.SECOND : SCENES.FIRST
//       );
//     }, this);
//   }

//   setAngle (angle) {
//     this.helloWorld.angle = angle;
//   }
// }

// class FirstScene extends CommonScene {
  
//   init(){
//     console.log("IN FIRST SCENE");
//   }

//   update () {
//     this.helloWorld.angle += 1;
//   }
// }

// class SecondScene extends CommonScene {
  
//   init(){
//     console.log("IN SECOND SCENE");
//   }

//   update () {
//     this.helloWorld.angle -= 1;
//   }
// }

// class BootScene extends Phaser.Scene {
//   create() {
//     console.log("IN BOOT");
//     this.scene.add(SCENES.FIRST, FirstScene, true);
//     this.scene.add(SCENES.SECOND, SecondScene, false);

//     this.scene.run(SCENES.FIRST);
//   }
// }

// export default class Main extends Component {
//   state = {
//     initialize: true,
//     game: {
//       width: 800,
//       height: 800,
//       type: Phaser.AUTO,
//       scene: [ 
//         SecondScene,
//         FirstScene,
//         BootScene,
//       ],
//       instance: null
//     }
//   }

//   getInstance () {
//     return this.game.instance;
//   }

//   initializeGame () {
//     this.initialize = true;
//   }

//   changeAngle () {
//     const instance = this.getInstance();
//     instance.scene.scenes.forEach(scene => {
//       if (scene.sys.isActive() && scene ) {
//         scene.setAngle(0);
//       }
//     });
//   }

//   render(){
//     const { game, initialize } = this.state
//     return(
//       <div className="App">
//         <IonPhaser game={game} initialize={initialize} />
//       </div>
//     )
//   }
// }

//   export default function Game() {

//     const [ game, setGame ] = useState(gameConfig) //, setGame
//     const [ initialize ] = useState(true) //, setInitialize

//     useEffect(() => {
//         setGame(Object.assign({}, gameConfig))
//     }, [initialize])
  
//     return (
//       <div className="App">
//               <IonPhaser game={game} initialize={initialize} />
//       </div>
//     );
// }