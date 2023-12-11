import { CartAction, CartState } from "../interface";

export const initialState: CartState = {
    cartItems: [],

};


export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const { id } = action.payload;

            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        }

        case "REMOVE_FROM_CART": {
            const { id: removeItemId } = action.payload;

            const itemToRevove = state.cartItems.find(item => item.id === removeItemId);
            if (itemToRevove) {
                if (itemToRevove.quantity === 1) {
                    return {
                        ...state,
                        cartItems: state.cartItems.filter(item => item.id !== removeItemId)
                    }
                } else {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(item => item.id === removeItemId ? { ...itemToRevove, quantity: itemToRevove.quantity - 1 } : item)
                    }
                }
            } else {
                return state;
            }
        }

        case "CLEAR_CART": {
            return {
                ...state,
                cartItems: []
            }
        }

        default:
            return state;
    }
}