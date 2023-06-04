export default function Navbar() {
  return (
    <section className="sm:px-6 md:px-8">
        <div className="container mx-auto p-0 sm:pt-6 md:py-8 mb-2 sm:mb-0 flex flex-wrap justify-center sm:content-between">
          <ul className="navbar py-4 inline-flex items-center gap-4 sm:gap-10">
            <li><a href="#" className="nav-link active">Home</a></li>
            <li><a href="#" className="nav-link">Guides</a></li>
            <li><a href="#" className="nav-link">Flights</a></li>
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#" className="nav-link">Contact Us</a></li>
          </ul>
          <a href="#" className="btn btn-contact btn-outline sm:ms-auto">Contact Us</a>
        </div>
    </section>
  )
}