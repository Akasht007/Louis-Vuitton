import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
     
      <Navbar expand="lg" className="bg-body-tertiary fixed-top p-4">
    <Container>
        
        


      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Menu</Nav.Link>
          <Nav.Link href="#link">Search</Nav.Link>
          <Nav.Link href="#home">Call us</Nav.Link>
      <Nav.Link href="#link">Wishlist</Nav.Link>    
      <Nav.Link href="#link">MyLV</Nav.Link>
          <Nav>
      
      </Nav>
       
        </Nav>


          
      </Navbar.Collapse>
      
      <Navbar.Brand className=' d-flex align-items-center justify-content-center' style={{marginRight:'35%'}}  href="#home"><img src="https://www.louisvuitton.com/images/is/image/lv/brand-logo-louis-vuitton-logo" alt="" width={'300px'} /></Navbar.Brand>

      

      
    </Container>
  </Navbar>
     
    </div>
  )
}

export default Header