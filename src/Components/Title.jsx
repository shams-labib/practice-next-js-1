import React from "react";

const Title = ({ children }) => {
  return (
    <div className="bg-sky-500 py-2 px-4">
      <h1 className="text-2xl text-center font-bold">{children}</h1>
    </div>
  );
};

export default Title;
