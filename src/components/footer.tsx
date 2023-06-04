import { Calistoga, Roboto_Condensed } from 'next/font/google'
const calistoga = Calistoga({ weight: '400', subsets: ['latin'] })
const robotoCondensed = Roboto_Condensed({ weight: '700', subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className="page-footer py-8 md:py-12">
      <div className="container mx-auto py-8 lg:px-8 md:py-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-8 lg:gap-16">
          <h2 className={`title ${calistoga.className}`}>My Log <br className="hidden lg:inline" />Travels</h2>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className={`subtitle ${robotoCondensed.className}`}>Quick Links</h3>
            <ul className="grid grid-cols-1 items-center text-center md:text-left md:grid-cols-4 gap-3 gap-x-10">
              <li><a href="#">Home</a></li>
              <li><a href="#">Travels</a></li>
              <li><a href="#">Recommendations</a></li>
              <li><a href="#">Mission Statement</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Promo Flights</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">The Team</a></li>
              <li><a href="#">My Travel Logs</a></li>
              <li><a href="#">Travel Routes</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <p>2021 - 2022 My Log Travels. All Rights Reserved.</p>
      </div>
    </footer>
  )
}