import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useToken from '../useToken';

import { selectAllOnlineUsers, fetchOnlineUsers } from '../../redux/slices/onlineUsersSlice';


const OnlineUsers = () => {
    const { token } = useToken();
    const onlineUserStateStatus = useSelector(state => state.onlineUsers.status);
    const users = useSelector(selectAllOnlineUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        if(onlineUserStateStatus === 'idle'){
            dispatch(fetchOnlineUsers(token))
        }
    })

    const startConvo = async (username) => {
        const response = await fetch('/create/conversation', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            method: 'POST',
            body: JSON.stringify({ secondName: username })
        });

        const resp = await response.json();
        console.log(resp);
    }

    return (
        <div className="conversation-list">
            {users.map((user) => {
                return (
                    <div className="conversation" key={user.id} onClick={() => startConvo(user.username)}>
                        <span className="initial">{user.username[0]}</span>
                        <div className="title-text">{user.username}</div>
                        <div className="conversation-message">{`${user.firstname} ${user.lastname}`}</div>
                    </div>
                )

            })}
        </div>
    )
}

export default OnlineUsers;
