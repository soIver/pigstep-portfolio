import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const posts = [
    { id: '2025-01', title: 'Как мы увеличили конверсию на 40%', excerpt: 'Кейс, в котором мы подробно разбираем шаги по росту конверсии.' },
    { id: '2025-02', title: 'Лучшие практики UI/UX в 2025', excerpt: 'Краткий обзор трендов и подходов к дизайну интерфейсов.' },
];

export default function Blog() {
    return (
        <Container className="py-5">
            <h1 className="display-5 fw-bold mb-4">Блог</h1>
            <Row className="g-4">
                {posts.map((p) => (
                    <Col md={6} key={p.id}>
                        <Link to={`/blog/${p.id}`} className="text-decoration-none text-dark">
                            <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                                <h5 className="fw-bold">{p.title}</h5>
                                <p className="text-muted small">{p.excerpt}</p>
                                <div className="text-primary fw-bold">Читать →</div>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
