import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import { } from 'react-bootstrap';
 
export default class GameContainer extends Component {

    state = {
        initialize: true,
        game: {
          width: "100%",
          height: "100%",
          type: Phaser.AUTO,
          scene: {

          }
        }
      }
    
      render() {
        const { initialize, game } = this.state
        return (
            <div className="gameContainer">
                <IonPhaser game={game} initialize={initialize} />
            </div> 
        )
      }
}
