import { fetchPublic } from "../../lib/api";

async function getPage(slug: string) {
  const data = await fetchPublic("/api/pages", {
    "filters[slug][$eq]": slug,
  });
  return data?.data?.[0];
}

export default async function IRPage() {
  const page = await getPage('ir');
  const a = page?.attributes;
  
  if (!a) {
    return (
      <main style={{
        maxWidth: 900, 
        margin: "40px auto", 
        padding: "0 20px",
        textAlign: 'center'
      }}>
        <div style={{
          background: '#f8f9fa',
          padding: '40px',
          borderRadius: '10px',
          border: '1px solid #e9ecef'
        }}>
          <h1 style={{ color: '#666', marginBottom: '20px' }}>IR (투자자 정보)</h1>
          <p style={{ color: '#888' }}>
            SoulRise의 투자자 정보와 재무 보고서를 확인하실 수 있습니다.
          </p>
          <p style={{ color: '#888' }}>
            CMS에서 "ir" 슬러그로 페이지를 발행하면 여기에 표시됩니다.
          </p>
          <a 
            href="/"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              marginTop: '20px'
            }}
          >
            홈으로 돌아가기
          </a>
        </div>
      </main>
    );
  }

  return (
    <main style={{
      maxWidth: 900, 
      margin: "40px auto", 
      padding: "0 20px",
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        border: '1px solid #e9ecef'
      }}>
        <h1 style={{
          fontSize: 28, 
          fontWeight: 600,
          color: '#333',
          marginBottom: '30px',
          borderBottom: '2px solid #667eea',
          paddingBottom: '15px'
        }}>
          {a.title || 'IR (투자자 정보)'}
        </h1>
        
        <article
          style={{
            marginTop: 24, 
            lineHeight: 1.7,
            color: '#555',
            fontSize: '16px'
          }}
          dangerouslySetInnerHTML={{ __html: a.content }}
        />
        
        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <a 
            href="/"
            style={{
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            ← 홈으로 돌아가기
          </a>
        </div>
      </div>
    </main>
  );
}
