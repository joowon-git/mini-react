import React, { useEffect, useState } from "react";

const Nickname = ({ style, inputChange }) => {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    inputChange(nickname);
  }, [nickname]);

  const handleClient = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <input
        className="nickname-input"
        type="text"
        style={style}
        onChange={handleClient}
      />
    </>
  );
};

export default Nickname;
