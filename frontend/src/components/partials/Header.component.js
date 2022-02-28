import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <LinkContainer to='/'>
                <Navbar.Brand href="#">Info system</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <LinkContainer to="/films">
                        <Nav.Link>Филми</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cinemas">
                        <Nav.Link>Кинотеатри</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects">
                        <Nav.Link>Прожекции</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Header;
