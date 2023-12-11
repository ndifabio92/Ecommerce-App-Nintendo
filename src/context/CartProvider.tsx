import { ReactNode, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer, initialState } from "./cartReducer";

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
