import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

function Discount() {
    return (
        <div className='discount py-5'>
            <Container>
                <Row>
                    <Col xl="6" md="12">
                        <div className='text wow fadeInUp'>
                            <h2 className='text-primary'>Get a 30% Discount!</h2>
                            <h2 className='text-primary'>Create Your Free Account Today!</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</h6>
                        </div>
                        <div class="btn-glow my-4">
                            <div class="btn"><Link to="/signup">join now</Link></div>
                        </div>

                    </Col>
                    <Col xl="6" md="12">
                        <img
                            className='wow fadeInDown img-fluid'
                            src="/images/Home/discount-stamp-2.png"
                            alt="discount"
                            data-wow-duration="1s"
                            data-wow-offset="100"
                            style={{
                                visibility: 'visible',
                                animationDuration: '2s',
                                animationName: 'zoomIn'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Discount;