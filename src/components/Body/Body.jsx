import React, { useEffect, useState } from "react";
import ShowCart from "../ShowCart/ShowCart";
import SingleUser from "../SingleUser/SingleUser";

const Body = () => {
  const [readTime, setReadTime] = useState(0);
  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const total = previousReadTime + time;
      localStorage.setItem("readTime", total);
      setReadTime(total);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };
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
          <SingleUser
            user={user}
            key={user.id}
            handleReadTime={handleReadTime}
          />
        ))}
      </div>
      <div className="md:w-[25%] card border border-warning">
        <ShowCart handleReadTime={handleReadTime} readTime={readTime} />
      </div>
    </div>
  );
};

export default Body;
