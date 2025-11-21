import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
    const { id } = useParams<{ id: string }>();

    return (
        <Container className="py-5">
            <h1 className="display-5 fw-bold mb-3">Статья {id}</h1>
            <p className="lead text-muted">Здесь будет полный текст публикации с аналитикой и практическими рекомендациями.</p>

            <h4 className="mt-4">Ключевые выводы</h4>
            <ul>
                <li>Практический совет 1</li>
                <li>Практический совет 2</li>
                <li>Практический совет 3</li>
            </ul>
        </Container>
    );
}
