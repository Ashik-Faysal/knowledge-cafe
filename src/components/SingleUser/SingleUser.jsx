import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleUser = (props) => {
  // console.log(props.user);
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
  const handleReadTime = props.handleReadTime;
  const handleAddToBookmark = props.handleAddToBookmark;
  return (
    <div className="border border-warning p-4 my-4 card">
      <img src={image} alt="" />
      <div className="my-4 flex justify-between items-center">
        <div className="flex gap-4 my-4">
          <img className="w-12 h-12 rounded-full" src={authorImage} alt="" />
          <div>
            <h3 className="text-3xl font-bold">{author}</h3>
            <p>{published}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span>{readTime} mins read</span>
          <FontAwesomeIcon
            onClick={() => handleAddToBookmark(blogTitle)}
            icon={faBookmark}
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">{blogTitle}</h1>

        <button
          onClick={() => handleReadTime(readTime)}
          className="btn btn-link text-blue-700"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default SingleUser;
