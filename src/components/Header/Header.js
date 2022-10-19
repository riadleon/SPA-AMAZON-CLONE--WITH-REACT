import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                <span> {user?.email} </span>
            </div>
        </nav>
    );
};

export default Header;