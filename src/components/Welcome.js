import React, { Component } from 'react';
import What from './welcomePages/What';
import Who from './welcomePages/Who';
import About from './welcomePages/About';
import { motion } from 'framer-motion';

export default class Welcome extends Component {
    pageVariant = {
        in: { 
            opacity: 1
           },
          out: {
            opacity: 0
          }
    }

    render(){
        // console.log(this.state.currentUserusername);
        // console.log(this.pageVariant)
        
        return(
            <motion.div initial="out" animate="in" exit="out" variants={this.pageVariant}>
                <div className="container">
                    {this.props.currentUser ? <h1> Welcome to OverWorld, {this.props.currentUser.username}!</h1> : <h1> Welcome to OverWorld!</h1>}  
                    <div className="row justify-content-around">                      
                        <What />
                        <Who />
                        <About />
                    </div>
                </div>
            </motion.div>

        )
    }

}