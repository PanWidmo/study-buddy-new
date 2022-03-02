import { factory, primaryKey } from '@mswjs/data';

const fruits = ['apple', 'bannana', 'plum'];

export const db = factory({
  fruit: {
    id: primaryKey(String),
    name: () => fruits[Math.floor(Math.random() * fruits.length)],
    price: () => Math.random() * 100,
  },
});
