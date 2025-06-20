'use client';

import React, { useEffect, useState } from 'react';

type MockProviderProps = {
  children: React.ReactNode;
}

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
