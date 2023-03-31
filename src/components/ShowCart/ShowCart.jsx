import React, { useEffect, useState } from "react";

const ShowCart = ({ readTime, blog }) => {
  const [time, setTime] = useState(readTime);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
  }, [readTime]);

  useEffect(() => {
    const getBlogsFromStorage = localStorage.getItem("blogTitle");
    if (getBlogsFromStorage) {
      const previousBlogs = JSON.parse(getBlogsFromStorage);
      setBlogs(previousBlogs);
    }
  }, [blog]);

  return (
    <div>
      <div className="my-2 p-1 card border border-blue-900 bg-blue-50">
        <h4 className="text-2xl font-semibold text-blue-700 text-center">
          Spent time on read : {time} mins
        </h4>
      </div>
      <div className="bg-slate-200 p-4">
        <h3 className="text-3xl">Bookmarked Blog : {blogs.length}</h3>
        {blogs.map((blog, index) => (
          <p
            className="text-xl bg-slate-100 my-3 p-2 shadow-lg rounded-2xl"
            key={index}
          >
            {blog}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ShowCart;
