const initialState = {
  user: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  data: {},
  error: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "LOGIN_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    case "LOGIN_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        isRejected: false,
        user: action.payload.data.data,
      };

    case "LOGIN_REJECTED":
      return {
        ...state,
        isPending: false,
        isFulfilled: false,
        isRejected: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
