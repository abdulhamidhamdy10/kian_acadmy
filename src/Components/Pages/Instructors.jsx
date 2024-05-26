import Navbar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';
import ScrollToTop from 'react-scroll-to-top';

const Instructors = () => {
  const instrutors = [
    {
      "name": "ahmed khaled",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "backend developer",
      "img": "/images/instructors/instructors-1.webp",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "taha mohamed",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "full stack developer",
      "img": "/images/instructors/instructors-2.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "abdelhamed ali",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "full stack developer",
      "img": "/images/instructors/instructors-3.webp",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "sayed osama",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "mobile developer",
      "img": "/images/instructors/instructors-4.webp",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "mohamed hani",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "data science developer",
      "img": "/images/instructors/instructors-5.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "mahmoud allam",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "games developer",
      "img": "/images/instructors/instructors-6.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "ahmed mahmoud",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "full stack developer",
      "img": "/images/instructors/instructors-7.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "ibrahim hessien",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "garpgic designer",
      "img": "/images/instructors/instructors-8.webp",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },

  ]

  return (
    <div>
      <Navbar />
      <div className="container instrctors-page">
        <div className="row">

          <div className='d-flex justify-content-between mb-5 title-all'>

            <div className='m-auto position-relative'>
              <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
              <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Our Instructors</h2>
              <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
              </p>
            </div>

            <img className='img-fluid wow fadeInDown' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="" />
          </div>


          {instrutors.map((instructor, index) => (

            <div key={index} className='col-md-12 col-lg-6 rounded mb-4 wow fadeInUp instructors-card' data-wow-delay=".3s">
              <div className="instrctors p-3">
                <div className="col-md-12 instrctors-left d-flex">
                  <div className='col-md-12 col-lg-5 m-auto'>
                    <img className='img-fluid rounded-circle' src={instructor.img} alt="instructors" />
                  </div>

                  <div className='col-md-12 col-lg-7'>
                    <div className='instructors-caption'>
                      <h6 className='text-primary'>{instructor.name}</h6>
                      <p className='text-muted'>{instructor.description}</p>
                      <div className='d-flex flex-column instrctors-right'>
                        <h6 className='text-primary instructors-icons'>{instructor.job_title}</h6>
                        {/* instructors-icons */}
                        <div className='instructors-icons'>
                          <a href={instructor.facebook} target='_blank' rel="noreferrer"><i className='fab fa-facebook text-primary p-2'></i></a>
                          <a href={instructor.instagram} target='_blank' rel="noreferrer"><i className='fab fa-instagram text-primary p-2'></i></a>
                          <a href={instructor.twitter} target='_blank' rel="noreferrer"><i className='fab fa-twitter text-primary p-2'></i></a>
                          <a href={instructor.linkedin} target='_blank' rel="noreferrer"><i className='fab fa-linkedin text-primary p-2'></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTop smooth
        color='#fff'
        style={{ backgroundColor: '#372B73' }}
        className='animate__animated animate__flash animate__infinite	infinite animate__slower'
      />
      <Footer />
    </div>
  );
};

export default Instructors;
