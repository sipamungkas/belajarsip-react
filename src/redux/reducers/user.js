const initialState = {
  user: {
    id: 1,
    name: "ragil",
    username: "asd",
    role_id: 2,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoicmFnaWwiLCJyb2xlX2lkIjoyLCJpYXQiOjE2MTczNzI0OTIsImV4cCI6MTYxNzQ1ODg5Mn0.bDTYdgpKyaTocwwkFGK3vJAKj6UaHNBOOkGKKSptfVw",
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
