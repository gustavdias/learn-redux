//? An action creator is merely a function that returns an action object.
//* Because it can be error-prone and annoying to type out these action objects by hand whenever you need one (or, let’s be honest – copy and paste them), it’s common to hand off the creation to an action creator, like this one:
export const incrementRedux = () => {
    return {
      type: "INCREMENT",
    };
  };
  
  export const decrementRedux = () => {
    return {
      type: "DECREMENT",
    };
  };
  