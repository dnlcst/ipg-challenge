
import { Calistoga } from 'next/font/google'
import SimpleSlider from './slider'
const calistoga = Calistoga({ weight: '400', subsets: ['latin'] })

export default function Testimonials() {
  return (
    <section className="testimonials py-6 md:py-12">
      <div className="container mx-auto py-10">
        <h2 className={`title ${calistoga.className}`}>Here&apos;s what they <br />have to say...</h2>
        <SimpleSlider />
      </div>
    </section>
  )
}