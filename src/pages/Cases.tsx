import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { CASES } from '../data/cases';

export default function Cases() {
    return (
        <Container className="py-5">
            <h1 className="display-5 fw-bold mb-4">Кейсы</h1>
            <Row className="g-4">
                {CASES.map((c) => (
                    <Col md={4} key={c.id}>
                        <Link to={`/cases/${c.id}`} className="text-decoration-none text-dark">
                            <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                                <img src={c.image} alt={c.title} className="w-100 mb-3 rounded-2" style={{ height: 180, objectFit: 'cover' }} />
                                <h5 className="fw-bold">{c.title}</h5>
                                <p className="text-muted small">{c.summary}</p>
                                <div className="text-primary fw-bold">Подробнее →</div>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
