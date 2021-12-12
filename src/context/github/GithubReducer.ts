const githubReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
