import React from 'react';

const ChatForm = () => {
    return (
        <div className="chat-form">
            <input id="msg" type="text" placeholder="Type a message" required autoComplete="off"/>
            <i className="fas fa-paper-plane" />
        </div>
    )
}

export default ChatForm;
