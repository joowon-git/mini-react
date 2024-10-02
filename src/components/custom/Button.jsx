import React from "react";

const Button = ({width, height, background, text, onClick }) => {

  return (
    <>
      <button style={{ width:  width , height:  height , backgroundColor:  background, padding: '10px', border: 'none', borderRadius: '6px', cursor: 'pointer'}} onClick={onClick}>{text}</button>
    </>
  );
};

export default Button;