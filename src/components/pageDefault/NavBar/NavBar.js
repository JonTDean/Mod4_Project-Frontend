import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, handleLogout }) => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
          <Navbar.Brand><Link to="/home">Overworld</Link></Navbar.Brand>

          {currentUser ? (
            <Nav className="ml-auto">
              <div className="container border border-primary rounded-top">
                <Link className="nav-link text-primary" to="/game">
                  <Nav className="ml-3">Play Game</Nav>
                </Link>
              </div>
              <div className="container border border-primary rounded-top ml-1">
                <Link className="nav-link text-primary text-center" to="/profile">
                  <Nav className="ml-3">Edit Profile</Nav>
                </Link>
              </div>
              <div className="container border border-primary rounded-top ml-1">
                <Link className="nav-link text-primary text-center" onClick={handleLogout} to='/'>
                  <Nav className="ml-3">Logout</Nav>
                </Link>
              </div>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Nav className="ml-3"><Link to="/signup">Signup</Link></Nav>
              <Nav className="ml-3"><Link to="/login">Login</Link></Nav>
            </Nav>
          )}
        </Navbar>
     
    </div>


    // ==========================================================
    // NON BOOTSTRAP NAVBAR
    // ==========================================================
    // <nav>
    //   <h1>Pure Beyond</h1>
      
    //   <div >
    //     <div>
    //       <Link to="/home">Home</Link>

    //       {currentUser ? (
    //         <>
    //           <Link to="/profile">Profile</Link>
    //           <Link to="/game">Game</Link>
    //           <button onClick={handleLogout}>Logout</button>
    //         </>
    //       ) : (
    //           <>
    //             <Link to="/signup">Signup</Link>
    //             <Link to="/login">Login</Link>
    //           </>
    //         )}
    //     </div>
    //   </div>
    // </nav>
  )
}

export default NavBar