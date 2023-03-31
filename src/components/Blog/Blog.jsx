import React, { useEffect, useState } from 'react';
import "./Blog"

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
            blogs.map(blog => {
              return (
                <div className='bg-gray-400  p-4 my-6 shadow-2xl rounded-3xl'>
                  <h4 className='text-2xl font-semibold mb-2'>{blog.id}.{blog.question}</h4>
                  <p>Answer: {blog.answer}</p>
                </div>
              )
            })
                }
            </div>
      </div>
    );
};

export default Blog;