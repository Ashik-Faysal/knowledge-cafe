import React, { useEffect, useState } from "react";
import SingleUser from "../SingleUser/SingleUser";

const Body = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user) => (
          <SingleUser
              user={user} key={user.id}
          />
      ))}
    </div>
  );
};

export default Body;
