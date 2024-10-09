import React, { useEffect, useState } from "react";
import Nickname from "./Nickname";
import Product from "./Product";
import Button from "../custom/Button";
import { FRUIT } from "../../enum/enum";
import Card from "./Card";

const Order = ({ stock, handleFruitsStock, handleTotalOrderClient }) => {
  // 모든 주문카드 리스트 배열
  const [totalOrderList, setTotalOrderList] = useState([]);
  // 현재 주문카드
  const [order, setOrder] = useState([]);
  // 구매자
  const [client, setClient] = useState("");
  // 주문 과일
  const [fruit, setFruit] = useState(null);
  // 주문 갯수
  const [orderCount, setOrderCount] = useState(0);
  const [finishCount, setFinishCount] = useState(0);

  useEffect(() => {
    handleFruitsStock([{ name: fruit, count: orderCount }]);
    console.log(`order:::: ${JSON.stringify(order)}`);
  }, [order]);

  // 주문카드에 과일 추가
  const handleAddFruitCard = () => {
    if (!client) {
      return alert("구매자 명을 입력해 주세요.");
    }

    const orderFruit = stock.filter((s) => s.name === fruit)[0];
    if (Number(orderFruit.count) < orderCount)
      return alert("재고가 부족합니다.");

    if (fruit && orderCount > 0) {
      setOrder((prev) => {
        const ordered = prev.find((f) => f.name === fruit);
        // 이미 주문한 과일이라면 이전 주문 수량에 현재 주문한 수량을 플러스
        if (ordered) {
          console.log("동일 과일", fruit);
          return prev.map((f) =>
            f.name === fruit
              ? { ...f, count: Number(f.count) + Number(orderCount), client }
              : f
          );
        } else {
          // 새 과일을 추가하는 경우 기존 주문 목록에 새 항목 추가
          return [...prev, { name: fruit, count: Number(orderCount), client }];
        }
      });
    }
  };

  // 주문자의 주문을 생성
  const handleAddClientOrder = (e) => {
    setTotalOrderList((prev) => [...prev, order]);
    setFinishCount((prev) => prev + 1);
    handleTotalOrderClient();
  };

  const handleClient = (nickname) => {
    setClient(nickname);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Card>
        <div>구매하실 상품을 장바구니에 담아주세요.</div>
        <div>
          구매자 명:
          <Nickname
            style={{ backgroundColor: "#80D797" }}
            inputChange={handleClient}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <select
            name="select-product"
            id="select-product"
            onChange={(e) => setFruit(e.target.value)}
          >
            <option value="" disabled selected>
              상품
            </option>
            {FRUIT.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <label htmlFor="order-count">수량</label>
          <input
            id="order-count"
            type="number"
            min={0}
            onChange={(e) => setOrderCount(e.target.value)}
          />
          <Button
            width="100px"
            heigh="60px"
            background={"#92D5FF"}
            onClick={handleAddFruitCard}
            text="등록"
          />
        </div>
        <Product order={order} />
        <div style={{ textAlign: "right" }}>
          <Button
            width="100px"
            heigh="60px"
            background={"#92D5FF"}
            onClick={handleAddClientOrder}
            text="주문하기"
          />
        </div>
      </Card>
      <div
        style={{
          overflowY: "auto",
          maxHeight: "calc(100vh - 400px)",
          marginTop: "10px",
        }}
      >
        {finishCount > 0 &&
          totalOrderList.map((o, index) => (
            <Card>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <img
                    src="/images/nickname.png"
                    alt="nickname"
                    width={"50px"}
                  />
                  <p>{o[index].client}</p>
                </div>
                <Button
                  width="100px"
                  heigh="60px"
                  background={"rgb(128, 215, 151)"}
                  text="구매완료 카드"
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  width: "400px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              ></div>
              <Product order={o} />
              <div style={{ textAlign: "right" }}></div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Order;
