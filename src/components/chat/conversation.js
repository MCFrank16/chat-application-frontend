import { useState, useEffect } from 'react';
import makeInitials from '../../makeInitials';
import ChatTitle from './chat-title';


const Conversation = ({ conversations, defaultActive }) => {
    const [active, setActive] = useState('');
    
    useEffect(() =>{
        const checkActive = () => {
            if (active === '') setActive(defaultActive)
        }

        checkActive();
    });

    console.debug(conversations);

    return (
        <>
            <div className="conversation-list">
                
                {conversations.map(({ convoid, second_participant, last_message, createdat }) => {
                    return (
                        <div className= {active === convoid ? 'conversation active' : 'conversation' } key={convoid} onClick={() => setActive(convoid)}>
                            <span className="initial">{makeInitials(second_participant)}</span>
                            <div className="title-text">{second_participant}</div>
                            <div className="created-date">{createdat}</div>
                            <div className="conversation-message">{last_message}</div>
                        </div>
                    )
                })}
            </div>
            <ChatTitle keyActive={active} />
        </>
    )
}

export default Conversation;
