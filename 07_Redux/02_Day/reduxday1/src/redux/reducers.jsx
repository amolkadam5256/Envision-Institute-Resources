const initialState = {
    count: 0,
  };
  
  // Define action types
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
  
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1, // Fix: Decrement instead of increment
        };
  
      default:
        return state;
    }
  };
  
  export default counterReducer;
  