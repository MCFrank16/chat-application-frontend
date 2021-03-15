import { configureStore } from '@reduxjs/toolkit';

import conversationReducer from '../redux/slices/conversationSlice';
import onlineUsersReducer from '../redux/slices/onlineUsersSlice';
import activeUser from '../redux/slices/activeUserSlice';

export default configureStore({
    reducer: {
        conversations: conversationReducer,
        onlineUsers: onlineUsersReducer,
        activeUser: activeUser
    }
})
