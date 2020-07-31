import React from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import '../CSS/App.css';
import SignUp from './userPages/SignUp';
import Login from './userPages/Login';
import NavBar from './pageDefault/NavBar/NavBar';
import Profile from './userPages/Profile';
import Welcome from './Welcome';
import Main from './gamePages/Main'

class App extends React.Component {

  state = {
    currentUser: null
  }

  pageVariant =  {
    in: { 
      opacity: 1
     },
    out: {
      opacity: 0
    }
  };

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

    // console.log("Current User:", this.state)
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
        
        <main>
          <AnimatePresence exitBeforeEnter>
            {/* FIX FOR UNRECOGNIZED TAG https://stackoverflow.com/questions/48751919/how-can-i-suppress-the-the-tag-some-tag-is-unrecognized-in-this-browser-warn/55537927#55537927 */}
            <Switch>
                {/* For Sign Up */}
                <Route path="/signup">
                  <SignUp handleLogin={this.handleLogin} pageVariant={this.pageVariant} />
                </Route>

                {/* For Login */}
                <Route path="/login">
                  <Login handleLogin={this.handleLogin} pageVariant={this.pageVariant} />
                </Route>

                {/* For Profile */}
                <Route path="/profile">
                  {this.state.currentUser ? <Profile currentUser={this.state.currentUser} updateUser={this.updateUser} /> : <Redirect to='/' />}
                </Route>
                
                {/* For Home */}
                <Route path="/home">
                  {this.state.currentUser ? <Welcome currentUser={this.state.currentUser} /> : <Redirect to='/' />}
                </Route>

                {/* For Game Pages */}
                <Route path="/game" >

                  {/* <div className="gameContainer"> */}
                  
                    {/* <Main currentUser={this.state.currentUser} /> */}
                  {this.state.currentUser ? <Main currentUser={this.state.currentUser} /> : <Redirect to='/login' />}
                
                  {/* </div>    */}
                </Route>

                {/* For Index Page */}
                <Route exact path="/">
                  <h1> Welcome to, Project Beyond</h1>
                </Route>
            </Switch>
          </AnimatePresence>
          
        </main>
      </div>
    )
  }

}

export default withRouter(App);