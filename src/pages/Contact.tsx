import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <h1 className="display-5 fw-bold mb-3">Контакты</h1>
                    <p className="text-muted">Свяжитесь с нами для обсуждения проекта — мы быстро вернёмся с предложением.</p>

                    <p className="mb-1"><strong>Электронная почта:</strong> pigstep@leads.com</p>
                    <p className="mb-1"><strong>Телефон:</strong> +7 (999) 123-45-67</p>
                    <p className="mb-1"><strong>Адрес:</strong> Киров, Россия</p>
                </Col>

                <Col md={6}>
                    <h4 className="mb-3">Форма заявки</h4>
                    {submitted ? (
                        <div className="alert alert-success">Спасибо! Мы свяжемся с вами в ближайшее время.</div>
                    ) : (
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control required type="text" placeholder="Ваше имя" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Почта</Form.Label>
                                <Form.Control required type="email" placeholder="email@example.com" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Сообщение</Form.Label>
                                <Form.Control required as="textarea" rows={4} />
                            </Form.Group>

                            <Button type="submit" variant="primary">Отправить</Button>
                        </Form>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
