import { WebResource, ResourceType } from './models/web-resource';

export const WEB_RESOURCES: WebResource[] = [
  {
    id: '1',
    title: 'Angular Pro Dashboard',
    description: 'Готова панель адміністратора з налаштованими графіками та таблицями.',
    imageUrl: 'https://placehold.co/600x400/2c3e50/FFF?text=Angular+Dashboard',
    price: 49.99,
    createdAt: new Date('2025-10-15'),
    type: ResourceType.Template,
    tags: ['Angular 19', 'Tailwind', 'Chart.js'],
    isTrending: true,
    author: { name: 'Oleksandr Melnyk', avatarUrl: 'https://placehold.co/50x50/3498db/FFF?text=JD' }
  },
  {
    id: '2',
    title: 'Flexbox & Grid Masterclass',
    description: 'Повний курс із сучасного CSS-компонування з реальними проєктами.',
    imageUrl: 'https://placehold.co/600x400/e74c3c/FFF?text=CSS+Course',
    price: 89.00,
    createdAt: new Date('2026-01-20'),
    type: ResourceType.Course,
    tags: ['CSS3', 'Layout', 'Responsive'],
    author: { name: 'Mariia Kovalenko', avatarUrl: 'https://placehold.co/50x50/9b59b6/FFF?text=SS' }
  },
  {
    id: '3',
    title: 'DevSpace UI Kit',
    description: 'Набір із 100+ готових компонентів для швидкої розробки інтерфейсів.',
    imageUrl: 'https://placehold.co/600x400/27ae60/FFF?text=UI+Kit',
    price: 0,
    createdAt: new Date('2025-03-05'),
    type: ResourceType.UIKit,
    tags: ['Figma', 'UI/UX', 'Design System'],
  },
  {
    id: '4',
    title: 'SEO Optimizer Plugin',
    description: 'Автоматична генерація мета-тегів та sitemap для SPA додатків.',
    imageUrl: 'https://placehold.co/600x400/f39c12/FFF?text=SEO+Plugin',
    price: 15.50,
    createdAt: new Date('2025-11-30'),
    type: ResourceType.Plugin,
    tags: ['SEO', 'Performance', 'JavaScript'],
    isTrending: true,
    author: { name: 'Dmytro Bondarenko', avatarUrl: 'https://placehold.co/50x50/e67e22/FFF?text=AW' }
  },
  {
    id: '5',
    title: 'React E-commerce Template',
    description: 'Повністю функціональний магазин з інтеграцією кошика та оплати.',
    imageUrl: 'https://placehold.co/600x400/8e44ad/FFF?text=React+Shop',
    price: 55.00,
    createdAt: new Date('2026-02-14'),
    type: ResourceType.Template,
    tags: ['React', 'Redux', 'Stripe'],
    author: { name: 'Olena Tkachenko', avatarUrl: 'https://placehold.co/50x50/16a085/FFF?text=MJ' }
  }
];