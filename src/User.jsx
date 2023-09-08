import { useEffect, useState } from "react";

export default function User() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>uses : {users.length}</h3>
    </div>
  );
}
