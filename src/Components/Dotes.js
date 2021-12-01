import React from "react";

export const Dotes = ({ colors }) => {
  const style = {
    backgroundColor: colors,
    height: 15,
    width: 15,
    margin: "0  10px",
    borderRadius: "50%",
    display: "inline-block",
    marginTop:"5px"
  };
  return (
    <div>
      <p style={style}></p>
    </div>
  );
};
