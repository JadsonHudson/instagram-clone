import Header from '../components/Header'
import Feed from '../components/Feed'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <Feed/>
    </>
  )
}
