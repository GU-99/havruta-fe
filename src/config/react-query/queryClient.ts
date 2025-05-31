import { MINUTE } from '@/constants/units';
import { QueryClient, type QueryClientConfig } from '@tanstack/react-query';

// todo: 기본 옵션 대화해보기
const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 5 * MINUTE,
      gcTime: 10 * MINUTE,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      // refetchInterval: 5 * MINUTE,
      retry: 3,
      
    }
  },
}

export const queryClient = new QueryClient(queryClientOptions);