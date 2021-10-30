import {
  FETCH_CATEGORY_FAIL,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from "./types";

const initialState = {
  categoryList: [],
  loading: true,
  error: null,
};

 const categoryListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORY_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CATEGORY_SUCCESS:
      return { ...state, categoryList: payload, loading: false, error: null };
    case FETCH_CATEGORY_FAIL:
      return { ...state,loading: false, error: payload  };

    default:
      return state;
  }
};
export default categoryListReducer
