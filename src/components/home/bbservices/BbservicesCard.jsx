import React from "react";
import { services } from "../../data/Data";

const BbservicesCard = () => {
  return (
    <>
      <div className="content grid1 mtop">
        {services.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="" />
            <h4>{items.name}</h4>
            <label>{items.description}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default BbservicesCard;
