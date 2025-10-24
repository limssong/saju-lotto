import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.scss'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: '사주로또 - 사주팔자와 로또번호 추천',
  description: '사주팔자를 보고 로또번호를 추천받는 사이트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  )
}
