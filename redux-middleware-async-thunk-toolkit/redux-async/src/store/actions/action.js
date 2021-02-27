import Axios from "axios";

//!!! The problem without REdux-Thunk !!!!

//! Error: Actions must be plain objects. Use custom middleware for async actions.
//Why?
// Because Action Creators can only return plain JS objects with a type property. when Babel translates it to the Browser the is a case where it does not return a object
//! So you need to remove async and await
//an actionCreator has to return an action object
// export const fetchPosts = async () => {
//     //actionCreator to handle the logic of fetching the data
//     const response = await Axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     return {
//       type: "FETCH_POST",
//       //an action object just has to have one property = type
//       payload: response.data,
//     };
//   };

// Even if you fix you won't get the data because...
//! The action object will get sent to the reducer before the data is fetched from the API server - the APi request will never get completed before the action gets sent to the reducer and the reducer will never have access to the data
// try to fetch data, that will return a promise. When we go to dispatch our action that action will be sent ot the reducer well before we resolve that promise (before we get all the posts back from the api)
//* it doesn't wait for the promise to return the posts

//an actionCreator has to return an action object
// export const fetchPosts = () => {
//     //actionCreator to handle the logic of fetching the data
//     const promise = Axios.get("https://jsonplaceholder.typicode.com/posts");
//     return {
//       type: "FETCH_POST",
//       //an action object just has to have one property = type
//       payload: promise.data,
//     };
//   };

//*--------------------------------------------- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! For that to Worker, use redux-thunk!!!
//!!! What redux-thunk do???
//* thunk allows our actions creators to return an object or return a function
//now from our action creator right from our fetch post action, instead of returning an object, you can return a function

// export const fetchPosts = () => {
//   //return function that you can pass 2 properties
//   return async (dispatch, getState) => {
//     const response = await Axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     ); //with async await you can be returning something that is not an object ot a function, but redux and react only cares about what the actionCreators returns,which is the outer function!!!
//     //you need to dispatch the action manually (because we kind of pause the app)
//     console.log(response.data);
//     dispatch({ type: "FETCH_POSTS", payload: response.data }); //pass the action object that you want to dispatch
//     //this dispatch is the function that redux-thunk allows you to return
//   };
// };
//*---------------------------------------------

//! Loading & Error Handling
//* Make use of the Request/Success/Failure pattern to handle loading and error state
//* Separate action for Request, Success, and Failure

export const fetchPosts = () => {
  //return function that you can pass 2 properties
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_POTS_REQUEST" });

    try {
      const response = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      ); //with async await you can be returning something that is not an object ot a function, but redux and react only cares about what the actionCreators returns,which is the outer function!!!
      //you need to dispatch the action manually (because we kind of pause the app)
      console.log(response.data);

      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_POSTS_ERROR", error: error });
    }

    //dispatch({ type: "FETCH_POSTS", error: error }); //pass the action object that you want to dispatch
    //this dispatch is the function that redux-thunk allows you to return
  };
};
