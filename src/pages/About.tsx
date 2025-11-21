import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function About() {
    return (
        <Container className="py-5">
            <Row>
                <Col md={8} className="mx-auto">
                    <h1 className="display-5 fw-bold mb-3">О нашей команде</h1>
                    <p className="lead text-muted">
                        Мы — команда веб-разработчиков, дизайнеров и аналитиков. Создаём продукты, которые помогают
                        бизнесам расти: от брендирования и UI/UX до сложных веб-приложений и мобильных решений.
                    </p>
                    <Row className="align-items-center mt-3 mt-md-0">
                        <Image src="/ourteam.jpg" alt="Наша команда" fluid rounded loading="lazy" width={600} height={400} />

                    </Row>




                    <Row className="align-items-start mt-5">
                        <Col md={7}>
                            <h3>Как мы работаем</h3>
                            <p className="text-muted">
                                Мы помогаем от идеи до релиза: исследование, прототипирование, дизайн,
                                разработка, тестирование и поддержка. Работая в тесной связке с клиентом,
                                мы фокусируемся на бизнес-целях и реальных метриках.
                            </p>
                            <h3 className="mt-4">Наши ценности</h3>
                            <ul>
                                <li>Качество кода и удобство для пользователя</li>
                                <li>Быстрая коммуникация и прозрачный процесс</li>
                                <li>Ориентация на результат клиента</li>
                            </ul>
                            <h3 className="mt-4">Опыт</h3>
                            <p className="text-muted">Более 8 лет в отрасли, 150+ проектов в различных отраслях.</p>

                        </Col>
                        <Col md={5} className="text-center mt-3 mt-md-0">
                            <Image src="/howwework.jpg" alt="Как мы работаем" fluid rounded loading="lazy" width={600} height={400} />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}
