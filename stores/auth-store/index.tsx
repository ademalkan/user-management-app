import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean;
}

const initialState: AuthState = {
    isAuth: false,
};

export const { reducer, actions } = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        },
    },
});

