import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Header = () => {
  const {user, logOut} = useAuth();
    return (
      <div className="header">
        <Link to="/home">Home</Link>
        <Link to="/shipping">Shipping</Link>
        <Link to="/PlaceOrder">PlaceOrder</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <span> {user.displayName} </span>
        {user?.email && <button onClick={logOut}>Log Out</button>}
      </div>
    );
};

export default Header;