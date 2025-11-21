import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


export default function MainNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="py-2">
            <Container className="px-2">
                <Navbar.Brand as={NavLink} to="/">🐽 PigStep Agency</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto align-items-lg-center">
                        <Nav.Link as={NavLink} to="/" end>Главная</Nav.Link>

                        <NavDropdown title="Услуги" id="services-dropdown">
                            <NavDropdown.Item as={NavLink} to="/services">Все услуги</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/services/web-development">
                                Веб-разработка
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/services/branding">
                                Брендинг и дизайн
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/services/mobile">
                                Мобильные приложения
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={NavLink} to="/cases">Кейсы</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">О нас</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog">Блог</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Контакты</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}