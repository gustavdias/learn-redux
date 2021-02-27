//component responsible for fetching the data from the API and rendering it.

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/action";

// Post component should fetch the data when the component mounts = useEffect for hooks or componentDidMount for Classes
//With redux you don't want the component to perform the API request
// useEffect(() => {
//     Axios.get("url")
// }, [])

//* You want to use the actionCreators to do the request

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPosts = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }
    return state.items.map((eL) => {
      return <h3 key={eL.id}>{eL.title}</h3>;
    });
  };

  return (
    <div>
      {renderPosts()}
      {/* {posts.map((eL) => {
        return (<h3 key={eL.id}>{eL.title}</h3>);
      })} */}
    </div>
  );
};

export default Posts;
