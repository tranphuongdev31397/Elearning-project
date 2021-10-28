import {SET_USER_CART} from './types'

export const actSetUserCart = (userCart) => ({
    type: SET_USER_CART,
    payload: userCart
})