export type CaseItem = {
    id: number;
    slug: string;
    title: string;
    summary: string;
    image: string; // public path, e.g. /images/case-alpha.png
    details?: string;
    results?: string[];
};

export const CASES: CaseItem[] = [
    {
        id: 1,
        slug: 'alpha',
        title: 'Корпоративный портал «Альфа»',
        summary: 'Увеличили скорость работы сотрудников на 340%',
        image: '/alpha.png',
        details:
            'Разработка корпоративного портала с интеграцией внутренних сервисов, системой авторизации и удобной админ-панелью.',
        results: ['+340% производительности', 'Сокращение ручных задач на 70%'],
    },
    {
        id: 2,
        slug: 'beta',
        title: 'Маркетплейс «Бета»',
        summary: 'Рост конверсии на 45%',
        image: '/beta.png',
        details: 'Создание маркетплейса с кастомной корзиной, рекомендациями и оплатой онлайн.',
        results: ['+45% конверсии', 'Увеличение среднего чека на 12%'],
    },
    {
        id: 3,
        slug: 'gamma',
        title: 'Мобильное приложение «Гамма»',
        summary: 'Виртуальная валюта и retention +60%',
        image: '/gamma.png',
        details: 'Кроссплатформенное мобильное приложение с системой вознаграждений и аналитикой поведения.',
        results: ['Retention +60%', 'Активные пользователи +80%'],
    },
];

export function getCaseById(id: number) {
    return CASES.find((c) => c.id === id);
}
