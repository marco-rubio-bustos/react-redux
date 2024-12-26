import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Hooks para usar Redux
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value); // Acceder al estado global
  const dispatch = useDispatch(); // Despachar acciones

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}

export default App;
