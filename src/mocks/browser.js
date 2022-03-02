import { setupWorker } from 'msw';
import { handlers } from 'mocks/handlers';
import { db } from 'mocks/db';

export const worker = setupWorker(...handlers);

db.fruit.create({ id: '1' });
db.fruit.create({ id: '2' });
db.fruit.create({ id: '3' });
