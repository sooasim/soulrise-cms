import Link from "next/link";
import { fetchPublic } from "@/lib/api";

export default async function Page() {
  // CMS에서 최신 블로그 포스트 가져오기
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 text-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
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
          
          <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed opacity-90">
            <span className="font-semibold">소울콜 · EORA · TAC-Link · 전술시계</span>
            <br />
            현장에서 검증된 AI 기술로 투자와 고객을 위한 통합 솔루션을 제공합니다
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link 
              className="group px-5 py-2 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" 
              href="/contact"
            >
              <span className="flex items-center gap-2">
                🎯 데모 신청하기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link 
              className="group px-5 py-2 rounded-lg border-2 border-white/50 text-white font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm" 
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
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { number: "99%", label: "정확도" },
              { number: "24/7", label: "모니터링" },
              { number: "50+", label: "기업 고객" },
              { number: "1M+", label: "분석 데이터" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg md:text-xl font-bold text-yellow-300 mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              핵심 솔루션
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              현장에서 검증된 AI 기술로 다양한 산업 분야의 문제를 해결합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                className="group block p-4 rounded-xl bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-1 mb-3">
                  {solution.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-500">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  자세히 보기 
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EORA Integration Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">eora.life 상담 연동</h2>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            EORA 기반 AI 상담 플랫폼으로 감정 분석과 코칭을 경험하세요.
          </p>
          <a 
            className="inline-block px-5 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors" 
            href="https://www.eora.life" 
            target="_blank"
            rel="noopener noreferrer"
          >
            상담 시작하기
          </a>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">최신 소식</h2>
          
          {cmsError ? (
            <div className="text-center mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 mb-2">CMS 연결 오류가 발생했습니다.</p>
              <p className="text-sm text-red-500">오류: {cmsError}</p>
              <p className="text-sm text-gray-500 mt-2">CMS URL: {process.env.NEXT_PUBLIC_CMS_URL}</p>
            </div>
          ) : latestPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {latestPosts.map((post: any) => {
                const attributes = post.attributes;
                return (
                  <Link 
                    key={post.id}
                    href={`/blog/${attributes.slug}`}
                    className="p-3 rounded-lg border hover:shadow-lg transition-shadow bg-white group"
                  >
                    {attributes.coverImage?.data && (
                      <div className="mb-2 overflow-hidden rounded-lg">
                        <img 
                          src={attributes.coverImage.data.attributes.url}
                          alt={attributes.title}
                          className="w-full h-24 object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <h3 className="text-base font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {attributes.title}
                    </h3>
                    <p className="text-gray-600 mb-2 text-sm line-clamp-2">
                      {attributes.excerpt}
                    </p>
                    <div className="text-xs text-gray-500">
                      {new Date(attributes.publishedAt).toLocaleDateString('ko-KR')}
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center mb-6">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-600 mb-2">CMS에서 최신 소식을 불러오는 중...</p>
                <p className="text-sm text-gray-500">CMS URL: {process.env.NEXT_PUBLIC_CMS_URL || '설정되지 않음'}</p>
                <p className="text-sm text-gray-500 mt-2">아직 게시된 포스트가 없거나 CMS 설정이 필요합니다.</p>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              모든 블로그 & 뉴스 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
