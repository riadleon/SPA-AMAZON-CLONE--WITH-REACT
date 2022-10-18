import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-tittle'>Login</h2>
            <form >
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New here? No problem <Link to='/signup'> <small>Create a new Account</small> </Link> </p>
        </div>
    );
};

export default Login;