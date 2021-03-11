import { useState, useEffect } from 'react';

import useToken from '../useToken';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllConversations, fetchConversations } from '../../redux/slices/conversationSlice';


const Conversation = () => {
    const { token } = useToken();
    const dispatch = useDispatch();
    const conversations = useSelector(selectAllConversations);
    const conversationStatus = useSelector(state => state.conversations.status)
    const [active, setActive] = useState();

    useEffect(() => {
        if (conversationStatus === 'idle'){
            dispatch(fetchConversations(token))
        }
    }, [conversationStatus, dispatch, token])

    return (
        <>
        {
            conversations.length <= 0 ? 
                <div className="conversation-list">
                    <div className="message">
                        you have no conversations yet. 
                        Don't Fret,
                        click on the green button below
                        and check all users who are online to start a conversation.
                    </div>
                </div>
            :
            <div className="conversation-list">
                {
                    conversations.map(({ convoid, second_participant, last_message, createdat }) => {
                        return (
                            <div className= {active === convoid ? 'conversation active' : 'conversation' } key={convoid} onClick={() => setActive(convoid)}>
                                <span className="initial">{second_participant[0]}</span>
                                <div className="title-text">{second_participant}</div>
                                <div className="created-date">{createdat}</div>
                                <div className="conversation-message">{last_message}</div>
                            </div>
                        )
                    })
                }
            </div>

        }
        </>
    )
}

export default Conversation;
