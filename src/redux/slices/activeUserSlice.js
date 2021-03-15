import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    activateUser: {},
    status: 'idle',
    error: null
}

export const fetchActiveUser = createAsyncThunk('users/fetchActiveUser', async (username) => {
    try {
        const response = await fetch(`/get/details/?username=${username}`, {
            method: 'GET'
        })
    
        const {data: { user } } = await response.json();
        console.log(user)

        return user;
        
    } catch (error) {
        console.log(error);
        return error;
    }
})

const activateUserSlice = createSlice({
    name: 'activated user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchActiveUser.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchActiveUser.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.activateUser = state.activateUser.concat(action.payload)
        },
        [fetchActiveUser.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

// export const selectAllConversations = state => state.conversations.conversations;
// export const selectConversationById = (state, convoId) => 
// state.conversations.conversations.find(convo => convo.convoid === convoId);

export default activateUserSlice.reducer;