import React from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import '../CSS/App.css';
import SignUp from './userPages/SignUp';
import Login from './userPages/Login';
import NavBar from './pageDefault/NavBar';
import Profile from './userPages/Profile';
import Welcome from './Welcome';

class App extends React.Component {

  state = {
    currentUser: null
  }

  // Persists the user Login
  componentDidMount(){
    fetch(`https://pure-beyond-56209.herokuapp.com/autologin`,{
      credentials: "include"
    })
    .then(resp => {
      if (resp.ok){
        return resp.json()
      } else{
        throw Error("not Logged In!")
      }
    })
    .then(user => {
      this.handleLogin(user)
    })
    .catch((err) => console.error(err))
  }

  // Sets the currentUser to whoever Logged In/ Signed Up
  handleLogin = currentUser => {

      // Fix this so a pop-up comes up saying invalid login
      if(currentUser.message){
        this.props.history.push('/login')
      }else{
        this.setState({ currentUser }, () => {
          this.props.history.push('/home')
        })
      }
  }

  // Logout for the Current User
  handleLogout = () => {
    fetch(`https://pure-beyond-56209.herokuapp.com/logout`, {
      credentials: "include"
    })
    .then(resp => resp.json())
    .then(user => {
      this.setState({ currentUser: null }, () => {
        this.props.history.push('/')
      })
    })
  }

  // Does user profile stuff
  updateUser = newUser => {
    this.setState({ currentUser: newUser })
  }

  render(){

    console.log("Current User:", this.state)
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
        <main>
          <switch>
            {/* For Sign Up */}
            <Route path="/signup">
              <SignUp handleLogin={this.handleLogin} />
            </Route>

            {/* For Login */}
            <Route path="/login">
              <Login handleLogin={this.handleLogin} />
            </Route>

            {/* For Profile */}
            <Route path="/profile">
              {this.state.currentUser ? <Profile currentUser={this.state.currentUser} updateUser={this.updateUser} /> : <Redirect to='/' />}
            </Route>
            
            {/* For Home */}
            <Route path="/home">
              {this.state.currentUser ? <h1> Welcome, {this.state.currentUser.username}</h1> : <Redirect to='/' />}
            </Route>

            {/* For Game Pages */}
            <Route path="/game">
              {this.state.currentUser ? <p> Game Stuff goes here</p> : <Redirect to="/login" /> }
              {/* {this.state.currentUser ? <Game currentUser={this.state.currentUser} /> : <Redirect to='/login' />} */}
            </Route>

            {/* For Index Page */}
            <Route exact path="/">
              <Welcome currentUser={this.state.currentUser} />
            </Route>
          </switch>
        </main>
      </div>
    )
  }

}

export default withRouter(App);