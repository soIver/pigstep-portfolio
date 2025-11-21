import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>PigStep Agency</h5>
                        <p>Создаём цифровые продукты, которые приносят результат.</p>
                    </Col>
                    <Col md={4}>
                        <h6>Быстрые ссылки</h6>
                        <ul className="list-unstyled">
                            <li><a href="/cases" className="text-light">Кейсы</a></li>
                            <li><a href="/services" className="text-light">Услуги</a></li>
                            <li><a href="/about" className="text-light">О нас</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <NavLink to="/contact" className="btn btn-warning text-dark fw-bold">
                            Обсудить проект
                        </NavLink>
                    </Col>
                </Row>
                <hr className="my-4" />
                <Row>
                    <Col className="text-center">
                        © 2025 PigStep Agency. Все лабы защищены.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}