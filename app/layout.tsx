// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SoulRise - 영혼의 상승',
    description: 'SoulRise 공식 웹사이트',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body>
                {children}
                {/* eora.life 상담 버튼 */}
                <a
                    href="https://www.eora.life"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: "fixed",
                        right: 20,
                        bottom: 20,
                        background: "#111",
                        color: "#fff",
                        padding: "12px 16px",
                        borderRadius: 24,
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "500",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        zIndex: 1000,
                        transition: "all 0.3s ease"
                    }}
                >
                    eora 상담
                </a>
            </body>
        </html>
    )
}
