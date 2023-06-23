import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@src/store/store";
// import 

export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    totalPrice: number;
    quantity: number;
}

interface InitialState {
    items: Product[],
    totalQuantity: number;
}

const initialState: InitialState = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    imageUrl: newItem.imageUrl,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem) {
                if (existingItem?.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                }
            }
        }
    },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cartReducer;
export default cartSlice.reducer;