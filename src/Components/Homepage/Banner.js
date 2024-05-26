import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

function Banner() {
  return (
    <div className='banner'>
      <Container>
        <Row>

          <Col md="12" lg="6">
            <div className='banner-caption'>
              <img className='tag' src="/images/instructors/tag-2.png" alt='tag' />
              <div className='banner-title'>
                <img className='rocket' src="/images/Home/rocket.png" alt='rocket' />
                <h2 className='text-primary wow fadeInUp' data-wow-delay="0.2s">Best Online</h2>
                <h3 className='text-primary wow fadeInUp' data-wow-delay="0.4s">Learning</h3>
                <h4 className='wow fadeInUp' data-wow-delay="0.6s">Resources!</h4>
                <h5 className='text-muted mt-4 wow fadeInUp' data-wow-delay="0.8s">Make Your Free Account & Get Discounts</h5>
              </div>
              {/* <button>Enroll Now</button> */}
                {/* <Link to='/signup'>
                  <button className="blob-btn mb-5">
                    Enroll Now
                    <span className="blob-btn__inner">
                      <span className="blob-btn__blobs">
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                      </span>
                    </span>
                  </button>
                </Link> */}
                <div class="btn-glow my-4 wow fadeInLeft">
                  <div class="btn"><Link to="#">enroll now</Link></div>
                </div>

                <img className='spin-logo' src="images/Home/Untitled-1.png" alt='home'></img>
              </div>

          </Col>

          <Col md="12" lg="6">
            <div className='head-banner'>
              <img className='img-fluid wow fadeInUp' data-wow-delay="0.2s" src='images/Home/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-1421526922477gbjew.png' alt='home'></img>
              <div className=''>
                <img className='small-img lamp animate__animated animate__jello animate__infinite animate__slower animate__delay-1s' src='images/Home/homehead/lamp.png' alt='lamp' />
                <img className='small-img camera animate__animated animate__jello animate__infinite animate__slower animate__delay-2s' src='images/Home/homehead/camera.png' alt='lamp' />
                <img className='small-img light animate__animated animate__jello animate__infinite animate__slower animate__delay-1s' src='images/Home/homehead/light.png' alt='lamp' />
                <img className='small-img mic animate__animated animate__jello animate__infinite animate__slower animate__delay-2s' src='images/Home/homehead/mic.png' alt='lamp' />
              </div>
            </div>

          </Col>

        </Row>
      </Container>
    </div>
  )
}
export default Banner