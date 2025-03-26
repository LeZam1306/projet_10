import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const authUser = createAsyncThunk(
    "auth/authUser",
    async (data) => {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/login", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )
        return await response.json()
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: {},
        loading: false,
        error: null
    },
    reducers: {
        logout: (state) => {
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.loading = true
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.token = action.payload
                state.loading = false
            })
            .addCase(authUser.rejected, (state) => {
                state.error = "Connexion rejeté"
                state.loading = false
            })
    } 
})

export const { logout } = authSlice.actions
export default authSlice.reducer