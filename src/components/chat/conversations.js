import { useState, useEffect } from 'react';

import ChatTitle from './chat-title';
import ChatMessage from './chat-messages';
import ChatForm from './chat-form';
import Empty from './empty-message';
import useToken from '../useToken';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllConversations, fetchConversations } from '../../redux/slices/conversationSlice';
import { fetchActiveUser } from '../../redux/slices/activeUserSlice';

const Conversation = () => {
    const { token } = useToken();
    const dispatch = useDispatch();
    const conversations = useSelector(selectAllConversations);
    const conversationStatus = useSelector(state => state.conversations.status)
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (conversationStatus === 'idle'){
            dispatch(fetchConversations(token))
        }        
    })

    const handleActive = (index) => {
        setActive(index)
    }

    if(conversationStatus === 'loading') {
        return (
            <div className="conversation-list"> 
                <div className="message">
                    Loading....
                </div>
            </div>
        )
    }
    return (
            <>
                <div className="conversation-list">
                    {
                        conversations.length <= 0 ? 
                        <>
                          <div className="message">
                            you have no conversations yet. 
                            Don't Fret,
                            click on the green button below
                            and check all users who are online to start a conversation.
                          </div>
                          {/* <Empty /> */}
                        </>
                        :
                        conversations.map((convo, index) => {
                            return (
                                <div className= {active === index ? 'conversation active' : 'conversation' } key={convo.convoid} onClick={() => handleActive(index)}>
                                    <span className="initial">{convo.second_participant[0]}</span>
                                    <div className="title-text">{convo.second_participant}</div>
                                    <div className="created-date">{convo.createdat}</div>
                                    <div className="conversation-message">{convo.last_message}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <ChatTitle />
                <ChatMessage />  
                <ChatForm />
            </>
    )
}

export default Conversation;
