import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    onlineUsers: [],
    status: 'idle',
    error: null
}

export const fetchOnlineUsers = createAsyncThunk('onlineUsers/fetchOnlineUsers', async (token) => {
    try {
        const response = await fetch('/online/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    
        const  { rows }  = await response.json();

        return rows;
        
    } catch (error) {
        console.log(error);
    }
})


const onlineUsersSlice = createSlice({
    name: 'online users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOnlineUsers.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchOnlineUsers.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.onlineUsers = state.onlineUsers.concat(action.payload)
        },
        [fetchOnlineUsers.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const selectAllOnlineUsers = state => state.onlineUsers.onlineUsers;

export default onlineUsersSlice.reducer;
