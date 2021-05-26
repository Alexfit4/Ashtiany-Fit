import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

export default function BootStrapNavBar() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Ashtiany Fitness</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">About me</Nav.Link>
						<Nav.Link href="#link">Reviews</Nav.Link>
                        <Nav.Link href="#link">Contact me</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
