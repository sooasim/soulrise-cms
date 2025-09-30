// app/blog/page.tsx
import BlogPosts from "@/components/BlogPosts";

export default function BlogList() {
    return (
        <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
            <h1 style={{ fontSize: 28, fontWeight: 600 }}>블로그 & 뉴스</h1>
            <div style={{ marginTop: 24 }}>
                <BlogPosts />
            </div>
        </main>
    );
}
