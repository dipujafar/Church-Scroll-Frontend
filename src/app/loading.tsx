import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-280px)]">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default loading;
