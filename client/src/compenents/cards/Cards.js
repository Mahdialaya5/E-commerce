import React from "react";
import "./card.css";

function Cards({el}) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <img
            src={el.img}
            alt="product"
            style={{
              width: "80px",
              height: "80px",
              margin: "2px",
              borderRadius: "13%",
            }}
          />
          <h2 className="card-title">{el.name}</h2>
          <h3>company:{el.seller && el.seller.name} </h3>
          <h5 style={{ fontSize: "15px", fontWeight: "600px" }}>
            price:{el.price} d
          </h5>
        </div>
      </div>
    </>
  );
}

export default Cards;
