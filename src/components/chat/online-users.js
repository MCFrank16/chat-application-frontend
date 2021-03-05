import axios from '../../axios';
import makeInitials from '../../makeInitials';
import useToken from '../useToken';

const OnlineUsers = ({ users }) => {
    const { token } = useToken();

    const startConvo = async (id) => {
        await axios.post('/create/conversation', {
            secondID: id,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    return (
        <div className="conversation-list">
            {users.map((user) => {
                return (
                    <div className="conversation" key={user.id} onClick={() => startConvo(user.id)}>
                        <span className="initial">{makeInitials(`${user.firstname} ${user.lastname}`)}</span>
                        <div className="title-text">{user.username}</div>
                        <div className="conversation-message">{`${user.firstname} ${user.lastname}`}</div>
                    </div>
                )

            })}
        </div>
    )
}

export default OnlineUsers;
