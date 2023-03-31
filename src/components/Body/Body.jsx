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

const [blog, setBlog] = useState([]);

const handleAddToBookmark = (blogTitle) => {
  const previousBlog = JSON.parse(localStorage.getItem("blogTitle"));
  if (previousBlog) {
    const newBlog = [...previousBlog, blogTitle];
    localStorage.setItem("blogTitle", JSON.stringify(newBlog));
    setBlog(newBlog);
  } else {
    const newBlog = [blogTitle];
    localStorage.setItem("blogTitle", JSON.stringify(newBlog));
    setBlog(newBlog);
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
      <div className="md:w-[65%] ">
        {users.map((user) => (
          <SingleUser
            user={user}
            key={user.id}
            handleReadTime={handleReadTime}
            handleAddToBookmark={handleAddToBookmark}
          />
        ))}
      </div>
      <div className="md:w-[32%] card p-4 mt-4">
        <ShowCart
          handleReadTime={handleReadTime}
          handleAddToBookmark={handleAddToBookmark}
          readTime={readTime} blog={blog} />
      </div>
    </div>
  );
};

export default Body;
