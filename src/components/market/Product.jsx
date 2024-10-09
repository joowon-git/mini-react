import React from "react";

const Product = ({ order }) => {
  return (
    <>
      <table className="product-container">
        <thead>
          <tr>
            <th>상품 목록</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {order.map((o) => (
            <tr>
              <td>{o.name}</td>
              <td>{o.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Product;
