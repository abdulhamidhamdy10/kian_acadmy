import React from 'react'
import Navbar from '../Navigation/NavBar'
import { CiClock2 } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import ScrollToTop from 'react-scroll-to-top';
import Footer from '../Navigation/Footer';


const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container about">
                <div className="row">
                    <div className="col-md-6 about-title wow fadeInDown">
                        <h2 className='mt-5 text-primary main-title'>about us</h2>
                        <h2 className='fw-bold text-dark mt-4'>
                            <span className='text-primary'>kian </span>
                            academy <br /> is Your Guide To Learning
                        </h2>
                        <p className='text-muted fw-bold'>Our role here has increased more and this is so <br />that we can benefit the students who are with <br /> us in our courses.</p>
                    </div>

                    <div className="col-md-6 about-banner  wow fadeInUp">
                        <img className='img-fluid' src="/images/about/about.jpg" alt="about" />
                    </div>

                    <div className="col-md-6 about-banner about-banner2 position-relative wow fadeInDown">
                        <img className='img-fluid' src="/images/about/about-2.jpg" alt="about-2" />
                        <img className='img-fluid position-absolute kian-logo' src="/images/logo.jpeg" alt="logo" />
                    </div>

                    <div className='col-md-6 about-courses wow fadeInUp'>
                        <div className='box'>
                            <CiClock2 size={90} className='box-icon' />
                            <div className='box-caption'>
                                <h5 className='m-0 text-primary'>Latest Courses</h5>
                                <p className='text-muted fw-bold'>Lorem ipsum dolor sit amet consectetur <br /> Non convallis sed id aliquam tempus. Volutpat tortor</p>
                            </div>
                        </div>

                        <div className='box'>
                            <FaWifi size={90} className='box-icon' />
                            <div className='box-caption'>
                                <h5 className='m-0 text-primary'>Live Classes</h5>
                                <p className='text-muted fw-bold'>Lorem ipsum dolor sit amet consectetur <br /> Non convallis sed id aliquam tempus.  Volutpat tortor</p>
                            </div>
                        </div>

                        <div className='box'>
                            <GiStarFormation size={90} className='box-icon' />
                            <div className='box-caption'>
                                <h5 className='m-0 text-primary'>Nurtured Students</h5>
                                <p className='text-muted fw-bold'>Lorem ipsum dolor sit amet consectetur <br /> Non convallis sed id aliquam tempus. Volutpat tortor</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
            <ScrollToTop smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />

        </div>
    )
}

export default About