import React from 'react'
import Banner from './Banner'
import MiniDashboard from './MiniDashboard'
import InstructorHome from './InstructorHome'
import Features from './Features'
import ScrollToTop from 'react-scroll-to-top';
import BecomeInstructor from './BecomeInstructor'
import CourseCategory from './CourseCategory'
import Footer from '../Navigation/Footer'
import Discount from './Discount'

function Allhomepage() {
  return (
    <div>
      <Banner />
      <Features />
      <CourseCategory />
      <InstructorHome />
      <MiniDashboard />
      <Discount />
      <BecomeInstructor />
      <Footer />
      <ScrollToTop smooth
        color='#fff'
        style={{ backgroundColor: '#372B73' }}
        className='animate__animated animate__flash animate__infinite	infinite animate__slower'
      />

    </div>
  )
}
export default Allhomepage