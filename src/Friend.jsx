import React from "react";

const Friend = ({ friend }) => {
  return (
    <div className="team">
      <h3>Name : {friend.name}</h3>
      <p>Email : {friend.email}</p>
    </div>
  );
};

export default Friend;
