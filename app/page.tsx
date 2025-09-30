// app/page.tsx
import { fetchPublic } from "@/lib/api";
import Link from "next/link";

export default async function HomePage() {
    const data = await fetchPublic("/api/posts", { populate: "*", "pagination[limit]": 3 });
    const posts = Array.isArray(data?.data) ? data.data : [];

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px'
        }}>
            <header style={{
                textAlign: 'center',
                padding: '60px 0',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '10px',
                marginBottom: '40px'
            }}>
                <h1 style={{ fontSize: '3rem', margin: '0' }}>SoulRise</h1>
                <p style={{ fontSize: '1.2rem', margin: '10px 0 0 0' }}>영혼의 상승을 위한 여정</p>
            </header>

            <main>
                <section style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginBottom: '60px'
                }}>
                    <div style={{
                        padding: '30px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#667eea' }}>우리의 미션</h2>
                        <p>영혼의 상승과 개인적 성장을 위한 의미 있는 여정을 함께합니다.</p>
                    </div>

                    <div style={{
                        padding: '30px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#667eea' }}>서비스</h2>
                        <p>개인 맞춤형 영성 지도와 성장 프로그램을 제공합니다.</p>
                    </div>

                    <div style={{
                        padding: '30px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#667eea' }}>연락처</h2>
                        <p>여러분의 여정에 함께하고 싶습니다. 언제든지 연락주세요.</p>
                    </div>
                </section>

                {posts.length > 0 && (
                    <section style={{
                        marginBottom: '60px'
                    }}>
                        <h2 style={{ color: '#333', marginBottom: '30px' }}>최신 소식</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '20px'
                        }}>
                            {posts.map((post: any) => {
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
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Link
                                href="/blog"
                                style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '25px',
                                    textDecoration: 'none',
                                    fontSize: '16px'
                                }}
                            >
                                모든 글 보기
                            </Link>
                        </div>
                    </section>
                )}

                <section style={{
                    textAlign: 'center',
                    padding: '40px',
                    background: '#f8f9fa',
                    borderRadius: '10px'
                }}>
                    <h2 style={{ color: '#333' }}>지금 시작하세요</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                        SoulRise와 함께하는 영혼의 상승 여정
                    </p>
                    <button style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '15px 30px',
                        fontSize: '1.1rem',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s'
                    }}>
                        시작하기
                    </button>
                </section>
            </main>

            <footer style={{
                textAlign: 'center',
                padding: '40px 0',
                borderTop: '1px solid #e0e0e0',
                marginTop: '60px',
                color: '#666'
            }}>
                <p>&copy; 2024 SoulRise. All rights reserved.</p>
            </footer>
        </div>
    );
}
