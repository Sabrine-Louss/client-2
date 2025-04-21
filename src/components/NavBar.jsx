import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';


const NavBar = () => {

    const {isAuth}= useSelector((state)=> state.user)
    const dispatch= useDispatch()
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            { isAuth ? (
                <>
                  <Nav.Link > <Link to="/"> Home </Link></Nav.Link>
                  <button onClick={()=> dispatch(logout())}>Logout</button>
                  </>
              

            ) : 
            <><Nav.Link > <Link to="/login">Login</Link>   </Nav.Link>
            <Nav.Link ><Link to="/register"> Register</Link></Nav.Link></>
            
            
            }
            



           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default NavBar
