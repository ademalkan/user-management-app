import { createNewUser, deleteUser, fetchUsersAsync, fetchUsersSearch, updateUser,UserStoreState } from "@/services/users";
import { createSlice } from "@reduxjs/toolkit";



const initialState: UserStoreState = {
    userData: [],
    deletedUsers: [],
    addedUsers: [],
    updatedUsers: [],
    loading: false,
    error: false,
};


export const { reducer, actions } = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch Users
        builder.addCase(fetchUsersAsync.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchUsersAsync.rejected, (state) => {
            state.error = true;
            state.loading = false;
        });
        // Users Filter
        builder.addCase(fetchUsersSearch.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchUsersSearch.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchUsersSearch.rejected, (state) => {
            state.error = true;
            state.loading = false;
        });
        // User Delete
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            const isDeleted = action.payload.isDeleted;
            const deletedUserId = action.payload.id;
            // Endpoint Users
            if (isDeleted && deletedUserId <= 100) {
                state.deletedUsers = [...state.deletedUsers, deletedUserId];
            }
            // New Added Users
            if (deletedUserId > 100) {
                state.deletedUsers = [...state.deletedUsers, deletedUserId];
            }
            // Endpoint Users Deleted Check
            if (!isDeleted && deletedUserId <= 100) {
                state.error = true;
            }
            state.loading = false;
        });
        builder.addCase(deleteUser.rejected, (state) => {
            state.error = true;
            state.loading = false;
        });
        // Create New User
        builder.addCase(createNewUser.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(createNewUser.fulfilled, (state, action) => {
            state.addedUsers = [action.payload, ...state.addedUsers];
            state.loading = false;
        });
        builder.addCase(createNewUser.rejected, (state) => {
            state.error = true;
            state.loading = false;
        });
        // Create New User
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.updatedUsers = [...state.updatedUsers, action.payload];
            state.loading = false;
        });

        builder.addCase(updateUser.rejected, (state) => {
            state.error = true;
            state.loading = false;
        });
    },
});
