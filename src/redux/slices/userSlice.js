import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
    "user/getUser",
    async (token) => {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        )
        return await response.json()
    }
)

const initialState = {
    user: {},
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUsername: (state, action) => {
            state.user.body.userName = action.payload
        },
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = false
            })
            .addCase(getUser.rejected, (state) => {
                state.error = "Erreur récupération des infos utilisateur"
                state.loading = false
            })
    }
})

export const { changeUsername, reset } = userSlice.actions
export default userSlice.reducer