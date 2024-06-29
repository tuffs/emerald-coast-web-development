import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">EMERALD COAST WEB DEVELOPMENT</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item our_process__link">
                <a className="nav-link" aria-current="page" href="/our-process">OUR PROCESS</a>
              </li>
              <li className="nav-item services__link">
                <a className="nav-link" aria-current="page" href="/services">SERVICES</a>
              </li>
              <li className="nav-item featured_work__link">
                <a className="nav-link" aria-current="page" href="/featured-work">FEATURED WORK</a>
              </li>
              <li className="nav-item technologies__link">
                <a className="nav-link" aria-current="page" href="/technologies">TECHNOLOGIES</a>
              </li>
              <li className="nav-item blog__link">
                <a className="nav-link" aria-current="page" href="/blog">BLOG</a>
              </li>
              <li className="nav-item contact_us__link">
                <a className="nav-link" aria-current="page" href="/contact-us">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;