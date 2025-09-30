'use client';

import { useEffect } from 'react';

export default function AdminRedirect() {
  useEffect(() => {
    // CMS 관리자 URL로 자동 리다이렉트
    const cmsAdmin = process.env.NEXT_PUBLIC_CMS_ADMIN_URL || 'https://soulrise-cms-production.up.railway.app/admin';
    
    // 클라이언트 사이드에서 리다이렉트
    if (typeof window !== 'undefined') {
      window.location.href = cmsAdmin;
    }
  }, []);

  return (
    <main style={{
      padding: '40px',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>관리자 페이지</h1>
        <p style={{ margin: 0, opacity: 0.9 }}>CMS 관리자로 이동 중입니다...</p>
      </div>
      
      <div style={{ 
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <p style={{ margin: '0 0 10px 0', color: '#666' }}>
          자동으로 이동되지 않는다면 아래 버튼을 클릭하세요:
        </p>
        <a 
          href={process.env.NEXT_PUBLIC_CMS_ADMIN_URL || 'https://soulrise-cms-production.up.railway.app/admin'}
          style={{
            display: 'inline-block',
            background: '#667eea',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          CMS 관리자로 이동
        </a>
      </div>
    </main>
  );
}
