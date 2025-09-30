'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
  };
}

interface BlogPostsProps {
  limit?: number;
}

export default function BlogPosts({ limit }: BlogPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://soulrise-cms-production.up.railway.app';
        const url = `${cmsUrl}/api/posts?populate=*${limit ? `&pagination[limit]=${limit}` : ''}`;
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(Array.isArray(data?.data) ? data.data : []);
      } catch (err) {
        console.error('CMS FETCH ERROR:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [limit]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
        글을 불러오는 중...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
        글이 아직 없거나 서버에서 글을 불러오지 못했어요.
        <div style={{ marginTop: '8px', fontSize: '14px' }}>
          점검 순서: CMS 주소 변수 확인 → Public 권한(find/findOne) 허용 → CMS에 글 발행.
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
          오류: {error}
        </div>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
        글이 아직 없거나 서버에서 글을 불러오지 못했어요.
        <div style={{ marginTop: '8px', fontSize: '14px' }}>
          점검 순서: CMS 주소 변수 확인 → Public 권한(find/findOne) 허용 → CMS에 글 발행.
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    }}>
      {posts.map((post) => {
        const a = post.attributes || {};
        return (
          <Link
            key={post.id}
            href={`/blog/${a.slug}`}
            style={{
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            }}
          >
            <h3 style={{ color: '#667eea', marginBottom: '10px' }}>
              {a.title || "제목 없음"}
            </h3>
            <p style={{ color: '#666', fontSize: '14px' }}>
              {a.excerpt || "내용 미리보기가 없습니다."}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
