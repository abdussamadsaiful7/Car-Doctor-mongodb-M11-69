import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError]=useState([]);

    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message)
            setError(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content md:flex-col lg:flex-row space-x-8">
                    <div className="text-center w-1/2">
                        <img src={logo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-xl font-bold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary bg-red-500' value="Sign Up" />
                            </div>
                            {/* <p>{error}</p> */}
                        </form>
                        <p className='text-center my-4'>Already have an account? <Link to='/login' className='text-red-500 
                    font-semibold'>Sign In</Link></p>
                    <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;