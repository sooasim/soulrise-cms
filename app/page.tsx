import Link from "next/link";
import { fetchPublic } from "../lib/api";

export default async function Page() {
    // CMS에서 최신 블로그 포스트 가져오기 - CACHE_FIX_2025_NEW
    let latestPosts = [];
    let cmsError = null;

    try {
        console.log("CMS URL:", process.env.NEXT_PUBLIC_CMS_URL);
        const data = await fetchPublic("/api/posts", {
            populate: "*",
            "pagination[limit]": 3,
            "sort": "publishedAt:desc"
        });
        latestPosts = data?.data ?? [];
        console.log("CMS 데이터 로드 성공:", latestPosts.length, "개 포스트");
    } catch (error: any) {
        console.error("CMS 연결 실패:", error);
        cmsError = error?.message || "알 수 없는 오류";
    }

    return (
        <main className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="relative text-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-grid-pattern"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent"></div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 py-20 lg:py-28">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                            🚀 혁신적인 AI 솔루션
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            감정을 이해하는 AI
                        </span>
                        <span className="block text-yellow-300 text-xl md:text-2xl lg:text-3xl mt-1">
                            소울라이즈
                        </span>
                    </h1>

                    <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-blue-100/80">
                        <span className="font-semibold">소울콜 · EORA · TAC-Link · 전술시계</span>
                        <br />
                        현장에서 검증된 AI 기술로 투자와 고객을 위한 통합 솔루션을 제공합니다
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-1 w-full sm:w-auto"
                            href="/contact"
                        >
                            <span className="flex items-center gap-2">
                                🎯 데모 신청하기
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                        <Link
                            className="group inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                            href="/ir"
                        >
                            <span className="flex items-center gap-2">
                                📊 투자 자료 보기
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { number: "99%", label: "정확도" },
                            { number: "24/7", label: "모니터링" },
                            { number: "50+", label: "기업 고객" },
                            { number: "1M+", label: "분석 데이터" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                                <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">{stat.number}</div>
                                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            핵심 솔루션
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            현장에서 검증된 AI 기술로 다양한 산업 분야의 문제를 해결하고, 비즈니스의 새로운 가능성을 엽니다.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "소울콜",
                                description: "AI 음성 상담·세일즈",
                                href: "/solutions/soulcall",
                                icon: "🎤",
                                color: "from-pink-500 to-rose-500",
                                features: ["감정 분석", "음성 인식", "실시간 상담"]
                            },
                            {
                                title: "EORA",
                                description: "감정 기반 GAI",
                                href: "/solutions/eora",
                                icon: "🧠",
                                color: "from-blue-500 to-indigo-500",
                                features: ["감정 이해", "개인화", "AI 대화"]
                            },
                            {
                                title: "TAC-Link",
                                description: "스마트폰 전술 통신",
                                href: "/solutions/tac-link",
                                icon: "📱",
                                color: "from-green-500 to-teal-500",
                                features: ["보안 통신", "전술 지원", "실시간 위치"]
                            },
                            {
                                title: "전술시계",
                                description: "임무 복귀·보안",
                                href: "/products/tmw",
                                icon: "⌚",
                                color: "from-purple-500 to-violet-500",
                                features: ["임무 추적", "보안 통신", "응급 상황"]
                            },
                        ].map((solution) => (
                            <Link
                                key={solution.title}
                                href={solution.href}
                                className="group block p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/80"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {solution.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-gray-900">
                                    {solution.title}
                                </h3>

                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {solution.description}
                                </p>

                                <div className="space-y-2 mb-5">
                                    {solution.features.map((feature, index) => (
                                        <div key={index} className="flex items-center text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-1 transition-transform duration-300">
                                    자세히 보기
                                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* EORA Integration Section */}
            <section className="py-16 bg-gray-800 text-white bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80)' }}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">eora.life 상담 연동</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        EORA 기반 AI 상담 플랫폼으로 감정 분석과 코칭을 경험하세요.
                    </p>
                    <a
                        className="inline-block px-8 py-3 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-200 transition-colors transform hover:scale-105"
                        href="https://www.eora.life"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        상담 시작하기
                    </a>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">최신 소식</h2>

                    {cmsError ? (
                        <div className="text-center mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                            <p className="text-red-600 font-semibold mb-2">CMS 연결 오류가 발생했습니다.</p>
                            <p className="text-sm text-red-500">오류: {cmsError}</p>
                            <p className="text-sm text-gray-600 mt-2">CMS URL: {process.env.NEXT_PUBLIC_CMS_URL}</p>
                        </div>
                    ) : latestPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                            {latestPosts.map((post: any) => {
                                const attributes = post.attributes;
                                return (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${attributes.slug}`}
                                        className="block rounded-2xl border border-gray-200/80 hover:shadow-xl hover:border-blue-300 transition-all group bg-white overflow-hidden"
                                    >
                                        {attributes.coverImage?.data && (
                                            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                                <img
                                                    src={attributes.coverImage.data.attributes.url}
                                                    alt={attributes.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {attributes.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                                                {attributes.excerpt}
                                            </p>
                                            <div className="text-xs text-gray-500">
                                                {new Date(attributes.publishedAt).toLocaleDateString('ko-KR')}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center mb-10">
                            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl max-w-lg mx-auto">
                                <p className="text-gray-700 font-semibold mb-2">새로운 소식을 준비 중입니다.</p>
                                <p className="text-sm text-gray-500">CMS URL: {process.env.NEXT_PUBLIC_CMS_URL || '설정되지 않음'}</p>
                                <p className="text-sm text-gray-500 mt-1">게시된 포스트가 없거나 CMS 설정이 필요합니다.</p>
                            </div>
                        </div>
                    )}

                    <div className="text-center">
                        <Link
                            href="/blog"
                            className="inline-block px-7 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all transform hover:scale-105"
                        >
                            모든 블로그 & 뉴스 보기
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
