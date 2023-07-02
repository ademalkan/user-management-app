import { configureStore } from '@reduxjs/toolkit';

import { reducer as authReducer } from './auth-store'
import { reducer as userReducer } from './user-store'
import { reducer as siteSettingsReducer } from './site-settings-store'


export function createStore(preloadedState = {}) {
    const store = configureStore({
        reducer: {
            auth: authReducer,
            users: userReducer,
            siteSettings: siteSettingsReducer
        },
        preloadedState
    })
    return store
}

export const store = createStore()