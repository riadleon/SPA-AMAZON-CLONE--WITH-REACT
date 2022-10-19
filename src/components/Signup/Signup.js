import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div>
            <div className='form-container'>
                <h2 className='form-tittle'>Sign up</h2>
                <form >
                    <div className="form-control">
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor='confirmpass'>Confirm Password</label>
                        <input type="confirmpass" name="confirmpass" id="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign up" />
                </form>
                <p>Already Have an Account?<Link to='/login'> <small>Login</small> </Link> </p>
            </div>
        </div>
    );
};

export default Signup;