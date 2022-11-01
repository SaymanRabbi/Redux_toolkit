import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { add, decrement, increment } from "./Store/Store";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.counter);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const addNew = () => {
    dispatch(add(10));
  };
  return (
    <div className="App">
      <h1>This is Redux with TypeScript</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <button onClick={() => addNew()}>Add By 10</button>
    </div>
  );
}

export default App;
