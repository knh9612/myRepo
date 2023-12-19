// 화면에 보이는 페이지.
// 

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';



export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-700 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">


          {/* 여기에 작성, #1-2. tailwind code 작성해보기 */}
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>
          <p className={`${lusitana.className} text-xl text-gray-300 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , 기술세미나는 언제하고 자바는 또 언제하냐;; 알고리즘은 언제하고 cs는 또 언제하냐 슈발!!!
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* #2-2-1. next/images를 통한 image 추가 방법 */}
          <Image // 이미지는 용량을 생각보다 많이 먹어서 화면 랜더링 소요 시간이 걸림. nextjs가 최적화 해줌.
          src="/hero-desktop.png"
          width={1000} // layout shift 현상을 피하기 위해 width, height를 직접 작성
          height={760}
          alt="Screenshot image"
          className='hidden md:block' // md라는 옵션은 @media (min-width: 768px). 768px 이상이면 block으로 바꿔라! block이면 화면에 보임
          // 기본 옵션은 모바일 사이즈임. 
          />
          {/* #2-2-2. 직접 이미지 추가해보기, 이미지 파일명: hero-mobile.png 사이즈: w560 h620 */}
          <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          alt='Screenshot mobile image'
          className='hidden md:block'
          />
        </div>
      </div>
    </main>
  );
}
