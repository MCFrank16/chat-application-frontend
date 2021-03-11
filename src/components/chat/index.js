import { useState } from 'react';


import Header from './header';
import Conversation from './conversations';
import NewConversation from './new-conversation';
import Online from './online-users';
import ChatMessages from './chat-messages';
import image from '../../assets/check-this.png';

const Chatbox = () => {

    const [change, setChange] = useState(false);

    return (
        <div className="chat">
            <Header />
            <div className="chat-container">
                <div className="search-container">
                    <p>{!change ? 'Conversations' : 'Online Users'}</p>
                </div>
                {!change ? <Conversation /> : <Online />}
                <NewConversation  change={change} setChange={setChange} />
                {/* <ChatMessages /> */}
                {/* <div className="chat-form">
                    <input id="msg" type="text" placeholder="Type a message" required autoComplete="off"/>
                    <i className="fas fa-paper-plane" />
                </div> */}

            <div className="image-container">
                <img className="image" src={image} alt="start conversation" />
            </div>
            </div>

        </div> 
    )
}

export default Chatbox;
