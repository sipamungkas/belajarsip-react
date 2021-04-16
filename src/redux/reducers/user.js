const initialState = {
  user: {
    id: 1,
    name: "ragil",
    username: "asd",
    role_id: 2,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoicmFnaWwiLCJyb2xlX2lkIjoyLCJpYXQiOjE2MTczNzI0OTIsImV4cCI6MTYxNzQ1ODg5Mn0.bDTYdgpKyaTocwwkFGK3vJAKj6UaHNBOOkGKKSptfVw",
  },
  isPending: false,
  isFullfiled: false,
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
        isFullfiled: false,
        isRejected: false,
      };

    case "LOGIN_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFullfiled: true,
        isRejected: false,
        data: action.payload,
      };

    case "LOGIN_REJECTED":
      return {
        ...state,
        isPending: false,
        isFullfiled: false,
        isRejected: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
