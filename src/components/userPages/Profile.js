import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default class Profile extends React.Component{
    state = {
        username: this.props.currentUser.username,
        password: this.props.currentUser.password
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        fetch(`https://pure-beyond-56209.herokuapp.com/profile`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
        })
         .then(resp => resp.json())
         .then(updatedUser => {
             this.props.updateUser(updatedUser)
         })
    }



    
    render() {
        const { username } = this.props.currentUser

        return (
            <motion.div className="
            container
            container-table 
            bg-secondary
            text-primary
            border-3
            border-super
            border-primary 
            mt-5 
            login-container"
            initial="out"
            animate="in" 
            exit="out"
            variants={this.props.pageVariant}
            >
                <div className="row col-md h-25 mt-5 ml-1">
                    <h1 className="text-primary">Edit Profile</h1>
                </div>
                <div className="row mt-2 ml-2">
                    <div className="col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formEditUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" autoComplete="off" onChange={this.handleChange} />
                                <Form.Text className="text-info">
                                    Edit your Username.
                                </Form.Text>
                            </Form.Group>
 
                            <Form.Group controlId="formEditassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={this.handleChange} />
                                <Form.Text className="text-info">
                                    Edit your Password.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </motion.div>

        )
    }
}