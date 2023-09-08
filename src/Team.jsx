import { useState } from "react";
import "./team.css";
export default function Team() {
  const [team, setTeam] = useState(11);
  const handleAdd = () => {
    let newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    let newTeam = team - 1;
    setTeam(newTeam);
  };
  return (
    <div className="team">
      <h3>Player : {team}</h3>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleRemove}>Removed</button>
    </div>
  );
}
