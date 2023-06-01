export default function Navbar() {
  return (
    <section className="px-4">
        <div className="container mx-auto p-8 flex justify-center content-between">
          <ul className="navbar py-4 inline-flex gap-10">
            <li><a href="#" className="nav-link active">Home</a></li>
            <li><a href="#" className="nav-link">Guides</a></li>
            <li><a href="#" className="nav-link">Flights</a></li>
            <li><a href="#" className="nav-link">About</a></li>
          </ul>
          <a href="#" className="btn btn-outline ms-auto">Contact Us</a>
        </div>
    </section>
  )
}