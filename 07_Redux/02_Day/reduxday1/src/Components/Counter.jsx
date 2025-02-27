import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/action";
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="">
        <h1>Counter Game </h1>
        <h2>Count : {count}</h2>

        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
