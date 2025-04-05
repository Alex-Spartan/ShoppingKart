import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find(
                (product) =>
                    product._id === action.payload._id &&
                    product.size === action.payload.size &&
                    product.color === action.payload.color
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push(action.payload);
                state.quantity += 1;
            }

            state.total += action.payload.price * action.payload.quantity;
        },
        incrementQuantity: (state, action) => {
            const product = state.products.find((item) => item._id === action.payload);
            if (product) {
                product.quantity += 1;
                state.total += product.price;
            }
        },
        decrementQuantity: (state, action) => {
            const product = state.products.find((item) => item._id === action.payload);
            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                    state.total -= product.price;
                } else {
                    state.products = state.products.filter((item) => item._id !== action.payload);
                    state.quantity -= 1;
                    state.total -= product.price;
                }
            }
        },
    }
})

export const { addProduct, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
