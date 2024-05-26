/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from '../Navigation/NavBar'
import Footer from '../Navigation/Footer'
import { Link } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

function CourseDetails() {
  return (
    <div>
      <Navbar />
      <div className="container course-details mb-5">
        <div className="row">

          {/* start head title  */}
          <div className='d-flex justify-content-between mb-5 title-all'>

            <div className='m-auto position-relative'>
              <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
              <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">course details</h2>
              <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
              </p>
            </div>

            <img className='img-fluid wow fadeInDown' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="" />
          </div>
          {/* End head title  */}

          {/* start details  */}
          <div className="col-md-12 col-lg-6">
            {/* instructor Details  */}
            <div className="card" style={{ borderRadius: "60px 0px 0px 60px" }}>

              <div className="text-center p-2 d-flex">
                <Link to="#">
                  <img src="images/trainers/trainer-1-2.jpg" alt="Trainer-img" className="m-2" style={{ borderRadius: "50%", width: "75px", height: "75px" }} />
                </Link>

                <div className="m-2">
                  <h5 className="text-primary">Ahmed Ahmed</h5>
                  <p className="text-muted">Full Stack Developer</p>
                </div>
              </div>

            </div>

            {/* Course Date  */}
            <div>
              <h3 className="text-muted mt-3">Publised Date</h3>
              <p>8 September 2024 </p>
            </div>

            {/* Course Details  */}
            <h1 className="text-primary">
              Mastering Photoshop: Advanced Techniques and Creative Mastery
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi libero, illum mollitia eius ipsum omnis commodi
              architecto ab harum ipsa voluptate dolorum tenetur, esse
              debitis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi libero, illum mollitia eius ipsum omnis commodi
              architecto ab harum ipsa voluptate dolorum tenetur, esse
              debitis!
            </p>
          </div>

          {/* start img banner  */}
          <div className="col-md-12 col-lg-6 mt-5 mb-3">
            <img src="images/Courses/course-1.jpg" className="img-fluid rounded-2 " alt="" />
          </div>
          {/* End img banner  */}

          {/* start table  */}
          <div>
            <table class="table table-responsive bg-light table-borderless">
              <thead>
                <tr className="text-primary">
                  <th scope="col ">Category</th>
                  <th scope="col">Difficulty</th>
                  <th scope="col">Videos</th>
                  <th scope="col">Time</th>
                  <th scope="col">Assignments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Graphics Design</td>
                  <td>Advanced</td>
                  <td>
                    <div className="d-flex">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M6 3.447h-1v-1.447h19v16h-7.731l2.731 4h-1.311l-2.736-4h-1.953l-2.736 4h-1.264l2.732-4h-2.732v-1h8v-1h3v1h3v-14h-17v.447zm2.242 17.343c-.025.679-.576 1.21-1.256 1.21-.64 0-1.179-.497-1.254-1.156l-.406-4.034-.317 4.019c-.051.656-.604 1.171-1.257 1.171-.681 0-1.235-.531-1.262-1.21l-.262-6.456-.308.555c-.241.437-.8.638-1.265.459-.404-.156-.655-.538-.655-.951 0-.093.012-.188.039-.283l1.134-4.098c.17-.601.725-1.021 1.351-1.021h4.096c.511 0 1.012-.178 1.285-.33.723-.403 2.439-1.369 3.136-1.793.394-.243.949-.147 1.24.217.32.396.286.95-.074 1.297l-3.048 2.906c-.375.359-.595.849-.617 1.381-.061 1.397-.3 8.117-.3 8.117zm-5.718-10.795c-.18 0-.34.121-.389.294-.295 1.04-1.011 3.666-1.134 4.098l1.511-2.593c.172-.295.623-.18.636.158l.341 8.797c.01.278.5.287.523.002 0 0 .269-3.35.308-3.944.041-.599.449-1.017.992-1.017.547.002.968.415 1.029 1.004.036.349.327 3.419.385 3.938.043.378.505.326.517.022 0 0 .239-6.725.3-8.124.033-.791.362-1.523.925-2.061l3.045-2.904c-.661.492-2.393 1.468-3.121 1.873-.396.221-1.07.457-1.772.457h-4.096zm16.476 1.005h-5v-1h5v1zm2-2h-7v-1h7v1zm-15.727-4.994c-1.278 0-2.315 1.038-2.315 2.316 0 1.278 1.037 2.316 2.315 2.316s2.316-1.038 2.316-2.316c0-1.278-1.038-2.316-2.316-2.316zm0 1c.726 0 1.316.59 1.316 1.316 0 .726-.59 1.316-1.316 1.316-.725 0-1.315-.59-1.315-1.316 0-.726.59-1.316 1.315-1.316zm15.727 1.994h-7v-1h7v1z" />
                      </svg>
                      <p className="ml-1">40 vidoes</p>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
                      </svg>
                      <p className="ml-1">15+Hours</p>
                    </div>
                  </td>
                  <td>Weekly Assignments</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* End table  */}

          <div class="btn-glow mt-2">
                  <div class="btn"><Link to="#">enroll now</Link></div>
                </div>
          {/* End details  */}

        </div>
      </div>
      <ScrollToTop smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
      <Footer />
    </div>
  )
}

export default CourseDetails