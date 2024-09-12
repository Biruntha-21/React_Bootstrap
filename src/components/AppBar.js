import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';


const AppBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="secondary">
      <Container>
        <Navbar.Brand href="#home"><h2 className='display-6'><span> Dessert Lover <i className="bi bi-cake"></i></span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="#home" className='fw-bold fs-5'>Home</Nav.Link>
            <Nav.Link href="#menu" className='fw-bold fs-5'>Menu</Nav.Link>
            <Nav.Link href="#musttry" className='fw-bold fs-5'>Must Try</Nav.Link>
            <Nav.Link href="#contact" className='fw-bold fs-5'>Contact us</Nav.Link>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppBar