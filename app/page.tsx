// app/page.tsx
import BlogPosts from "@/components/BlogPosts";
// import Link from "next/link";

export default function HomePage() {

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px'
        }}>
            {/* 네비게이션 메뉴 */}
            <nav style={{
                background: 'white',
                padding: '15px 0',
                marginBottom: '20px',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '30px',
                    flexWrap: 'wrap'
                }}>
                    <a href="/" style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontWeight: '500',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        transition: 'background 0.2s'
                    }}>홈</a>
                    <a href="/blog" style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontWeight: '500',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        transition: 'background 0.2s'
                    }}>블로그</a>
                    <a href="/about" style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontWeight: '500',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        transition: 'background 0.2s'
                    }}>회사 소개</a>
                    <a href="/contact" style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontWeight: '500',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        transition: 'background 0.2s'
                    }}>문의하기</a>
                    <a href="/ir" style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontWeight: '500',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        transition: 'background 0.2s'
                    }}>IR</a>
                    <a href="/admin" style={{
                        color: '#764ba2',
                        textDecoration: 'none',
                        fontWeight: '500',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        transition: 'background 0.2s',
                        background: '#f8f9fa'
                    }}>관리자</a>
                </div>
            </nav>

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

                <section style={{
                    marginBottom: '60px'
                }}>
                    <h2 style={{ color: '#333', marginBottom: '30px' }}>최신 소식</h2>
                    <BlogPosts limit={3} />
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <div
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                padding: '12px 24px',
                                borderRadius: '25px',
                                fontSize: '16px',
                                display: 'inline-block'
                            }}
                        >
                            최신 소식
                        </div>
                    </div>
                </section>

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
