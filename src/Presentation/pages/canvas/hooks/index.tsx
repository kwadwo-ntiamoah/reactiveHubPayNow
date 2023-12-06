import { AppDispatch, RootState } from "@/Presentation/store";
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
  incrementByValue,
} from "@/Presentation/store/counter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCanvas = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  const [incrementor, _] = useState(10);

  const incrementCounter = () => dispatch(increment());

  const decrementCounter = () => dispatch(decrement());

  const incrementCounterByVal = () => dispatch(incrementByValue(incrementor));

  const incrementCounterAsync = () => dispatch(incrementAsync(5));

  const decrementCounterAsync = () => dispatch(decrementAsync(5));

  return {
    count,
    incrementCounter,
    incrementCounterAsync,
    decrementCounter,
    decrementCounterAsync,
    incrementCounterByVal,
    incrementor,
  };
};

export default useCanvas;
