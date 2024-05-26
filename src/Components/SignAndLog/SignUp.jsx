/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from '../Navigation/NavBar'
import { Link } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <div className="container sign-up-page">
                <div className="row">

                    <div className="col-md-6 sign-up text-center">
                        <div>
                            <h2 className="fw-bold text-primary animate__animated animate__rollIn">Welcome to our largest community</h2>
                            <h6 className="fw-bold animate__animated animate__rollIn">let's learn something new today!</h6>
                        </div>
                        <img src="./images/login/log-in.svg" className="img-fluid animate__animated animate__rollIn" alt="..." />
                    </div>
                    {/* start form  */}
                    <div className="col-md-6 m-auto animate__animated animate__zoomInDown signup-inputs p-5">
                        <h2 className="text-primary fw-bold">Sign up for your <br />account!</h2>
                        <h6 className='fw-bold'>Nice to see you! Please Sign up with your account.</h6>

                        <form action="" method="" className='mt-4 signup-form'>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label className="text-primary">userName *</label>
                                <input type="text" name='username' className="form-control" placeholder="your name" required />
                                <i className="fa-solid fa-user input-icon text-muted"></i>
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label className="text-primary">E-mail *</label>
                                <input type="email" name='email' className="form-control" placeholder="E-mail" required />
                                <i className="fa-solid fa-envelope input-icon text-muted"></i>
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label className="text-primary">Password *</label>
                                <input type="password" name='pass' className="form-control" placeholder="**********" required />
                                <i className="fa-solid fa-lock input-icon text-muted"></i>
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label className="text-primary">Confirm Password *</label>
                                <input type="password" name='confirmpass' className="form-control" placeholder="**********" required />
                                <i className="fa-solid fa-lock input-icon text-muted"></i>
                            </div>

                            <div className="form-check my-4">
                                <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label">
                                    By signing up, you agree to the terms of service
                                </label>
                            </div>

                            <input className="btn btn-primary btn-block" type="submit" value="sign up" />

                            {/* start sign-up with  */}
                            <div className="row">
                                <div className="position-relative my-4">
                                    <hr />
                                    <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
                                </div>
                                {/* <!-- Social btn --> */}
                                <div className="col-xxl-6 d-grid">
                                    <a href="#" className="btn btn-primary btn-block mb-2 signup-with"><i className="fab fa-fw fa-google text-white me-2"></i>Signup with Google</a>
                                </div>
                                {/* <!-- Social btn --> */}
                                <div className="col-xxl-6 d-grid">
                                    <a href="#" className="btn btn-primary btn-block signup-with-facebook"><i className="fab fa-fw fa-facebook-f me-2"></i>Signup with Facebook</a>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <span className='text-muted'>Already have an account?<Link to="/login"> Sign in here</Link></span>
                            </div>
                            {/*End signup with  */}
                        </form>
                    </div>
                    {/* End form  */}

                </div>
            </div>
            <ScrollToTop smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
        </div>
    )
}

export default SignUp