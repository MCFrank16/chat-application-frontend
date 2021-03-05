import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';

import useToken from '../useToken';


const LogoutUser = async (token) => {
    try {
        const result = await axios.get('/logout', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return error.response.status;
    }
    
}

const Header = () => {
    const { deleteToken, token } = useToken();
    const handleClick = async (e) => {
        e.preventDefault();
        const data = await LogoutUser(token);
        if (data === 500) {
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
