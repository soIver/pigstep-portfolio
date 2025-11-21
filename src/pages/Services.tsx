import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const services = [
    { slug: 'web-development', title: 'Веб-разработка', desc: 'Сайты, веб-приложения и e-commerce' },
    { slug: 'mobile', title: 'Мобильные приложения', desc: 'iOS и Android нативные и кроссплатформенные решения' },
    { slug: 'branding', title: 'Брендинг и UI/UX', desc: 'Фирменный стиль, дизайн интерфейсов и прототипы' },
];

export default function Services() {
    return (
        <Container className="py-5">
            <h1 className="display-5 fw-bold mb-4">Наши услуги</h1>
            <Row className="g-4">
                {services.map((s) => (
                    <Col md={4} key={s.slug}>
                        <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                            <h4 className="fw-bold">{s.title}</h4>
                            <p className="text-muted">{s.desc}</p>
                            <a href={`/services/${s.slug}`} className="text-decoration-none">
                                <Button variant="primary">Подробнее →</Button>
                            </a>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
