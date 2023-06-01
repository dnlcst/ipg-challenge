import { Calistoga, Roboto_Condensed } from 'next/font/google'
import Slider from 'react-slick'
const calistoga = Calistoga({ weight: '400', subsets: ['latin'] })
const robotoCondensed = Roboto_Condensed({ weight: '700', subsets: ['latin'] })

export default function Testimonials() {
  return (
    <section className="testimonials py-12">
      <div className="container mx-auto py-10">
        <h2 className={calistoga.className}>Here&apos;s what they <br />have to say...</h2>
        <Slider />
      </div>
    </section>
  )
}