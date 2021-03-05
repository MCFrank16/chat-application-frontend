import { useState, useEffect } from 'react';

import Header from './header';
import Conversation from './conversation';
import NewConversation from './new-conversation';
import Online from './online-users';

import useToken from '../useToken';
import axios from '../../axios';

const Chatbox = () => {
    const { token } = useToken();
    const [change, setChange] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [defaultActive, setDefault] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            const result = await axios.get('/all/conversations', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setDefault(result.data.conversations[0].convoid)
            setConversations(result.data.conversations);
        }

        const getOnlineUsers = async () => {
            const result = await axios.get('/online/users', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setUsers(result.data.rows);
        }
        getOnlineUsers();
        getConversations();

    }, [token]);

    return (
        <div className="chat">
            <Header />
            <div className="chat-container">
                <div className="search-container">
                    <p>{!change ? 'Conversations' : 'Online Users'}</p>
                </div>
                {!change ? <Conversation conversations={conversations} defaultActive={defaultActive} /> : <Online users={users} />}
                <NewConversation change={change} setChange={setChange} />
                <div className="chat-message-list">

                    <div className="message-row other-message">
                        <div className="message-text">Yeah I think that was a perfect plan otherwise we will still be there up until now.</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                    <div className="message-row you-message">
                        <div className="message-text">Ok Then</div>
                        <div className="message-time">Apr 16</div>
                    </div>


                    <div className="message-row other-message">
                        <div className="message-text">so what is the conclusion</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                    <div className="message-row you-message">
                        <div className="message-text">Ok Then</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                    <div className="message-row other-message">
                        <div className="message-text">so what is the conclusion</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                    <div className="message-row you-message">
                        <div className="message-text">let us link up on Monday and discuss it</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                </div>
                <div className="chat-form">
                    <input id="msg" type="text" placeholder="Type a message" required autoComplete="off"/>
                    <i className="fas fa-paper-plane" />
                </div>
            </div>

        </div> 
    )
}

export default Chatbox;
