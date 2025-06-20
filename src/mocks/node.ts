import { setupServer } from 'msw/node';
import { handlers } from '@/mocks/handles';

export const server = setupServer(...handlers);