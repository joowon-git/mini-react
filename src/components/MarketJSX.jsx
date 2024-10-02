import React, { useEffect, useState } from "react";
import '../common/market.css';
import Button from "./custom/Button";
import Order from "./market/Order";

const MarketJSX = () => {
  const [totalOrder, setTotalOrder] = useState(0);
  const [fruits, setFruits] = useState({});
  const [clickedOrder, setClickedOrder] = useState(false);

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

  const handleOrder = () => {
    setClickedOrder(check => !check);
  }

  console.log(`rendering: ${JSON.stringify(fruits) }`);
  return (
    <>
      <div className="container">
        <div className="total-count">총 주문 고객 수 : <span className="count">0명</span></div>
        <div className="inventory">
          <span>과일 재고</span>
          {
            Object.entries(fruits).map(([item, value], index) => (
              <div key={index}>
                {`${item} : ${value}개`}
              </div>
            ))
          }
        </div>
        <div>
          <div className="welcome" style={{ margin: '40px 0' }}>
            {clickedOrder ? '주문해주세요 손님🎁 ' : '주문 하시겠습니까? 🥳'}
          </div>
          {!clickedOrder ?
            <Button width='100px' heigh='80px' background={'#92D5FF'} onClick={null} text='주문하기' onClick={handleOrder} />
            : <Order />
          }
        </div>



      </div>
    </>
  );
}

export default MarketJSX;