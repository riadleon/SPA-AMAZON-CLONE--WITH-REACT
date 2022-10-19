import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>Secret About Us</h2>
            <span> {user?.email} </span>
        </div>
    );
};

export default About;