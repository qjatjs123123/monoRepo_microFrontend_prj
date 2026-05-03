/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type ReactNode } from 'react';

export function MSWProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !import.meta.env.DEV) {
      // SSR 또는 Production 환경에서는 바로 렌더링
      setReady(true);
      return;
    }

    let worker: any;

    // 동적으로 MSW worker import
    import('@/shared/config/mocks/browser')
      .then(async ({ worker: mswWorker }) => {
        worker = mswWorker;

        await worker.start({
          serviceWorker: {
            url: '/mockServiceWorker.js', // public 폴더 기준 경로
          },
          onUnhandledRequest(request, print) {
            // Vite 내부 요청이나 _next는 무시
            if (request.url.includes('@vite') || request.url.includes('_next')) return;
            print.warning();
          },
        });

        console.log('MSW Handlers:', worker.listHandlers());
        setReady(true);
      })
      .catch((err) => {
        console.error('Failed to start MSW:', err);
        setReady(true); // 에러 발생 시에도 앱 렌더링
      });

    // HMR 또는 컴포넌트 언마운트 시 worker 중지
    return () => {
      worker?.stop();
    };
  }, []);

  // worker 준비될 때까지 렌더링 지연
  if (!ready) return null;

  return <>{children}</>;
}
