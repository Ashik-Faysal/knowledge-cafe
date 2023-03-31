import React, { useEffect, useState } from "react";

const ShowCart = ({ readTime }) => {
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
  }, [readTime]);

  return (
    <div className="my-2 p-1 card border border-blue-900 bg-blue-50">
      <h4 className="text-2xl font-semibold text-blue-700 text-center">
        Spent time on read : {time} mins
      </h4>
    </div>
  );
};

export default ShowCart;
