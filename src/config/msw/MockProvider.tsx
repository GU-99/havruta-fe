'use client';

import React, { useEffect, useState } from 'react';

type MockProviderProps = {
  children: React.ReactNode;
}

//* Info: Node 환경으로 통합하여 더이상 사용하지 않지만, 이후 활용이나 참고를 위해 남깁니다.
export default function MockProvider({ children }: MockProviderProps) {
  const [isMockLoading, setIsMockLoading] = useState(true);

  useEffect(() => {
    async function enableMocking() {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        const { worker } = await import('@/mocks/browser');
        await worker.start();
      }
    }

    enableMocking().then(() => setIsMockLoading(false));
  }, []);

  if (isMockLoading) return null;

  return <>{children}</>;
}
