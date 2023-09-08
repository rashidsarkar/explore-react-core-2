import Counter from "./Counter";
import "./App.css";
import "./Count.css";
import Team from "./Team";
import User from "./User";
import Friends from "./Friends";
import Friend from "./Friend";

function App() {
  function handleClick() {
    alert("bottn Click");
  }
  const handleClick2 = () => alert("btn click 2");
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React Core Concept 2</h1>
      <Friends></Friends>

      <User></User>
      <Team></Team>
      <Counter></Counter>

      {/* 
            <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert("3rd click")}>Click 3</button>
      <button onClick={() => addToFive(3)}>Fore</button> */}
    </>
  );
}

export default App;
