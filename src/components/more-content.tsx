/* eslint-disable @next/next/no-img-element */
import { Calistoga } from 'next/font/google'
const calistoga = Calistoga({ weight: '400', subsets: ['latin'] })

export default function MoreContent() {
  return (
    <section className="more-content mt-8 sm:mt-0 sm:px-6 md:px-8">
        <div className="container mx-auto p-0 sm:py-8 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <article className="post px-4 sm:px-0">
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="content">
              <h3 className={`title ${calistoga.className}`}>Lorem ipsum dolor sit amet</h3>
              <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
            </div>
          </article>
          <article className="post px-4 sm:px-0">
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80" alt="" />
            </div>
            <div className="content">
              <h3 className={`title ${calistoga.className}`}>Lorem ipsum dolor sit amet</h3>
              <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
            </div>
          </article>
          <article className="post px-4 sm:px-0">
            <div className="mb-6">
              <img src="https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="content">
              <h3 className={`title ${calistoga.className}`}>Lorem ipsum dolor sit amet</h3>
              <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
            </div>
          </article>
        </div>
    </section>
  )
}