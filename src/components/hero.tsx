/* eslint-disable @next/next/no-img-element */
import { Calistoga } from 'next/font/google'
const calistoga = Calistoga({ weight: '400', subsets: ['latin'] })

export default function Hero() {
  return (
    <article className="hero px-4">
        <div className="container mx-auto p-8 grid grid-cols-2 gap-8">
          <div className='intro pr-5'>
          <h1 className={calistoga.className}>Travel to your dream destination</h1>
          <p className='py-6'>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
          <a href="#" className="btn mt-2">Reserve Ticket</a>
        </div>
        <div className='hero-image'>
          <img src="https://images.unsplash.com/photo-1682685796467-89a6f149f07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt='' />
        </div>
      </div>
    </article>
  )
}