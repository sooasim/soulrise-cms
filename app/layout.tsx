// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
                    className="fixed right-5 bottom-5 bg-gray-900 text-white px-4 py-3 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
                >
                    eora 상담
                </a>
            </body>
        </html>
    )
}
