import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./Store/Store";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.counter);
  return (
    <div className="App">
      <h1>This is Redux with TypeScript</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
