import React from 'react';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigationbar = () => {
	return (
			<Navbar bg="light" expand="lg">
				<Link to='/' className='navbar-brand'>RoR Todo</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to='/' className='nav-link'>Home</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
	);
};

export default Navigationbar;
