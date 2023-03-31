import React, { useEffect, useState } from "react";
import ShowCart from "../ShowCart/ShowCart";
import SingleUser from "../SingleUser/SingleUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Body = () => {

  //! HandleReadTime Function

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

  //! handleAddToBookmark function 
const [blog, setBlog] = useState([]);
const [isFirstClick, setIsFirstClick] = useState(true);
const handleAddToBookmark = (blogTitle) => {
  const previousBlog = JSON.parse(localStorage.getItem("blogTitle"));
  if (previousBlog) {
    if (previousBlog.includes(blogTitle)) {
      toast.error("Already bookmarked");
    } else {
      const newBlog = [...previousBlog, blogTitle];
      localStorage.setItem("blogTitle", JSON.stringify(newBlog));
      setBlog(newBlog);
      if (isFirstClick) {
        setIsFirstClick(false);
        toast.success("You have bookmarked your first article!");
      } else {
        toast.success("Successfully bookmarked");
      }
    }
  } else {
    const newBlog = [blogTitle];
    localStorage.setItem("blogTitle", JSON.stringify(newBlog));
    setBlog(newBlog);
    if (isFirstClick) {
      setIsFirstClick(false);
      toast.success("You have bookmarked your first article!");
    } else {
      toast.success("Successfully bookmarked");
    }
  }
};

  //! For Fake Data 
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
          readTime={readTime}
          blog={blog}
        />
        <ToastContainer autoClose={1500} />
      </div>
    </div>
  );
};

export default Body;
