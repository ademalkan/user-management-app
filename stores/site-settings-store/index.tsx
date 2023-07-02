import { createSlice } from "@reduxjs/toolkit";

interface SiteSettingsI {
    sidebarShow: boolean;
}

const initialState: SiteSettingsI = {
    sidebarShow: true,
};

export const { reducer, actions } = createSlice({
    name: "siteSettings",
    initialState,
    reducers: {
        sidebarToggle: (state) => {
            state.sidebarShow = !state.sidebarShow;
        },

    },
});

