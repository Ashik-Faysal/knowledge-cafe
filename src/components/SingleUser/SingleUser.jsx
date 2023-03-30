import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


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
    <div className="border border-warning p-4 my-4 card">
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
          <span className="m-2">{readTime} min read</span>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
      <div>
        <h1 className="text-4xl">{blogTitle}</h1>

        <button className="btn btn-link text-blue-700">Mark as read</button>
      </div>
    </div>
  );
};

export default SingleUser;
