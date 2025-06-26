import { setupWorker } from 'msw/browser'
import { handlers } from '@/mocks/handles';

export const worker = setupWorker(...handlers)