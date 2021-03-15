import { useState } from 'react';

import Header from './header';
import Conversation from './conversations';
import NewConversation from './new-conversation';
import Online from './online-users';

const Chatbox = () => {
    const [change, setChange] = useState(false);

    return (
        <div className="chat">
            <Header />
            <div className="chat-container">
                <div className="search-container">
                    <p>{!change ? 'Conversations' : 'Online Users'}</p>
                </div>
                {!change ? <Conversation /> : <Online change={change} setChange={setChange} />}
                <NewConversation  change={change} setChange={setChange} />

            </div>

        </div> 
    )
}

export default Chatbox;
