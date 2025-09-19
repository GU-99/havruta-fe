export async function register() {
  console.log('NextJS 서버 실행: Register 초기화 실행');
  const isRunningOnNode  = process.env.NEXT_RUNTIME === 'nodejs';
  const isMockingMode = process.env.NODE_ENV !== 'production' || process.env.API_MOCKING === 'enabled';
  
  if (isRunningOnNode && isMockingMode) {
    console.log('NextJS 서버 실행: MSW Node 모킹 활성화')
    const { server } = await import('@/mocks/node');
    server.listen();
  }
}