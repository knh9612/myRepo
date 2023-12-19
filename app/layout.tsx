// #1-1. Styling: 전역 css 적용
import '@/app/ui/global.css'

//  #2-1-2. 폰트 불러오기(import)
import {inter} from './ui/fonts';


// DefaultLayout.jsx 와 같음
export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      {/* #2-1-2.body 태그에 폰트 적용. */}
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
