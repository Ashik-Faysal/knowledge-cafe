import React from "react";

const SingleUser = (props) => {
  console.log(props.user);
  const {
    id,
    author,
    readTime,
    about,
    authorImage,
    blogTitle,
    image,
    published,
  } = props.user;
    return (
      <div>
        <img src={image} alt="" />
        <div className="my-4 flex justify-between items-center">
          <div className="flex gap-4 my-4">
            <img className="w-12 h-12 rounded-full" src={authorImage} alt="" />
            <div>
              <h3 className="text-3xl">{author}</h3>
              <p>{published}</p>
            </div>
          </div>
          <div>
            <p>{readTime} min read</p>
          </div>
        </div>
      </div>
    );
};

export default SingleUser;
