import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { DataContext } from "./DataContext";
import { Likes } from "./Likes";
import { LikesAndComments } from "./LikesAndComments";

function App() {
  //! You can break down this into likes and comments and split up the context, so re-render for likes doesn't happen when comments increase
  //? Yet, in a bigger app, you start to write bigger code for that, and thatś when redux or mobX comes in, where you don need to write code when only one of the values changes
  const [data, setData] = useState({ likes: 0, numComments: 0 });
  return (
    <div>
      <button onClick={() => setData((d) => ({ ...d, likes: d.likes + 1 }))}>
        increment likes
      </button>
      <button
        onClick={() =>
          setData((d) => ({ ...d, numComments: d.numComments + 1 }))
        }
      >
        increment numComments
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <DataContext.Provider value={data}>
        <LikesAndComments />
        <br />
        <Likes />
      </DataContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
