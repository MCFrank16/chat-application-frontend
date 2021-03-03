import { useState } from 'react';

const useToken = () => {
    const getToken = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        return token;
    }
    
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken)
    };

    const deleteToken = () => localStorage.removeItem('token');

    return {
        setToken: saveToken,
        deleteToken,
        token
    }
}

export default useToken;
