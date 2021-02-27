import React, { useContext, useRef } from "react";
import { DataContext } from "./DataContext";

// Ideally this likes component should only re-render whenever likes is incremented, not when comments are too
// It should ignore all other changes

export const Likes = React.memo(() => {
  const { likes } = useContext(DataContext);
  const renders = useRef(0);
  return (
    <div>
      <div>number of likes: {likes}</div>
      <div>Likes component renders: {renders.current++}</div>
    </div>
  );
});
