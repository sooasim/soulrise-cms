'use client';

import { useEffect, useState } from 'react';

export default function AdminRedirect() {
  const [cmsAdminUrl, setCmsAdminUrl] = useState('https://soulrise-cms-production-fc73.up.railway.app/admin');
  const [isRedirecting, setIsRedirecting] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // 환경변수에서 CMS 관리자 URL 가져오기
    const envUrl = process.env.NEXT_PUBLIC_CMS_ADMIN_URL;
    if (envUrl) {
      setCmsAdminUrl(envUrl);
    }
    
    // 카운트다운 타이머
    const countdownTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          if (typeof window !== 'undefined') {
            window.location.href = cmsAdminUrl;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 3초 후 리다이렉트 플래그 해제
    const redirectTimer = setTimeout(() => {
      setIsRedirecting(false);
    }, 3000);

    return () => {
      clearInterval(countdownTimer);
      clearTimeout(redirectTimer);
    };
  }, [cmsAdminUrl]);

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
        padding: '30px',
        borderRadius: '15px',
        marginBottom: '30px',
        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
      }}>
        <h1 style={{ margin: '0 0 15px 0', fontSize: '28px', fontWeight: '600' }}>
          🚀 SoulRise 관리자
        </h1>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '16px' }}>
          {isRedirecting ? `CMS 관리자로 ${countdown}초 후 이동합니다...` : '리다이렉트가 완료되지 않았습니다.'}
        </p>
        {isRedirecting && (
          <div style={{ marginTop: '20px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid rgba(255,255,255,0.3)',
              borderTop: '3px solid white',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto'
            }}></div>
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        )}
      </div>
      
      <div style={{ 
        padding: '25px',
        background: '#f8f9fa',
        borderRadius: '12px',
        border: '1px solid #e9ecef',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#333', fontSize: '18px' }}>
          💡 수동으로 이동하기
        </h3>
        <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '14px' }}>
          자동으로 이동되지 않는다면 아래 버튼을 클릭하세요:
        </p>
        <a 
          href={cmsAdminUrl}
          style={{
            display: 'inline-block',
            background: '#667eea',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(102, 126, 234, 0.3)'
          }}
          onMouseOver={(e) => {
            const target = e.target as HTMLAnchorElement;
            target.style.background = '#5a6fd8';
            target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            const target = e.target as HTMLAnchorElement;
            target.style.background = '#667eea';
            target.style.transform = 'translateY(0)';
          }}
        >
          🔗 CMS 관리자로 이동
        </a>
        
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          background: '#e3f2fd', 
          borderRadius: '8px',
          border: '1px solid #bbdefb'
        }}>
          <p style={{ margin: '0', color: '#1976d2', fontSize: '13px' }}>
            <strong>대상 URL:</strong> {cmsAdminUrl}
          </p>
        </div>
      </div>
    </main>
  );
}
