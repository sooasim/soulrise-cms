// app/blog/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BlogPost {
    id: number;
    attributes: {
        title: string;
        slug: string;
        excerpt?: string;
        content?: string;
    };
}

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;

    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPost() {
            try {
                const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://soulrise-cms-production.up.railway.app';
                const url = `${cmsUrl}/api/posts?filters[slug][$eq]=${slug}&populate=*`;

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
                const posts = Array.isArray(data?.data) ? data.data : [];
                setPost(posts[0] || null);
            } catch (err) {
                console.error('CMS FETCH ERROR:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch post');
            } finally {
                setLoading(false);
            }
        }

        if (slug) {
            fetchPost();
        }
    }, [slug]);

    if (loading) {
        return (
            <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
                <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                    글을 불러오는 중...
                </div>
            </main>
        );
    }

    if (error || !post) {
        return (
            <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
                <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                    글을 찾을 수 없어요.
                    {error && (
                        <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
                            오류: {error}
                        </div>
                    )}
                </div>
            </main>
        );
    }

    const a = post.attributes;

    return (
        <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
            <article>
                <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 16 }}>
                    {a.title || "제목 없음"}
                </h1>

                {a.excerpt && (
                    <div style={{ fontSize: 18, color: "#666", marginBottom: 24 }}>
                        {a.excerpt}
                    </div>
                )}

                {a.content && (
                    <div style={{ lineHeight: 1.6, fontSize: 16 }}>
                        {a.content}
                    </div>
                )}

                {!a.content && (
                    <div style={{ color: "#999", fontStyle: "italic" }}>
                        내용이 없습니다.
                    </div>
                )}
            </article>
        </main>
    );
}