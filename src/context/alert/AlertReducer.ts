const alertReducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload;
    case 'REMOVE_ALEERT':
      return null;
    default:
      return state;
  }
};

export default alertReducer;
