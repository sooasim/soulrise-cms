// app/blog/page.tsx
import Link from "next/link";
import { fetchPublic } from "@/lib/api";

export default async function BlogList() {
  const data = await fetchPublic("/api/posts", { populate: "*" });
  const posts = Array.isArray(data?.data) ? data.data : [];

  return (
    <main style={{maxWidth:900, margin:"40px auto", padding:"0 20px"}}>
      <h1 style={{fontSize:28, fontWeight:600}}>블로그 & 뉴스</h1>

      {!posts.length && (
        <div style={{marginTop:16, color:"#666"}}>
          글이 아직 없거나 서버에서 글을 불러오지 못했어요.
          <div style={{marginTop:8, fontSize:14}}>
            점검 순서: CMS 주소 변수 확인 → Public 권한(find/findOne) 허용 → CMS에 글 발행.
          </div>
        </div>
      )}

      {!!posts.length && (
        <div style={{marginTop:24, display:"grid", gap:16}}>
          {posts.map((p: any) => {
            const a = p.attributes || {};
            return (
              <Link key={p.id} href={`/blog/${a.slug}`} style={{padding:16, border:"1px solid #eee", borderRadius:12}}>
                <div style={{fontSize:20, fontWeight:500}}>{a.title || "제목 없음"}</div>
                <div style={{marginTop:8, color:"#666"}}>{a.excerpt || ""}</div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
