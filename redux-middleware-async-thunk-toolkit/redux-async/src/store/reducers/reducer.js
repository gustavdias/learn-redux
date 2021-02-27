// const initState = [];
// const postsReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "FETCH_POSTS":
//       return action.payload; //new state is the entire array

//     default:
//       return state;
//   }
// };

// export default postsReducer;

//* ---------------------------------- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! Loading & Error Handling
//* Make use of the Request/Success/Failure pattern to handle loading and error state
//* Separate action for Request, Success, and Failure

const initState = {
  items: [],//array of posts
  loading: false,
  error: null,
};
const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        items: [],
      };
    default:
      return state;
  }
};

export default postsReducer;
