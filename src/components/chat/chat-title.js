import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../axios';

const ChatTitle = () => {
    const [Details, setDetails] = useState('');
    
    const username = 'MCFrank16'

    useEffect(() => {
        // const getUserDetails = async () => {
        //     try {
        //         const {data: { user }} = await axios.get('/get/details', {
        //             params: {
        //                 username
        //             }
        //         });
        //         setDetails(user)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }

        // getUserDetails()
    }, [username])

    return (
        <div className="chat-title">
            <span>{Details.username}</span>
            <i className="fas fa-trash" aria-hidden="true"></i>
            <span className = "status">{Details.status}</span>
        </div>
    )
}

export default ChatTitle;
