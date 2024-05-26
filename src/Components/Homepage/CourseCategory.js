import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const CourseCategory = () => {
    const courses = [
        {
            id: "1",
            name: "ai technology",
            img: "images/course/ai-technology.jpg",
            alt: "ai-technology"
        },
        {
            id: "2",
            name: "algorism",
            img: "images/course/algorism.jpg",
            alt: "algorism"
        },
        {
            id: "3",
            name: "data science",
            img: "images/course/data-science.jpg",
            alt: "data science"
        },
        {
            id: "4",
            name: "embeded system",
            img: "images/course/embeded-system.jpg",
            alt: "embeded system"
        },
        {
            id: "5",
            name: "graphic design",
            img: "images/course/graphic-design.jpg",
            alt: 'graphic design'
        },
        {
            id: "6",
            name: "information technology",
            img: "images/course/information-technology.jpg",
            alt: "information technology"
        },
        {
            id: "7",
            name: "it software",
            img: "images/course/it_software.jpg",
            alt: "it_software"
        },
        {
            id: "8",
            name: "mobile development",
            img: "images/course/mobile-development.jpg",
            alt: "mobile-development"
        },
        {
            id: "9",
            name: "website development",
            img: "images/course/website-development.jpg",
            alt: "website-development"
        },
        {
            id: "10",
            name: "photoshop",
            img: "images/course/ps.png",
            alt: "photoshop"
        }

    ];
    return (
        <>
            <Container fluid className='course-category'>
                <Row>
                    <Col md={12}>

                        <div className='course-title d-flex justify-content-between align-items-center mb-5 wow fadeInUp'>
                            <h6 className='text-primary main-title mb-3'>See what you can learn with kian academy</h6>
                            <div class="btn-glow">
                                <div class="btn"><Link to="/courses">view all</Link></div>
                            </div>
                        </div>

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={5}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="course-items"
                        >
                            {courses.map((course, id) => (
                                <SwiperSlide key={id} className='course-box wow fadeInUp'animation-duration="1.2s" data-wow-delay="0.2s">
                                    <img src={course.img} alt={course.alt} />
                                    <p className='text-primary fw-bold py-2 px-1'>{course.name}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default CourseCategory




