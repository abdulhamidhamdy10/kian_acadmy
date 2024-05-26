/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container,Row,Col } from 'reactstrap';

function Sectionhome() {
    return (
        <div className='sectionhome'>
            <Container>
                <Row className='rowone'>
                    <Col md="6">
                        <div className='text'>
                            <a href='#'>____Course Categories</a>
                            <h1>Begin Your Learning,
                                Something For Everyone</h1>
                        </div>
                    </Col>
                    <Col md="6">
                    <div class="buttons ">
                                <button class="blob-btn">
                                    View All
                                    <span class="blob-btn__inner">
                                        <span class="blob-btn__blobs">
                                            <span class="blob-btn__blob"></span>
                                            <span class="blob-btn__blob"></span>
                                            <span class="blob-btn__blob"></span>
                                            <span class="blob-btn__blob"></span>
                                        </span>
                                    </span>
                                </button>
                                <br />

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                    </div>
                    </Col>
                </Row>

                <Row className='rowtwo'>
                    <Col md="6" xl="4">
                        <div className='box span3 wow rollIn'>
                            <div className='text'>
                                <h2>Computer Science</h2>
                                <hr></hr>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda
                            quasi odio non? </h5>
                            </div>

                            <div className='image' id='imgone'>
                                <img src="images/Home/sectionhome/pc-clipart-desktop-icon-18.png" alt='home'></img>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" xl="4">
                        <div className='box span3 wow bounceInDown center" '>
                            <div className='text'>
                                <h2>Information Technology</h2>
                                <hr></hr>

                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda
                            quasi odio non? </h5>
                            </div>

                            <div className='image' id='imgtwo'>
                                <img src="images/Home/sectionhome/75322-things-of-euclidean-vector-internet-technology-icon.png" alt='home'></img>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" xl="4">
                        <div className='box span3 wow bounceInRight'>
                            <div className='text'>
                                <h2>Mobile Development</h2>
                                <hr></hr>

                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda
                            quasi odio non? </h5>
                            </div>

                            <div className='image' id='imgthree'>
                                <img src="images/Home/sectionhome/app-development-icon-28.png" alt='home'></img>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" xl="4">
                        <div className='box span3 wow rollIn'>
                            <div className='text'>
                                <h2>Artificial Intelligence</h2>
                                <hr></hr>

                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda
                            quasi odio non? </h5>
                            </div>

                            <div className='image' id='imgfour'>
                                <img src="images/Home/sectionhome/computer-chip-with-ai-letters-3d-artificial-intelligence-icon-png.png" alt='home'></img>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" xl="4">
                        <div className='box span3 wow bounceInUp center'>
                            <div className='text'>
                                <h2>Web Development</h2>
                                <hr></hr>

                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda
                            quasi odio non? </h5>
                            </div>

                            <div className='image' id='imgfive'>
                                <img src="images/Home/sectionhome/developer-icon-26.png" alt='home'></img>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" xl="4">
                        <div className='box span3 wow bounceInRight'>
                            <div className='text'>
                                <h2>Graphic Design</h2>
                                <hr></hr>

                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda
                            quasi odio non? </h5>
                            </div>

                            <div className='image' id='imgsix'>
                                <img src="images/Home/sectionhome/design-icon-png-0.png" alt='home'></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Sectionhome;