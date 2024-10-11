import React, { useEffect, useState } from "react";
import "../common/market.css";
import Button from "./custom/Button";
import Order from "./market/Order";
import Product from "./market/Product";
import { FRUIT } from "../enum/enum";

const MarketJSX = () => {
  // 총 주문 고객 수
  const [totalOrderClient, setTotalOrderClient] = useState(0);
  // 과일 재고
  const [fruitsStock, setFruitsStock] = useState([]);
  // 주문하기 버튼 노출 여부
  const [clickedOrder, setClickedOrder] = useState(false);

  useEffect(() => {
    const fruit = FRUIT;
    const count = [130, 80, 29, 32, 10];
    const setting = fruit.map((item) => {
      const randomIndex = Math.floor(Math.random() * count.length);
      return {
        name: item,
        count: count[randomIndex],
      };
    });

    setFruitsStock(setting);
    console.log(setting);
  }, []);

  const handleOrder = () => {
    setClickedOrder((check) => !check);
  };

  const handleTotalOrderClient = () => {
    setTotalOrderClient((prev) => prev + 1);
  };

  const handleFruitsStock = (order) => {
    console.log(`order: ${JSON.stringify(order)}`);
    const newFruitsStock = fruitsStock.map((fruit) => {
      const orderFruit = order.find((item) => item.name === fruit.name);
      console.log(`orderFruit: ${JSON.stringify(orderFruit)}`);
      if (orderFruit) {
        // orderFruit는 객체이므로 const [_, count]로 사용하면 안됨
        const { _, count } = orderFruit; // 주문 수량
        return {
          ...fruit,
          count: Math.max(0, fruit.count - count), // 재고 차감
        };
      }
      return fruit;
    });
    setFruitsStock(newFruitsStock);
  };

  console.log(`rendering: ${JSON.stringify(fruitsStock)}`);
  return (
    <>
      <div className="container">
        <div className="inventory-container">
          <div className="total-count">
            총 주문 고객 수 :{" "}
            <span className="count">{totalOrderClient}명</span>
          </div>
          <div className="inventory">
            <span>과일 재고</span>
            {fruitsStock.map((fruit, index) => (
              <div className="stock" key={index}>
                {`${fruit.name} : ${fruit.count}개`}
              </div>
            ))}
          </div>
        </div>
        <div className="order-card">
          <div className="welcome" style={{ margin: "40px 0" }}>
            {clickedOrder ? "주문해주세요 손님🎁 " : "주문 하시겠습니까? 🥳"}
          </div>
          {!clickedOrder ? (
            <Button
              width="100px"
              heigh="80px"
              background={"#92D5FF"}
              onClick={null}
              text="주문하기"
              onClick={handleOrder}
            />
          ) : (
            <Order
              stock={fruitsStock}
              handleFruitsStock={handleFruitsStock}
              handleTotalOrderClient={handleTotalOrderClient}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MarketJSX;
