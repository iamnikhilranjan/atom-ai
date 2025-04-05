// MailPageClientWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

const MailPage = dynamic(() => import('@/app/mail/index'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default MailPage;
