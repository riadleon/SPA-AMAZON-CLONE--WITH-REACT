import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css'

const Signup = () => {
    const [error, setError] = useState(null)
    const { createUser, signInWithGoogle } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const comfirm = form.confirmpass.value;
        console.log(email, password, comfirm);

        if (password.length < 6) {
            setError('Password should be 6 character or more')
            return;
        }

        if (password !== comfirm) {
            setError('Your Password is incorrect');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('Registered user:', user);
            })
            .catch(error => {
                console.error('error:', error);
            })

    }


    return (
        <div>
            <div className='form-container'>
                <h2 className='form-tittle'>Sign up</h2>
                <form onSubmit={handleSubmit}>
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
                        <input type="password" name="confirmpass" id="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign up" />
                </form>
                <p>Already Have an Account?<Link to='/login'> <small>Login</small> </Link> </p>
                <p className='text-error'> {error} </p>
            </div>
        </div>
    );
};

export default Signup;