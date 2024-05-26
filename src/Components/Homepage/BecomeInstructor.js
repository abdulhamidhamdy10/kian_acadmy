import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

function BecomeInstructor() {
    return (
        <div className='join-team py-5'>
            <Container>
                <Row>
                    <Col md="12" className='join-contain bg-light p-5'>
                        <div className='box d-flex justify-content-between align-items-center'>
                            <div className='text wow fadeInDownBig'>
                                <h2 className='text-primary'>Become an Instructor!</h2>
                                <h6 className='w-75'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</h6>
                            </div>
                            <div class="btn-glow wow fadeInUpBig">
                                <div class="btn">
                                    <Link to="/signup">enroll now</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default BecomeInstructor;