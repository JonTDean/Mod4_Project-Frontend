import React from 'react';
import { withRouter } from 'react-router-dom';
import {  } from 'react-bootstrap';

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
            <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" name="username" autoComplete="off" value={username} onChange={this.handleChange} />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} autoComplete="current-password" />
            <input type="submit" value="Login" />
          </form>
        )
    }
}

export default withRouter(Login)