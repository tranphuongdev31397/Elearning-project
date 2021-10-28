import { FETCH_ALL_USER_FAIL, FETCH_ALL_USER_REQUEST, FETCH_ALL_USER_SUCCESS } from "./types"

const initialState = {
    userList : null,
    loading: true,
    error:null
}

const userManagementReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_ALL_USER_REQUEST:
        return { ...state,loading:true, error:null }
    case FETCH_ALL_USER_SUCCESS:
        return { ...state,loading:false, error:null, userList: payload }
    case FETCH_ALL_USER_FAIL:
        return { ...state,loading:false, error:payload }

    default:
        return state
    }
}
export default userManagementReducer