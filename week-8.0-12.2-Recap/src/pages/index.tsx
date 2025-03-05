import { Inter } from 'next/font/google'
import { VideoGrid } from '@/components/VideoGrid'
import { NavBar } from '@/components/NavBar'
import { LeftBar } from '@/components/LeftBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NavBar/>
      <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </main>
  )
}