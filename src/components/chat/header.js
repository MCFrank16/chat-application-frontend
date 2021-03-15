import React from 'react';
import { Link } from 'react-router-dom';
import useToken from '../useToken';


const LogoutUser = async (token) => {
    try {
        const result = await fetch('/logout', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        });
        return await result.json();
    } catch (error) {
        console.log(error)
        return error;
    }
    
}

const Header = () => {
    const { deleteToken, token } = useToken();
    const handleClick = async (e) => {
        e.preventDefault();
        const { status } = await LogoutUser(token);
        if (status === 500) {
           return;
        } else {
            deleteToken();
            return window.location='/';
        }
    };

    return (
        <div className="header">
            <h1 className="logo"><i className="fas fa-comments"></i> Cata </h1>
            <Link to="#" onClick={handleClick} className="logout">Logout</Link>
        </div>
    )
}

export default Header;
