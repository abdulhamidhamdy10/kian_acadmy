import React from 'react'
import Navbar from '../Navigation/NavBar'
import Footer from '../Navigation/Footer'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'
import { CiClock2 } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

const Courses = () => {
    const courses = [
        {
            "id": "1",
            "name": 'web development',
            "img": "/images/Courses/course-1.jpg",
            "description": "Some Quick Example Text To Build On The Card Title And Make Up",
            "video": "40",
            "hours": "150",
            "link": "/coursesDetails",
        },
        {
            "id": "2",
            "name": 'mobile development',
            "img": "/images/Courses/mobile.jpg",
            "description": "Some Quick Example Text To Build On The Card Title And Make Up",
            "video": "30",
            "hours": "100",
            "link": "/coursesDetails",
        },
        {
            "id": "3",
            "name": 'graphics',
            "img": "/images/Courses/graphics.jpeg",
            "description": "Some Quick Example Text To Build On The Card Title And Make Up",
            "video": "60",
            "hours": "70",
            "link": "/coursesDetails",
        },
        {
            "id": "4",
            "name": 'IT & Software',
            "img": "/images/Courses/software.webp",
            "description": "Some Quick Example Text To Build On The Card Title And Make Up",
            "video": "50",
            "hours": "100",
            "link": "/coursesDetails",
        },
        {
            "id": "5",
            "name": 'Data Science',
            "img": "/images/Courses/course-1.jpg",
            "description": "Some Quick Example Text To Build On The Card Title And Make Up",
            "video": "40",
            "hours": "120",
            "link": "/coursesDetails",
        },
        {
            "id": "6",
            "name": 'Artificial Intelligence',
            "img": "/images/Courses/ai.jpeg",
            "description": "Some Quick Example Text To Build On The Card Title And Make Up",
            "video": "45",
            "hours": "5",
            "link": "/coursesDetails",
        },
        {
            "id": "7",
            "name": 'Photoshop Course',
            "img": "/images/Courses/photoshop.webp",
            "description": "Some Quick Example Text To Build On The Card Title And Make Up",
            "video": "30",
            "hours": "100",
            "link": "/coursesDetails",
        },
        {
            "id": "8",
            "name": 'Illustrator Course',
            "img": "/images/Courses/course-1.jpg",
            "description": "Some Quick Example Text To Build On The Card Title And Make Up",
            "video": "20",
            "hours": "70",
            "link": "/coursesDetails",
        },

    ];
    return (
        <div>
            <Navbar />
            <div className="container all-courses">
                <div className="row">
                    {/* head Banar  */}
                    <div className='d-flex justify-content-between my-5 title-all'>

                        <div className='m-auto position-relative'>
                            <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
                            <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Our courses</h2>
                            <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                                Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                            </p>
                        </div>

                        <img className='img-fluid wow fadeInDown' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="" />
                    </div>

                    {/* start Course Card */}
                    {courses.map((course) => (
                        <div key={course.id} className="col-md-6 col-lg-4 rounded-2 mb-4 wow fadeInUp">
                            <div className="card">
                                <img src={course.img} style={{ height: "230px" }} className="img-fluid rounded-2 " alt="Courses" />
                                <img className="position-absolute w-25 rounded-circle p-3" src="./images/logo.jpeg" alt="logo" />
                                {/* Start course details */}
                                <div className="card-body ">
                                    <h5 className="card-title text-primary ">{course.name}</h5>
                                    <p className="text-muted">{course.description}</p>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex">
                                        <MdOutlineSlowMotionVideo className="text-danger" size={30} />
                                        <p className="ml-1 mt-1">{course.video} vidoes</p>
                                    </div>
                                    <div className="d-flex">
                                        <CiClock2 className="mt-1 text-danger" size={30} />
                                        <p className="ml-1 mt-1">{course.hours}+Hours</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center px-4 pb-3">
                                    <Link to={course.link} className="text-primary fw-bold text-decoration-none">read more</Link>
                                    <i className="fas fa-arrow-left text-primary fw-bold animate__animated animate__headShake animate__infinite"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Course Card */}

                </div>
            </div>
            <ScrollToTop smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
            <Footer/>
        </div>
    )
}

export default Courses