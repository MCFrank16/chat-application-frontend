import { useState, useEffect } from 'react';
import axios from '../../axios';

const ChatTitle = ({ keyActive }) => {
    const [Details, setDetails] = useState('');

    useEffect(() => {
        const getUserDetails = async () => {
            await axios.get('/get/details', {
                params: {
                    userID: keyActive
                }
            })
        }
        getUserDetails();
    })
    return (
        <div className="chat-title">
            <span> {keyActive}</span>
            <i className="fas fa-trash" aria-hidden="true"></i>
            <span className = "status"> online </span>
        </div>
    )
}

export default ChatTitle;
