import { PayloadAction, createSlice } from "@reduxjs/toolkit"; 
import { RootState } from "@src/store/store";

interface initialState {
    isVisible: boolean;
}

const initialState: initialState = {
    isVisible: false,
}

const toggleSidebarSlice = createSlice({
    name: 'toggleSidebar',
    initialState: initialState,
    reducers: {
        toggleSidebar: (state) => {state.isVisible = !state.isVisible}, 
    },
});

export const { toggleSidebar} = toggleSidebarSlice.actions;
export const toggleSelector = (state: RootState) => state.toggleSidebarReducer;
export default toggleSidebarSlice.reducer;