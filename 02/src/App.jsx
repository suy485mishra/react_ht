import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count=>count+1);
    /* fark pdega inse as these are callbacks, if we just passed count,
     it would have been of no use*/
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
  };

  const sub = () => {
    // count = count - 1;-->And passing count directly, not works as it is an async fucntion
    setCount(count=>count-1);
    setCount(count=>count-3);
  };
  return (
    <>
      <div className="flex-col"><h1>My Counter {count}</h1>
      <button onClick={add}>Add</button>
      <h1>{count}</h1>
      <button onClick={sub}>Subtract</button>
      </div>
    </>
  );
}

export default App;
