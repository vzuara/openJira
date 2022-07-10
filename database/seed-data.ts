import { v4 as uuid4 } from 'uuid';

interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAd: number;
}

export const seedData = {
  entries: [
    {
      description: 'Pendientes: Aliqua esse esse occaecat consequat eiusmod.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'En-Progreso Culpa aliquip officia qui sit nisi amet magna quis.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Terminadas: Ipsum do elit incididunt deserunt eiusmod non ullamco proident adipisicing tempor consequat elit ipsum.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
