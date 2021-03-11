import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    conversations: [],
    status: 'idle',
    error: null
}

export const fetchConversations = createAsyncThunk('conversations/fetchConversations', async (token) => {
    try {
        const response = await fetch('/all/conversations', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    
        const { conversations } = await response.json();

        return conversations;
        
    } catch (error) {
        console.log(error);
        return error;
    }
})

const conversationSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchConversations.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchConversations.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.conversations = state.conversations.concat(action.payload)
        },
        [fetchConversations.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const selectAllConversations = state => state.conversations.conversations;
export const selectConversationById = (state, convoId) => 
state.conversations.conversations.find(convo => convo.convoid === convoId);

export default conversationSlice.reducer;
