import { configureStore } from '@reduxjs/toolkit';

import conversationReducer from '../redux/slices/conversationSlice';
import onlineUsersReducer from '../redux/slices/onlineUsersSlice';

export default configureStore({
    reducer: {
        conversations: conversationReducer,
        onlineUsers: onlineUsersReducer
    }
})
