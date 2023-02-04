import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-css'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/grandpa'>Grandpa</Link>
            <Link to='/orders'>Orders</Link>
        </div>
    );
};

export default Header;