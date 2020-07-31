import React, { Component } from 'react';

export default class About extends Component {

    render(){
        return(
            <div className="
                col-3
                container
                container-table 
                bg-secondary
                text-primary
                border-3
                border-super
                border-primary 
                mt-5 "
            >
                <p className="mt-2"> What Technologies did we use? </p>
                <ol>
                    <li>React</li>
                    <li>Bootstrap / React-Bootstrap</li>
                    <li>Phaser</li>
                    <li>Ion-Phaser</li>
                    <li>UUID</li>
                    <li>Motive</li>
                </ol>
            </div>
        )
    }
}
