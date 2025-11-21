import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getCaseById } from '../data/cases';

export default function CaseDetail() {
    const { id } = useParams<{ id: string }>();
    const numericId = id ? parseInt(id, 10) : NaN;
    const c = getCaseById(numericId as number);

    if (!c) {
        return (
            <Container className="py-5">
                <h1 className="display-5 fw-bold mb-3">Кейс не найден</h1>
                <p className="text-muted">Запрошенный кейс не найден.</p>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <h1 className="display-5 fw-bold mb-3">{c.title}</h1>
            <img src={c.image} alt={c.title} className="w-100 rounded-3 mb-4" style={{ maxHeight: 420, objectFit: 'cover' }} />
            <p className="lead text-muted">{c.details}</p>

            {c.results && (
                <>
                    <h4 className="mt-4">Результаты</h4>
                    <ul>
                        {c.results.map((r, i) => (
                            <li key={i}>{r}</li>
                        ))}
                    </ul>
                </>
            )}
        </Container>
    );
}
