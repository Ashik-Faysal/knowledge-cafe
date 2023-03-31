import React, { useEffect, useState } from 'react';
import "./Blog"
import ShowBlog from '../ShowBlog/ShowBlog';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
    return (
      <div className="blog bg-gray-300 p-4 rounded-lg">
        <header>
          <h1 className="text-5xl font-bold text-stone-600 text-center">
            From Blog Component
          </h1>
            </header>
            <div>
          {
            blogs.map(blog => <ShowBlog key={blog.id} blog={blog} />)
                }
            </div>
      </div>
    );
};

export default Blog;