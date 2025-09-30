import Link from "next/link";

export default async function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            감정을 이해하는 AI, 현장에서 가치를 증명합니다
          </h1>
          <p className="mt-6 text-lg mb-10 max-w-3xl mx-auto">
            소울콜 · EORA · TAC-Link · 전술시계 — 투자와 고객을 위한 통합 홈페이지
          </p>
          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <Link 
              className="px-6 py-3 rounded-xl bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors" 
              href="/contact"
            >
              데모 신청
            </Link>
            <Link 
              className="px-6 py-3 rounded-xl border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors" 
              href="/ir"
            >
              투자 자료
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">핵심 솔루션</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "소울콜", 
                description: "AI 음성 상담·세일즈", 
                href: "/solutions/soulcall",
                icon: "🎤"
              },
              { 
                title: "EORA", 
                description: "감정 기반 GAI", 
                href: "/solutions/eora",
                icon: "🧠"
              },
              { 
                title: "TAC-Link", 
                description: "스마트폰 전술 통신", 
                href: "/solutions/tac-link",
                icon: "📱"
              },
              { 
                title: "전술시계", 
                description: "임무 복귀·보안", 
                href: "/products/tmw",
                icon: "⌚"
              },
            ].map((solution) => (
              <Link 
                key={solution.title} 
                href={solution.href} 
                className="p-6 rounded-2xl border hover:shadow-lg transition-shadow bg-white"
              >
                <div className="text-3xl mb-4">{solution.icon}</div>
                <div className="text-xl font-medium mb-2">{solution.title}</div>
                <div className="text-sm text-gray-600 mb-4">{solution.description}</div>
                <div className="text-blue-600 font-medium">자세히 보기 →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EORA Integration Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">eora.life 상담 연동</h2>
          <p className="mt-4 text-gray-700 mb-8 max-w-3xl mx-auto">
            EORA 기반 AI 상담 플랫폼으로 감정 분석과 코칭을 경험하세요.
          </p>
          <a 
            className="inline-block px-8 py-4 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-colors" 
            href="https://www.eora.life" 
            target="_blank"
            rel="noopener noreferrer"
          >
            상담 시작하기
          </a>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">최신 소식</h2>
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              블로그 & 뉴스 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
