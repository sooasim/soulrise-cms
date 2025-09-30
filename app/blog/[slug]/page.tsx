import { fetchPublic } from "@/lib/api";

async function getPost(slug: string) {
    const data = await fetchPublic("/api/posts", {
        "filters[slug][$eq]": slug,
        populate: "*",
    });
    return data?.data?.[0];
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    const a = post?.attributes;
    if (!a) return <main style={{ padding: 40 }}>글을 찾을 수 없어요.</main>;

    return (
        <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
            <h1 style={{ fontSize: 28, fontWeight: 600 }}>{a.title}</h1>
            <p style={{ marginTop: 8, color: "#666" }}>{a.excerpt}</p>
            <article
                style={{ marginTop: 24, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: a.content }}
            />
        </main>
    );
}
