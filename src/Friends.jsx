import React, { useEffect, useState } from "react";
import "./team.css";
import Friend from "./Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="team">
      <h3>Friends : {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </div>
  );
};

export default Friends;
