/* eslint-disable @next/next/no-img-element */
import { Calistoga, Roboto_Condensed } from 'next/font/google'
const calistoga = Calistoga({ weight: '400', subsets: ['latin'] })
const robotoCondensed = Roboto_Condensed({ weight: '700', subsets: ['latin'] })

export default function DarkSection() {
  return (
    <section className='dark-intro mt-8 pb-12 md:py-12'>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-10 content-between md:py-6">
        <div className="content flex flew-col flex-wrap ps-4 pe-4 md:ps-8 md:pe-0 lg:ps-8 xl:ps-8">
          <h2 className={`title ${calistoga.className}`}>Choose anywhere you&apos;d like to be</h2>
          <article className="pt-8 pb-8">
            <h4 className={`subtitle ${robotoCondensed.className}`}>Lorem ipsum dolor</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </article>
          <article>
            <h4 className={`subtitle ${robotoCondensed.className}`}>Lorem ipsum dolor</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </article>
        </div>
        <div className="image order-first md:order-last">
          <img src="https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
      </div>
    </section>
  )
}