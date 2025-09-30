// app/blog/[slug]/page.tsx
import { fetchPublic } from "@/lib/api";

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function BlogPost({ params }: PageProps) {
    const data = await fetchPublic(`/api/posts?filters[slug][$eq]=${params.slug}&populate=*`);
    const posts = Array.isArray(data?.data) ? data.data : [];
    const post = posts[0];

    const a = post?.attributes;
    if (!a) return <main style={{ padding: 40 }}>글을 찾을 수 없어요.</main>;

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
