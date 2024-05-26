import React from 'react'
import Navbar from '../Navigation/NavBar'

const ForgetPass = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="container forget-pass">
                    <div className="row">

                        <div className="col-md-6 sign-up text-center p-5">
                            <div>
                                <h2 className="fw-bold text-primary animate__animated animate__rollIn">Welcome to our largest community</h2>
                                <h6 className="fw-bold animate__animated animate__rollIn">let's learn something new today!</h6>
                            </div>
                            <img src="./images/login/log-in.svg" className="img-fluid animate__animated animate__rollIn" alt="..." />
                        </div>

                        {/* start form  */}
                        <div className="col-md-6 m-auto animate__animated animate__zoomInDown signup-inputs p-5">
                            <h2 className="text-primary fw-bold">Forgot Password?</h2>
                            <h6 className='fw-bold'>To receive a new password, enter your email address below.</h6>

                            <form action="" method="" className='mt-4 signup-form'>

                                <div className="form-group animate__animated animate__zoomInDown position-relative">
                                    <label className="text-primary">E-mail address *</label>
                                    <input type="email" name='email' className="form-control" placeholder="E-mail" required />
                                    <i className="fa-solid fa-envelope input-icon text-muted"></i>
                                </div>

                                <input className="btn btn-primary btn-block" type="submit" value="reset password" />

                            </form>
                        </div>
                        {/* End form  */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPass