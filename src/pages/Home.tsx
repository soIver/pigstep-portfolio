import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';

import 'animate.css';
import { CASES } from '../data/cases';

export default function Home({ openModal }: { openModal?: () => void }) {

    // Анимация при появлении в зоне видимости
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [casesRef, casesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <>
            {/* ====================== HERO SECTION ====================== */}
            <section className="bg-dark text-light py-5" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} ref={heroRef} className={heroInView ? 'animate__animated animate__fadeInLeft' : ''}>
                            <h1 className="display-4 fw-bold mb-4">
                                Создаём цифровые продукты,<br />которые приносят результат
                            </h1>
                            <p className="lead mb-4">
                                Веб-разработка, мобильные приложения, брендинг и UI/UX дизайн под ключ.<br />
                                Более 8 лет опыта и 150+ успешных проектов.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3">
                                <Button variant="warning" size="lg" className="fw-bold text-dark" onClick={openModal}>
                                    Обсудить проект
                                </Button>
                                <a href="/cases" className="text-decoration-none">
                                    <Button variant="outline-light" size="lg">Посмотреть кейсы →</Button>
                                </a>
                            </div>
                        </Col>
                        <Col lg={6} className="mt-5 mt-lg-0">
                            <Carousel controls={true} indicators={true} pause="hover">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3 shadow"
                                        src="/analytics.jpg"
                                        alt="Аналитика и рост"
                                    />
                                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                                        <h5>Рост выручки клиентов в среднем на 180%</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3 shadow"
                                        src="/design.jpg"
                                        alt="Дизайн и разработка"
                                    />
                                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                                        <h5>Современный дизайн и чистый код</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3 shadow"
                                        src="/we.jpg"
                                        alt="Команда профессионалов"
                                    />
                                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                                        <h5>Команда из 20+ специалистов</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ====================== УСЛУГИ (быстрый обзор) ====================== */}
            <section className="py-5 bg-light">
                <Container ref={servicesRef}>
                    <div className={servicesInView ? 'text-center mb-5 animate__animated animate__fadeInUp' : 'text-center mb-5'}>
                        <h2 className="display-5 fw-bold">Наши услуги</h2>
                        <p className="lead text-muted">Комплексный подход от идеи до запуска</p>
                    </div>

                    <Row className="g-4">
                        {[
                            { title: 'Веб-разработка', icon: '💻', link: '/services/web-development', color: 'primary' },
                            { title: 'Мобильные приложения', icon: '📱', link: '/services/mobile', color: 'success' },
                            { title: 'Брендинг и UI/UX', icon: '🎨', link: '/services/branding', color: 'warning' },
                        ].map((service, idx) => (
                            <Col md={4} key={idx}>
                                <div
                                    className={`p-5 rounded-4 shadow-sm h-100 text-center bg-white animate__animated ${servicesInView ? `animate__fadeInUp animate__delay-${idx + 1}s` : ''
                                        }`}
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="display-1 mb-3">{service.icon}</div>
                                    <h4 className="fw-bold">{service.title}</h4>
                                    <p className="text-muted">От лендингов до сложных веб-приложений</p>
                                    <a href={service.link} className="text-decoration-none">
                                        <Button variant={service.color}>Подробнее →</Button>
                                    </a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ====================== ПОСЛЕДНИЕ КЕЙСЫ ====================== */}
            <section className="py-5">
                <Container ref={casesRef}>
                    <div className={casesInView ? 'text-center mb-5 animate__animated animate__fadeInUp' : 'text-center mb-5'}>
                        <h2 className="display-5 fw-bold">Недавние кейсы</h2>
                        <p className="lead text-muted">Реальные проекты — реальные результаты</p>
                    </div>

                    <Row className="g-4">
                        { /* use shared CASES dataset and show first 3 as recent */}
                        {CASES.slice(0, 3).map((c, idx) => (
                            <Col lg={4} key={c.id}>
                                <Link to={`/cases/${c.id}`} className="text-decoration-none">
                                    <div
                                        className={`bg-white rounded-4 overflow-hidden shadow h-100 hover-shadow animate__animated ${casesInView ? 'animate__fadeInUp' : ''}`}
                                        style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                                    >
                                        <img
                                            src={c.image}
                                            alt={c.title}
                                            className="w-100"
                                            style={{ height: '250px', objectFit: 'cover' }}
                                        />
                                        <div className="p-4">
                                            <h5 className="fw-bold">{c.title}</h5>
                                            <p className="text-muted small">{c.summary}</p>
                                            <span className="text-primary fw-bold">Подробнее →</span>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>

                    <div className="text-center mt-5">
                        <a href="/cases" className="text-decoration-none">
                            <Button variant="outline-primary" size="lg">Все кейсы →</Button>
                        </a>
                    </div>
                </Container>
            </section>

            {/* ====================== CTA SECTION ====================== */}
            <section className="py-5 bg-primary text-light">
                <Container className="text-center">
                    <h2 className="display-5 fw-bold mb-4">Готовы к росту?</h2>
                    <p className="lead mb-4">Оставьте заявку — мы свяжемся с вами в течение 30 минут</p>
                    <NavLink to="/contact" className="btn btn-lg btn-hover-warning">
                        Обсудить проект
                    </NavLink>
                </Container>
            </section>
        </>
    );
}