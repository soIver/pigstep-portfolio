import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function NotFound() {
    return (
        <Container className="py-5 text-center">
            <h1 className="display-4 fw-bold">404 — Страница не найдена</h1>
            <p className="lead text-muted">Похоже, мы не нашли страницу, которую вы ищете.</p>
            <a href="/" className="text-decoration-none">
                <Button variant="primary">На главную</Button>
            </a>
        </Container>
    );
}
