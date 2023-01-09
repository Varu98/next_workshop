import React from "react";

const NestedLayout = ({ children }) => {
  return (
    <>
      <div className="bg-pink-600">{children}</div>
    </>
  );
};

export default NestedLayout;
