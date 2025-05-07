import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import Logo from '/logo.webp'
import "bootstrap-icons/font/bootstrap-icons.css";


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" className='navbar-brand'>
                    <img className="object-fit-contain" style={{ maxHeight: '75px', width: 'auto' }} src={Logo} alt="Logotipo de la tienda" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className="nav-link" style={{ fontSize: '1.3rem' }}>Inicio</Link>
                        <Link to="/cart" className="nav-link" style={{ fontSize: '1.3rem' }}>Mi Carrito <i class="bi bi-cart-fill"></i></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header