import { SET_USER_CART } from "./types";


const initialState = {
  cartCount: 1,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_CART:
      return { ...state, cartCount: payload };

    default:
      return state;
  }
};

export default  cartReducer
