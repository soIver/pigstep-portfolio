import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

export default function ServiceDetail() {
    const location = useLocation();
    const parts = location.pathname.split('/').filter(Boolean);
    const slug = parts[1] || '';

    const titles: Record<string, string> = {
        'web-development': 'Веб-разработка',
        mobile: 'Мобильные приложения',
        branding: 'Брендинг и UI/UX',
    };

    const title = titles[slug] || 'Услуга';

    return (
        <Container className="py-5">
            <h1 className="display-5 fw-bold mb-3">{title}</h1>
            <p className="lead text-muted">
                Подробное описание услуги «{title}». Мы проектируем решения с фокусом на бизнес-цели,
                пользовательский опыт и масштабируемую архитектуру.
            </p>

            <h4 className="mt-4">Что входит</h4>
            <ul>
                <li>Анализ требований и прототипирование</li>
                <li>Дизайн интерфейсов и UX</li>
                <li>Разработка и тестирование</li>
                <li>Внедрение и поддержка</li>
            </ul>

            <div className="mt-4">
                <a href="/contact" className="text-decoration-none">
                    <Button variant="warning" className="text-dark">Оставить заявку</Button>
                </a>
            </div>
        </Container>
    );
}