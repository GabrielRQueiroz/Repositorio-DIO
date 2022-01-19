import React from 'react';
import { Container, Navbar, Nav, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark' fixed='top' expand='md' className='align-items-center'>
				<Container>
					<Navbar.Brand href='/'>DioShopping</Navbar.Brand>
					<Cart />
					<Navbar.Toggle aria-controls='navbar-nav' />
					<Navbar.Collapse id='navbar-nav' className='text-center'>
						<Nav className='ms-auto me-0 me-md-4'>
							<Nav.Link as='div'>
								<Link className='nav-link mx-auto' to='/'>
									Home
								</Link>
							</Nav.Link>
							<Nav.Link as='div' className='mb-2'>
								<Link className='nav-link mx-auto' to='/contato'>
									Contato
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Placeholder />
		</>
	);
};
export default Header;
