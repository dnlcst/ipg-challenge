/* eslint-disable @next/next/no-img-element */
import { Calistoga } from "next/font/google"
const calistoga = Calistoga({ weight: "400", subsets: ["latin"] })

export default function Hero() {
  return (
    <section className="hero sm:px-6 md:px-8">
      <div className="container mx-auto p-0 sm:py-8 grid md:grid-cols-2 sm:grid-cols-1 gap-8">
        <div className="intro px-4 sm:px-0">
          <h1 className={`title ${calistoga.className}`}>Travel to your dream destination</h1>
          <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
          <a href="#" className="btn mt-2">Reserve Ticket</a>
        </div>
        <div className="hero-image order-first md:order-last">
          <img src="https://images.unsplash.com/photo-1682685796467-89a6f149f07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
        </div>
      </div>
    </section>
  )
}