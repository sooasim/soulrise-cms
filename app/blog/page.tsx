import { fetchPublic } from "../../lib/api";

export default async function BlogList() {
  const data = await fetchPublic("/api/posts", { populate: "*" });
  const posts = data?.data ?? [];
  
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">블로그 & 뉴스</h1>
        <p className="text-gray-600">SoulRise의 최신 소식과 기술 동향을 확인하세요.</p>
      </div>
      
      {posts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">아직 글이 없습니다</h3>
          <p className="text-gray-500">CMS에서 첫 번째 글을 작성해보세요.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => {
            const attributes = post.attributes;
            return (
              <div 
                key={post.id} 
                className="block group"
              >
                <article className="bg-white rounded-xl border hover:shadow-lg transition-shadow p-6 h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-blue-600">
                      {attributes.title}
                    </h3>
                  </div>
                  
                  {attributes.excerpt && (
                    <p className="text-gray-600 text-sm mb-4">
                      {attributes.excerpt}
                    </p>
                  )}
                  
                  {attributes.content && (
                    <div className="text-gray-700 text-sm mb-4">
                      {attributes.content.length > 150 
                        ? attributes.content.substring(0, 150) + '...' 
                        : attributes.content}
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-500">
                    <span>CMS에서 관리되는 콘텐츠</span>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
