import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Features() {
    return (
        <div className='features'>
            <Container>
                <Row>

                    <Col md="6" lg="3">
                        <div data-wow-delay="0.2s" className='box wow bounceInUp'>
                            <i className="fa-solid fa-gear icon"></i>
                            <div className='text'>
                                <h2>Lifetime Access</h2>
                                <h5>Welcome to our academy, where learning knows no bounds!</h5>
                            </div>
                        </div>
                    </Col>

                    <Col md="6" lg="3">
                        <div data-wow-delay="0.4s" className='box wow bounceInUp'>
                            <i className="fa-solid fa-check icon"></i>
                            <div className='text'>
                                <h2>Best Teachers</h2>
                                <h5>At our academy, we take pride in providing the best teachers for our students. </h5>
                            </div>
                        </div>
                    </Col>

                    <Col md="6" lg="3">
                        <div data-wow-delay="0.6s" className='box wow bounceInUp'>
                            <i className="fa-solid fa-chalkboard-user icon"></i>
                            <div className='text'>
                                <h2>Save money</h2>
                                <h5>Spend less money on your learning if you plan to take multiple courses this year</h5>
                            </div>
                        </div>
                    </Col>

                    <Col md="6" lg="3">
                        <div data-wow-delay="0.8s" className='box wow bounceInUp'>
                            <i className="fa-solid fa-headset icon"></i>
                            <div className='text'>
                                <h2>Interactive Support</h2>
                                <h5>The academy website offers a wide array of educational materials covering various subjects and fields</h5>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Features;