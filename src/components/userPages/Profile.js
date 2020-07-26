import React from 'react';

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
        
        fetch(`http://localhost:3000/profile`, {
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
        const { username, password } = this.props.currentUser

        return (
            <form onSubmit={this.handleSubmit}>
            <h1>{username}'s Profile</h1>

            <label>Username</label>
            <input
                type="text"
                name="username"
                autoComplete="off"
                onChange={this.handleChange}
            />
            
            <label>Password</label>
            <input
                type="password"
                name="password"
                onChange={this.handleChange}
            />

            <input type="submit" value="Update" />
            </form>
        )
    }
}