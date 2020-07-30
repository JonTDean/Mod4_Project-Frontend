import React from 'react';


const Welcome = ({ currentUser }) => {
    
    let isCurrentUserActive = () => {
        if(currentUser){
            return(
                <p>Off</p>
            )
        }else{
            return(
                <p>On</p>
            )
        }
    }

    console.log(currentUser == null)
    return(
        isCurrentUserActive()
    )
}

export default Welcome;