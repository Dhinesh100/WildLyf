import React from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">WildLyf</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="index.html">Home</Nav.Link>
                    <Nav.Link href="index.html">About Us</Nav.Link>
                    <NavDropdown title="Collections" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="index.html">Amphibians</NavDropdown.Item>
                        <NavDropdown.Item href="index.html">Birds</NavDropdown.Item>
                        <NavDropdown.Item href="index.html">Fish</NavDropdown.Item>
                        <NavDropdown.Item href="index.html">Invertabrates</NavDropdown.Item>
                        <NavDropdown.Item href="index.html">Mammals</NavDropdown.Item>
                        <NavDropdown.Item href="index.html">Reptiles</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="index.html">Contact Us</Nav.Link>
                    <Nav.Link href="index.html">Other Services</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;