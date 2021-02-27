const initialState = {
  count: 0,
};

export const counterReducer = (state = 0, action) => {
  //middleware (catches the Action before it hits the Reducer) as you can see in the console.log
  console.log("yeah our reducer ran", "our action type is: ", action.type);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
