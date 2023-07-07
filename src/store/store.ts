import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import toggleSidebarReducer from './features/sidebarToggle/toggleSidebar';


export const store = configureStore({
    reducer: {
        cartReducer,
        toggleSidebarReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<String>>