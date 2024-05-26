/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div >
      <footer class="footer text-center text-lg-start bg-body-tertiary text-muted">
        <section>
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="logo-section col-md-12 col-lg-12 col-xl-12 mb-4">
                <h6 class="text-uppercase text-light fw-bold mb-4">
                  <img className='footer-logo' src="/images/logo.jpeg" alt="logo" />
                  kian academy
                </h6>
                <p className='w-50'>
                  Is Your Guide To Learning
                  Our Role Here Has Increased More And This Is So
                  That We Can Benefit The Students Who Are With
                  Us In Our Courses.
                </p>
              </div>

              <div class="col-md-12 col-lg-4 col-xl-4 mx-auto mb-3">
                <h6 class="text-uppercase text-light fw-bold">
                  Quick Links
                </h6>
                <p className='mb-0'>
                  <Link to="/courses" class="text-reset">Courses</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/register" class="text-reset">join a Career</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/events" class="text-reset">Upcoming Events</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/gallry" class="text-reset">Gallery</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/instructors" class="text-reset">instrutors Detail</Link>
                </p>
              </div>



              <div class="col-md-12 col-lg-4 col-xl-4 mx-auto mb-3">
                <h6 class="text-uppercase text-light fw-bold">
                  Information
                </h6>
                <p className='mb-0'>
                  <Link to="/login" class="text-reset">Login</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/register" class="text-reset">Register</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/contact" class="text-reset">Contact Us</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/about" class="text-reset">About Us</Link>
                </p>
              </div>

              <div class="col-md-12 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold text-light">Contact us</h6>
                <p className='mb-2'><i class="fas fa-location-dot me-2"></i>Zagazig - Agriculture Square - Abu Ahmed Supermarket Street - Choumna Building, ground floor.</p>
                <p className='mb-2'>
                  <i class="fas fa-envelope me-2"></i>
                  <a className='text-light' href="mailto:ke4577216@gmail.com">ke4577216@gmail.com</a>
                </p>
                <a className='phone' href="tel:01062160382"><p className='mb-0'><i class="fas fa-phone me-2"></i> 01062160382</p></a>
                <a className='phone' href="tel:01062160382"><p className='mb-0'><i class="fas fa-phone me-2"></i> 01062160382</p></a>
              </div>
            </div>
          </div>
        </section>

        {/* start Social media  */}
        <section class="text-center social-icons mb-3">

          {/* Facebook  */}
          <a href="https://web.facebook.com/profile.php?id=100086496031937" target='_blank' rel="noreferrer"><i class="fab mr-3 fa-facebook text-light"></i></a>
          {/* Twitter  */}
          <a href="#!" target='_blank' rel="noreferrer"><i class="fab mr-3 fa-twitter text-light"></i></a>
          {/* Instagram  */}
          <a href="#!" target='_blank' rel="noreferrer"><i class="fab mr-3 fa-instagram text-light"></i></a>
          {/* Linkedin  */}
          <a href="#!" target='_blank' rel="noreferrer"><i class="fab mr-3 fa-linkedin text-light"></i></a>

        </section>
        {/* End Social media  */}

        <div class="text-center px-4 pb-4">
          ©2024
          ( kian academy )
          All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer