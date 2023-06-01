import { Open_Sans } from 'next/font/google'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import MoreContent from '@/components/more-content'
import DarkSection from '@/components/dark-section'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

const openSans = Open_Sans({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })

export default function Home() {
  return (
    <main className={openSans.className}>
      <Navbar />
      <Hero />
      <MoreContent />
      <DarkSection />
      <Testimonials />
      <Footer />
    </main>
  )
}
