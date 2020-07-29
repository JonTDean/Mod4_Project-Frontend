import React from 'react';
import Sprite from '../sprite/index';

export default function Actor({ sprite, data, step = 0, dir = 0 }){
    const { h, w } = data

    return(
        <Sprite 
         image={} 
         data={{
            x: step * w,
            y: dir * h,
            w,
            h,
         }}
         />
    )

}