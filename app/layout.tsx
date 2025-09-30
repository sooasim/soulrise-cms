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
            <body>{children}</body>
        </html>
    )
}
