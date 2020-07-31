import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

class Login extends React.Component{
    state={
        username: "",
        password: ""
    }

    handleChange= e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch(`https://pure-beyond-56209.herokuapp.com/login`,{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
        })

        .then(resp => resp.json())
        .then(user => {
            this.props.handleLogin(user)
        })
    }

    render(){
        const { username, password } = this.state
        
        return(
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
                    <h1>Please Login</h1>
                </div>
                <div className="row mt-2 ml-2">
                    <div className="col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            {/* USERNAME FORM */}
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" name="username" autoComplete="off" value={username} onChange={this.handleChange}/>
                                <Form.Text className="text-info">
                                    Please Enter a Username.
                                </Form.Text>
                            </Form.Group>

                            {/* PASSWORD FORM */}
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} />
                                <Form.Text className="text-info">
                                    Please Enter a Password.
                                </Form.Text>
                            </Form.Group>

                            {/* SUBMIT BUTTON */}
                            <motion.div className="login-button-div" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button className="login-button" variant="primary" type="submit" >
                                    Login
                                </Button>
                            </motion.div>
                        </Form>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default withRouter(Login)