import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, handleLogout }) => {
  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link to="/home">Project: Pure Beyond</Link></Navbar.Brand>

        {currentUser ? (
          <div> 


            <Nav className="mr-auto">
              <Nav className="ml-3"><Link to="/profile">Profile</Link></Nav>
              <Nav className="ml-3"><Link to="/game">Game</Link></Nav>
            <Button onClick={handleLogout}>Logout</Button>
          </Nav>
          </div>


        ) : (
          <Nav className="mr-auto">
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