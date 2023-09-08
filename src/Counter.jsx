import { useState } from "react";
// import "/src/Counter.css";
// import "./Count.css";

export default function Counter() {
  let [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    // count = count + 1;
    setCount(count + 1);
  };
  const handleReduse = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div className="count">
      <h2>Counter : {count} </h2>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduse}>Reduse</button>
    </div>
  );
}
