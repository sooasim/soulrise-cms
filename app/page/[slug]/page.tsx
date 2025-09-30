import { fetchPublic } from "@/lib/api";

async function getPage(slug: string) {
    const data = await fetchPublic("/api/pages", {
        "filters[slug][$eq]": slug,
    });
    return data?.data?.[0];
}

export default async function StaticPage({ params }: { params: { slug: string } }) {
    const page = await getPage(params.slug);
    const a = page?.attributes;
    if (!a) return <main style={{ padding: 40 }}>페이지가 없어요.</main>;

    return (
        <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
            <h1 style={{ fontSize: 28, fontWeight: 600 }}>{a.title}</h1>
            <article
                style={{ marginTop: 24, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: a.content }}
            />
        </main>
    );
}
