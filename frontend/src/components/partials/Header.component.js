import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HeaderFilters from './HeaderFilters.component';
import SearchBar from './SearchBar.component';
import React from 'react';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
            <LinkContainer to='/'>
                <Navbar.Brand>Info system</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0 responsive-navbar-nav"
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
                    <HeaderFilters />
                </Nav>
                <Nav>
                    <SearchBar />
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Header;
