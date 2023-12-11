import { Dispatch } from "react";

export interface Product {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    release?: string;
    tail: string;
    type: string;
    id?: number;
    price: number;
}

export interface Release {
    au: string;
    eu: string;
    jp: string;
    na: string;
}

export interface CartProduct {
    id: number;
    name: string;
    image: string;
    quantity: number;
    price: number;
}

export interface CartContextType {
    state: CartState,
    dispatch: Dispatch<CartAction>
}


export interface CartState {
    cartItems: CartProduct[]
}

export interface CartAction {
    type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
    payload: CartProduct
}