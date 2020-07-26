import React from 'react';
import axios from 'axios';

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
        
        axios.post(`https://pure-beyond-56209.herokuapp.com/signup`,{
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
            <form onSubmit={this.handleSubmit}>
                <h1>SignUp</h1>
                <label>Username</label>
                <input type="text" name="username" autoComplete="off" value={username} onChange={this.handleChange}/>
                <label>Password</label>
                <input type="password" name="password" value={password}  onChange={this.handleChange}/>
                <input type="submit" value="SignUp" />
            </form>
        )
    }
}