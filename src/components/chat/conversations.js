import { useState, useEffect } from 'react';

import useToken from '../useToken';
import ChatTitle from './chat-title';
import ChatMessage from './chat-messages';
import ChatForm from './chat-form';
import Empty from './empty-message';


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
        if (conversations.length > 0) setActive(conversations[0])
    }, [conversationStatus, dispatch, token, conversations, active])


    // useEffect(() => {
        
    //     // const getUserDetails = async () => {
    //     //     try {
    //     //         const { data: { user } } = await axios.get('/get/details', {
    //     //             params: {
    //     //                 username: active.second_participant
    //     //             }
    //     //         });
    //     //         console.log(user)
    //     //     } catch (error) {
    //     //         console.log(error)
    //     //     }
    //     // }

    //     // getUserDetails()
    // }, [])

    const handleActive = (convoid) => {
        // console.log(convoid);
        // setActive(convoid);
    }

    return (
        <>
        {
            conversations.length === 0 ?
                <>
                    <div className="conversation-list">
                        <div className="message">
                            you have no conversations yet. 
                            Don't Fret,
                            click on the green button below
                            and check all users who are online to start a conversation.
                        </div>
                    </div>
                    <Empty />
                </>
            :
            <>
                <div className="conversation-list">
                    {
                        conversations.map(({ convoid, second_participant, last_message, createdat }) => {
                            return (
                                <div className= {active !== undefined && active.convoid === convoid ? 'conversation active' : 'conversation' } key={convoid} onClick={handleActive(convoid)}>
                                    <span className="initial">{second_participant[0]}</span>
                                    <div className="title-text">{second_participant}</div>
                                    <div className="created-date">{createdat}</div>
                                    <div className="conversation-message">{last_message}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <ChatTitle active={active} />
                <ChatMessage />
                <ChatForm />
            </>
        }
        </>
    )
}

export default Conversation;
