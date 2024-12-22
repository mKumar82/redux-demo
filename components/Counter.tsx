// components/Counter.tsx
"use client"; // Enable client-side interactivity

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, setCount } from "../redux/store";
import { RootState, AppDispatch } from "../redux/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <div className="mt-4">
        <input
          type="number"
          className="border border-gray-300 px-2 py-1 rounded"
          onChange={(e) => dispatch(setCount(Number(e.target.value)))}
          placeholder="Set Count"
        />
      </div>
    </div>
  );
};

export default Counter;
