import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const item = action.payload;
      const existItem = state.cart.cartItems.find(
        (x) => x._id === item._id
      );
      if (existItem) {
        return {
          ...state,
          cart: {
            ...state.cart,
            cartItems: state.cart.cartItems.map((x) =>
              x._id === existItem._id ? item : x
            ),
          },
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            cartItems: [...state.cart.cartItems, item],
          },
        };
      }
    case 'CART_REMOVE_ITEM':
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: state.cart.cartItems.filter(
            (x) => x._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>{props.children}</Store.Provider>
  );
}
