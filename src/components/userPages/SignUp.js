import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class SignUp extends React.Component{
    state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch(`https://pure-beyond-56209.herokuapp.com/signup`,{
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


        return (
            <div className="
            container
            container-table 
            bg-secondary
            text-primary
            border 
            rounded 
            border-primary 
            mt-5 
            sign-up-container">
                <div className="row col-md h-25 mt-5 ml-1">
                    <h1>Please Sign Up</h1>
                </div>
                <div className="row mt-2 ml-2">
                    <div className="col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            {/* EMAIL FORM */}
                            {/* <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    Please Enter an E-Mail Address.
                                </Form.Text>
                            </Form.Group> */}
                            
                            {/* UESRNAME FORM */}
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username"  name="username" autoComplete="off" value={username} onChange={this.handleChange}/>
                                <Form.Text className="text-info">
                                    Please Enter a Username.
                                </Form.Text>
                            </Form.Group>

                            {/* PASSWORD FORM */}
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password"  name="password" value={password} onChange={this.handleChange} />
                                <Form.Text className="text-info">
                                    Please Enter a Password.
                                </Form.Text>
                            </Form.Group>

                            {/* SUBMIT BUTTON */}
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>

                    </div>
                </div>
            </div>

 
            //=============================================
            // NON BOOTSTRAP
            //=============================================
            // <form onSubmit={this.handleSubmit}>
            //     <h1>SignUp</h1>
            //     <label>Username</label>
            //     <input type="text" name="username" autoComplete="off" value={username} onChange={this.handleChange}/>
            //     <label>Password</label>
            //     <input type="password" name="password" value={password}  onChange={this.handleChange}/>
            //     <input type="submit" value="SignUp" />
            // </form>
        )
    }
}