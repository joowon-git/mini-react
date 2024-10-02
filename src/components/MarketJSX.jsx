import React, { useEffect, useState } from "react";
import '../common/market.css';

const MarketJSX = () => {
  const [totalOrder, setTotalOrder] = useState(0);
  const [fruits, setFruits] = useState({});

  useEffect(() => {
    const fruit = ['Banana', 'Apple', 'Orange', 'Cheery', 'Mango'];
    const count = [130, 80, 29, 32, 10];
    const setting = {};

    fruit.map(item => {
      const randomIndex = Math.floor(Math.random() * count.length);
      setting[item] = count[randomIndex];
    });
    setFruits(setting);
    console.log(setting);

  }, []);

  console.log(JSON.stringify(fruits));
  return (
    <>
      <div className="container">
        <div className="total-count">총 주문 고객 수 : <span className="count">0명</span></div>
        <div className="inventory">
          <span>과일 재고</span>
          {
            Object.entries(fruits).map(([item, value], index) => (
              <div>
                {`${item} : ${value}개`}
              </div>
            ))
          }
        </div>
        <button>주문하기</button>
        <div className="welcome">
          어서오세요 손님🎁
        </div>
      </div>
    </>
  );
}

export default MarketJSX;