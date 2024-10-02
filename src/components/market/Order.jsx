import React from "react";
import Nickname from "./Nickname";

const Order = () => {
  return (
    <>
      <div className="card">
        <div>구매하실 상품을 장바구니에 담아주세요.</div>
        <div>구매자 명: <Nickname style={{ backgroundColor: '#80D797' }} /> </div>
      </div>
    </>
  );
};

export default Order;