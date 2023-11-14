import Image from 'next/image'
import { Inter } from 'next/font/google'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MaxWidthWrapper>

      <div className='h-screen'>Home page</div>

    </MaxWidthWrapper>
  )
}
