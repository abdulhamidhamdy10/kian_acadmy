import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function MiniDashboard() {
    return (
        <div className='mini-dashboard my-4'>
            <Container>
                <Row>
                    <Col md="6" lg='3' className='wow fadeInUpBig' data-wow-delay="0.1s">
                        <div className='box'>
                            <i className="fa-solid fa-users-between-lines icon"></i>
                            <div className='text'>
                                <h4>20</h4>
                                <h4>Group</h4>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" lg='3' className='wow fadeInUpBig' data-wow-delay="0.3s">
                        <div className='box'>
                            <i className="fa-solid fa-person-chalkboard icon"></i>
                            <div className='text'>
                                <h4>12</h4>
                                <h4>Instructors</h4>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" lg='3' className='wow fadeInUpBig' data-wow-delay="0.5s">
                        <div className='box'>
                            <i className="fa-solid fa-graduation-cap icon"></i>
                            <div className='text'>
                                <h4>230</h4>
                                <h4>Students</h4>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" lg='3' className='wow fadeInUpBig' data-wow-delay="0.7s">
                        <div className='box'>
                            <i className="fa-solid fa-certificate icon"></i>
                            <div className='text'>
                                <h4>15</h4>
                                <h4>Courses</h4>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default MiniDashboard;