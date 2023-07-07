import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@src/store/store";
// import 

const initialState = {
    isVisible: false,
}

const toggleSidebarSlice = createSlice({
    name: 'toggleSidebar',
    initialState: initialState,
    reducers: {
        openSidebar: (state) => { state.isVisible = true},
        closeSidebar(state) { state.isVisible = false},
    },
});

export const { openSidebar, closeSidebar } = toggleSidebarSlice.actions;
export const toggleSelector = (state: RootState) => state.toggleSidebarReducer;
export default toggleSidebarSlice.reducer;