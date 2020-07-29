import React from 'react';
import Actor from '../actor/index';
import useKeyPress from '../../hooks/use-key-press';

export default function player ({ skin }) {
    const data ={
        h: 32,
        w: 32
    };

    useKeyPress((e) => {
        const dir = e.key.replace("Arrow", "").toLowerCase()
        console.dir(dir)
    })

    return(
        <Actor 
            sprite={`../../../assets/sprites/${skin}.png`}
            data={data}
        />
    );
}

