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
    <div className="md:flex gap-4 my-12]">
      <div className="md:w-[70%] ">
        {users.map((user) => (
          <SingleUser user={user} key={user.id} />
        ))}
      </div>
      <div className="md:w-[25%]"> right side</div>
    </div>
  );
};

export default Body;
