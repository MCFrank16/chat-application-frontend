import { useState, useEffect } from 'react';

import Header from './header';
import Conversation from './conversation';
import NewConversation from './new-conversation';
import Online from './online-users';
import io from 'socket.io-client';

let socket;

const Chatbox = () => {
    const [change, setChange] = useState(false);
    const endpoint = 'localhost:9000';

    // useEffect(() => {
    //     socket = io(endpoint);
    //     console.log(socket);
    // }, [endpoint])

    return (
        <div className="chat">
            <Header />
            <div className="chat-container">
                <div className="search-container">
                    <p>{!change ? 'Conversations' : 'Online Users'}</p>
                </div>
                {!change ? <Conversation /> : <Online />}
                <NewConversation change={change} setChange={setChange} />
                <div className="chat-title">
                    <span> Frank Mutabazi</span>
                    <i class="fas fa-trash" aria-hidden="true"></i>
                </div>
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
                    <input id="msg" type="text" placeholder="Type a message" required autocomplete="off"/>
                    <i class="fas fa-paper-plane" />
                </div>
            </div>

        </div> 
    )
}

export default Chatbox;
