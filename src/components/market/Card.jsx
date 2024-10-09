import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card" style={{ backgroundColor: "#C8FAB1" }}>
      {children}
    </div>
  );
};

export default Card;
